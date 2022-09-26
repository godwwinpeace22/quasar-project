// src/server.js
import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      invoice: Model,
      customer: Model,
    },

    seeds(server) {
      server.create('invoice', {
        id: '1',
        invoiceNumber: 'INV-2022-010',
        customerId: '2',
        issuedDate: '11 Jan 2022',
        dueDate: '18 Jan 2022',
        paymentMethod: {
          method: 'wise',
          accountName: 'Barly Vallendito',
          accountNumber: '9000 888 83334 3333',
          routingNumber: '084009519',
        },
        billingAddress: {
          name: 'Zaky Grizly',
          company: 'Moonlight Agency LTD',
          city: 'New York',
          country: 'USA',
        },
        total: 4800,
        items: [
          {
            name: 'Payment Project - Moonlight Mobile Design',
            hours: 120,
            rate: 40,
            tax: 0,
            total: 4800,
          },
        ],
      });
      server.create('customer', {
        id: '2',
        name: 'Dipa Inhouse',
        email: 'hello@dipainhouse.com',
        address: {
          postalCode: '65115',
          city: 'Malong City',
          state: 'East Java',
          country: 'Indonesia',
          street: 'Ihen Boulevard Street 101',
        },
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/invoices/:id', (schema, request) => {
        let id = request.params.id;
        return schema.invoices.find(id);
      });
      this.get('/customers/:id', (schema, request) => {
        let id = request.params.id;
        return schema.customers.find(id);
      });
    },
  });

  return server;
}
