import { createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}

/**
 * It creates a server that has a `/api/users` route that returns a list of users
 * and a `/users` route that returns a list of users
 * @returns A server instance
 */

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i) { return faker.internet.userName() },
                email() { 
                    return faker.internet.email().toLowerCase(); 
                },
                createdAt() { 
                    return faker.date.recent(10);
                },
            })
        },

        seeds(server) {
            server.createList('user',10)
        },

        routes() {
            this.namespace = 'api'
            this.timing = 750;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        }
    })

    return server;
}