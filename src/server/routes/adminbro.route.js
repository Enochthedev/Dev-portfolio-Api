import { sequelize } from '../../data/models';

const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');

AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = new AdminBro({
  rootPath: '/admin',
  resources: [
    {
      resource: sequelize.models.Project,
      options: {
        parent: {
          name: 'Database',
          icon: 'Api',
        },
        listProperties: [
          'id',
          'image',
          'livelink',
          'githublink',
          'description',
          'technologies',
          'coDevs',
        ],
      },
    },
  ],
  branding: {
    companyName: 'Database dashboard',
    softwareBrothers: false,
    logo: false,
    favicon: 'https://imagine.ai/img/favicon.ico',
  },
});
const router = AdminBroExpress.buildRouter(adminBro);

export { router as adminbroRouter };
