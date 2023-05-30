/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const autoBind = require('auto-bind');

class HistoryHandler {
  constructor(service) {
    this._service = service;

    autoBind(this);
  }

  async getHistoryHandler(req, h) {
    const { id: credentialId } = req.auth.credentials;
    const history = await this._service.getHistory(credentialId);

    return {
      status: 'success',
      data: {
        history,
      },
    };
  }

  async getHistoryByIdHandler(req, h) {
    const { id } = req.params;
    const { id: credentialId } = req.auth.credentials;

    await this._service.verifyHistoryOwner(id, credentialId);
    const history = await this._service.getHistoryById(id);
    return {
      status: 'success',
      data: {
        history,
      },
    };
  }
}
module.exports = HistoryHandler;
