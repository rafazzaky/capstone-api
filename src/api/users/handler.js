/* eslint-disable no-underscore-dangle */
const autoBind = require('auto-bind');

class UserHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postUserHandler(req, h) {
    this._validator.validateUserPayload(req.payload);
    const {
      username, password, fullname, provinsi,
    } = req.payload;
    await this._service.verifyNewUsername(username);
    const userId = await this._service.addUser({
      username,
      password,
      fullname,
      provinsi,
    });

    const response = h.response({
      status: 'success',
      message: 'User berhasil ditambahkan',
      data: {
        userId,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = UserHandler;
