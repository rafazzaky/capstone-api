const fs = require('fs');
const { Storage } = require('@google-cloud/storage');

class StorageClass {
  constructor() {
    this.storage = new Storage({
      projectId: process.env.GCS_PROJECT_ID,
      keyFilename: process.env.GCS_KEYFILE_PATH,
    });
    this.bucket = this.storage.bucket(process.env.GCS_BUCKET_NAME);
  }

  async writeFile(file) {
    const fileName = `${Date.now()}_${file.hapi.filename}`;
    const fileUpload = this.bucket.file(fileName);

    await new Promise((resolve, reject) => {
      console.log(file);
      file.pipe(fs.createWriteStream(file.hapi.path))
        .on('finish', () => {
          fileUpload.save(fs.createReadStream(file.hapi.path))
            .then(() => {
              fileUpload.makePublic()
                .then(() => resolve())
                .catch((error) => reject(error));
            })
            .catch((error) => reject(error));
        })
        .on('error', (error) => reject(error));
    });

    const fileUrl = `https://storage.googleapis.com/${process.env.GCS_BUCKET_NAME}/${fileName}`;
    return fileUrl;
  }
}

module.exports = StorageClass;
