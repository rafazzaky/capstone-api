const routes = (handler) => [
  {
    method: 'POST',
    path: '/predictTomato',
    handler: handler.postPredictTomatoHandler,
    options: {
      auth: 'capstone_jwt',
    },
  },
  {
    method: 'POST',
    path: '/predictPaprika',
    handler: handler.postPredictPaprikaHandler,
    options: {
      auth: 'capstone_jwt',
    },
  },
  {
    method: 'POST',
    path: '/predictPotato',
    handler: handler.postPredictPotatoHandler,
    options: {
      auth: 'capstone_jwt',
    },
  },
  {
    method: 'POST',
    path: '/upload',
    handler: handler.uploadToGCS,
    options: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024,
      },
    },
  },
];

module.exports = routes;
