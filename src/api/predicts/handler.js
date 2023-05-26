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
    const fileUrl = await this._storageService.uploadImageToGCS(file);

    return h.response({
      status: 'success',
      data: {
        fileUrl,
      },
    }).code(201);
  }

  async postPredictTomatoHandler(req, h) {
    const category = 'Tomato';
    const { data } = req.payload;
    this._validator.validateImageHeaders(data.hapi.headers);
    const { id: credentialId } = req.auth.credentials;

    const result = await this._predictzService.predictTomato(data);
    const imageUrl = await this._storageService.writeFile(data, data.hapi);
    const historyId = await this._histroryService.addHistory({
      credentialId, category, result, imageUrl,
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

  async postPredictPaprikaHandler(req, h) {
    const category = 'Paprika';
    const { data } = req.payload;
    this._validator.validateImageHeaders(data.hapi.headers);
    const { id: credentialId } = req.auth.credentials;

    const result = await this._predictService.predictPaprika(data);
    const imageUrl = await this._storageService.writeFile(data, data.hapi);
    const historyId = await this._histroryService.addHistory({
      credentialId, category, result, imageUrl,
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

  async postPredictPotatoHandler(req, h) {
    const category = 'Potato';
    const { data } = req.payload;
    this._validator.validateImageHeaders(data.hapi.headers);
    const { id: credentialId } = req.auth.credentials;

    const result = await this._predictService.predictPotato(data);
    const imageUrl = await this._storageService.writeFile(data, data.hapi);
    const historyId = await this._histroryService.addHistory({
      credentialId, category, result, imageUrl,
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
