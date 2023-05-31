const routes = (handler) => [
  {
    method: 'POST',
    path: '/predict',
    handler: handler.postPredictHandler,
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
