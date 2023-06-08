const routes = (handler) => [
  {
    method: 'POST',
    path: '/predictpaprika',
    handler: handler.postPredictPaprikaHandler,
    options: {
      auth: 'capstone_jwt',
      payload: {
        output: 'stream',
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024,
      },
    },
  },
  {
    method: 'POST',
    path: '/predictpotato',
    handler: handler.postPredictPotatoHandler,
    options: {
      auth: 'capstone_jwt',
      payload: {
        output: 'stream',
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024,
      },
    },
  },
  {
    method: 'POST',
    path: '/predicttomato',
    handler: handler.postPredictTomatoHandler,
    options: {
      auth: 'capstone_jwt',
      payload: {
        output: 'stream',
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024,
      },
    },
  },
  {
    method: 'POST',
    path: '/upload',
    handler: handler.uploadToGCS,
    options: {
      payload: {
        output: 'stream',
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024,
      },
    },
  },
];

module.exports = routes;
