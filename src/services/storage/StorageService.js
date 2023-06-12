/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
const { Storage } = require('@google-cloud/storage');
const { v4: uuidv4 } = require('uuid');

class StorageClass {
  constructor() {
    this.storage = new Storage({
      projectId: process.env.GCS_PROJECT_ID,
      keyFilename: process.env.GCS_KEYFILE_PATH,
      bucketName: process.env.GCS_BUCKET_NAME,
    });
    this.bucket = this.storage.bucket(process.env.GCS_BUCKET_NAME);
  }

  async writeFile(file, category) {
    const uniqueId = uuidv4(); // Generate a random unique string
    const fileName = `${category}/${Date.now()}_${uniqueId}`;
    const fileUpload = this.bucket.file(fileName);
    let fileUrl;
    try {
      const bufferData = file._data;
      await fileUpload.save(bufferData);
      fileUrl = `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}/${fileName}`;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }

    return fileUrl;
  }
}

module.exports = StorageClass;
