/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
const tf = require('@tensorflow/tfjs-node');
const path = require('path');
const sharp = require('sharp');

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

  async preprocessImagePaprika(imageBuffer) {
  // Resize the image to the desired dimensions
    const resizedImageBuffer = await sharp(imageBuffer).resize(256, 256).toBuffer();

    // Convert the image buffer to a tensor
    const imageTensor = tf.node.decodeImage(resizedImageBuffer, 3);

    // Normalize the pixel values to the range [0, 1]
    const normalizedTensor = imageTensor.div(255.0);

    // Expand dimensions to match the model's expected input shape
    const reshapedTensor = normalizedTensor.expandDims();

    return reshapedTensor;
  }

  async predictPaprika(image) {
    try {
      // Membaca data gambar dari request
      const imageBuffer = image._data;
      const modelFile = path.resolve(__dirname, '../../model/Paprika', `model.json`);

      // Load model
      const model = await tf.loadLayersModel(`file://${modelFile}`);

      // Preprocess foto
      const preprocessedImage = await this.preprocessImagePaprika(imageBuffer);

      // Predict using the model
      const predictions = model.predict(preprocessedImage);

      // Convert predictions to a JavaScript array
      const predictionResult = await predictions.array();
      // Mengembalikan hasil prediksi
      console.log(predictions);
      console.log(predictionResult);
      return { result: { accuracy: predictionResult[0][0] } };
    } catch (error) {
      console.error(error);
      throw new Error('Something went wrong');
    }
  }

  async preprocessImageTomato(imageBuffer) {
    // Resize the image to the desired dimensions
    const resizedImageBuffer = await sharp(imageBuffer).resize(224, 224).toBuffer();

    // Convert the image buffer to a tensor
    const imageTensor = tf.node.decodeImage(resizedImageBuffer, 3);

    // Normalize the pixel values to the range [0, 1]
    const normalizedTensor = imageTensor.div(255.0);

    // Expand dimensions to match the model's expected input shape
    const reshapedTensor = normalizedTensor.expandDims(0); // Add batch dimension

    return reshapedTensor;
  }

  async predictTomato(image) {
    try {
      // Read image data from request
      const imageBuffer = image._data;
      const modelFile = path.resolve(__dirname, '../../model/Tomato', `model.json`);

      // Load model
      const model = await tf.loadLayersModel(`file://${modelFile}`);

      // Preprocess photo
      const preprocessedImage = await this.preprocessImageTomato(imageBuffer);

      // Predict using the model
      const predictions = model.predict(preprocessedImage);

      // Convert predictions to a JavaScript array
      const predictionResult = await predictions.array();
      console.log(predictions);
      console.log(predictionResult);
      // Return the prediction result
      return { result: { accuracy: predictionResult[0][0] } };
    } catch (error) {
      console.error(error);
      throw new Error('Something went wrong');
    }
  }

  async preprocessImagePotato(imageBuffer) {
    // Resize the image to the desired dimensions
    const resizedImageBuffer = await sharp(imageBuffer).resize(256, 256).toBuffer();

    // Convert the image buffer to a tensor
    const imageTensor = tf.node.decodeImage(resizedImageBuffer, 3);

    // Normalize the pixel values to the range [0, 1]
    const normalizedTensor = imageTensor.div(255.0);

    // Expand dimensions to match the model's expected input shape
    const reshapedTensor = normalizedTensor.expandDims(0); // Add batch dimension

    return reshapedTensor;
  }

  async predictPotato(image) {
    try {
      // Read image data from request
      const imageBuffer = image._data;
      const modelFile = path.resolve(__dirname, '../../model/Potato', `model.json`);

      // Load model
      const model = await tf.loadLayersModel(`file://${modelFile}`);

      // Preprocess photo
      const preprocessedImage = await this.preprocessImagePotato(imageBuffer);

      // Predict using the model
      const predictions = model.predict(preprocessedImage);

      // Convert predictions to a JavaScript array
      const predictionResult = await predictions.array();
      console.log(predictions);
      console.log(predictionResult);
      // Return the prediction result
      return { result: { accuracy: predictionResult[0][0] } };
    } catch (error) {
      console.error(error);
      throw new Error('Something went wrong');
    }
  }
}

module.exports = PredictService;
