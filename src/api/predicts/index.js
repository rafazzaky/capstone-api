const PredictHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'predicts',
  version: '1.0.0',
  register: async (
    server,
    {
      predictService, storageService, historyService, validator,
    },
  ) => {
    const predictHandler = new PredictHandler(
      predictService,
      storageService,
      historyService,
      validator,
    );
    server.route(routes(predictHandler));
  },
};
