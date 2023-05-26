const routes = (handler) => [
  {
    method: 'GET',
    path: '/history',
    handler: handler.getHistoryHandler,
    options: {
      auth: 'capstone_jwt',
    },
  },
  {
    method: 'GET',
    path: '/history/{id}',
    handler: handler.getHistoryByIdHandler,
    options: {
      auth: 'capstone_jwt',
    },
  },
];

module.exports = routes;
