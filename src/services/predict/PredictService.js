/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
const { createCanvas, loadImage } = require('canvas');
const tf = require('@tensorflow/tfjs-node');

class PredictService {
  // eslint-disable-next-line no-unused-vars
  async predictImage(image, category) {
    const result = {
      category,
      prediction: 'dummy_prediction',
      confidence: 0.85,
    };
    return result;
  }

  async preprocessImage(imageBuffer) {
    // Buat canvas menggunakan library 'canvas'
    const canvas = createCanvas(224, 224);
    const ctx = canvas.getContext('2d');

    // Muat gambar ke dalam canvas
    const img = await loadImage(imageBuffer);
    ctx.drawImage(img, 0, 0, 224, 224);

    // Ambil data piksel dari canvas dan kembalikan sebagai array
    const imageData = ctx.getImageData(0, 0, 224, 224).data;
    return Array.from(imageData);
  }

  async predict(image, category) {
    try {
      // Membaca data gambar dari request
      const imageBuffer = image._data;

      // Determine the model file based on the category
      // Potato.json, Tomato.json, Paprika.json
      const modelFile = `${category}.json`;

      // Load model
      const model = await tf.loadLayersModel(modelFile);

      // Preprocess foto
      const preprocessedImage = await this.preprocessImage(imageBuffer);

      // Ubah foto menjadi tensor
      const tensor = tf.tensor(preprocessedImage);

      // Prediksi menggunakan model
      const predictions = model.predict(tensor);

      // Dapatkan hasil prediksi
      const predictionResult = predictions.arraySync();

      console.log(predictionResult);
      // Mengembalikan hasil prediksi
      return { result: predictionResult };
    } catch (error) {
      console.error(error);
      throw new Error('Something went wrong');
    }
  }
}

module.exports = PredictService;
