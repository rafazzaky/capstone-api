const HistoryHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'history',
  version: '1.0.0',
  register: async (
    server,
    {
      service,
    },
  ) => {
    const historyHandler = new HistoryHandler(
      service,
    );
    server.route(routes(historyHandler));
  },
};
