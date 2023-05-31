/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
const autoBind = require('auto-bind');

class PredictHandler {
  constructor(predictService, storageService, historyService, validator) {
    this._predictService = predictService;
    this._storageService = storageService;
    this._historyService = historyService;
    this._validator = validator;

    autoBind(this);
  }

  async uploadToGCS(req, h) {
    const { file } = req.payload;
    this._validator.validateImageHeaders(file.hapi.headers);
    const fileUrl = await this._storageService.writeFile(file);

    return h.response({
      status: 'success',
      data: {
        fileUrl,
      },
    }).code(201);
  }

  async postPredictHandler(req, h) {
    const { file, category } = req.payload;
    this._validator.validateImageHeaders(file.hapi.headers);
    const { id: credentialId } = req.auth.credentials;
    const result = await this._predictService.predictImage(file, category);
    // const imageUrl = await this._storageService.writeFile(file);
    const imageUrl = 'https://storage.googleapis.com/c23-pr584-bucket/1685440400871_638fb594-be2c-4221-b081-496a77d08df9';
    const historyId = await this._historyService.addHistory({
      owner: credentialId, category, result, image: imageUrl,
    });

    const response = h.response({
      status: 'success',
      message: 'Gambar Berhasil Diprediksi',
      data: {
        historyId,
        imageUrl,
        result,
      },
    });
    response.code(201);
    return response;
  }
}
module.exports = PredictHandler;
