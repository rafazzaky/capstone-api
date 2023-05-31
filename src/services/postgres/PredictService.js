/* eslint-disable class-methods-use-this */
/* eslint-disable eqeqeq */
/* eslint-disable no-promise-executor-return */ // Delete after dummy

class PredictService {
  // eslint-disable-next-line no-unused-vars
  async predictImage(image, category) {
    const result = {
      imageFilename: image.hapi.filename,
      category,
      prediction: 'dummy_prediction',
      confidence: 0.85,
    };
    return result;
  }
}

module.exports = PredictService;
