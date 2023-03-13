import { createServer, Model } from 'miragejs'

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