# C23-PR584 API
Dokumentasi API yang digunakan pada Capstone Project C23-PR584

## How to Run Application
`npm install`
`npm run start-prod`

## Users

### Registrasi User

- Method: `POST`
- Path: `/users`
- Deskripsi: Digunakan untuk registrasi user
- Menerima Data:
  ```json
  {
    "username": "string",
    "password": "string",
    "fullname": "string",
    "provinsi": "string"
  }
  ```
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "message": "User berhasil ditambahkan",
    "data": {
      "userId": "<userId>"
    }
  }
  ```
### Mendapatkan Detail User

- Method: `GET`
- Path: `/users/{id}`
- Deskripsi: Mendapatkan detail dari user berdasarkan ID user yang diberikan.
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "data": {
        "user": {
            "id": "<userId>",
            "username": "<username>",
            "fullname": "<fullname>"
        }
    }
  }
  ```

## Authentications

### Mendapatkan Access Token dan Refresh Token

- Method: `POST`
- Path: `/authentications`
- Deskripsi: Digunakan untuk mendapatkan access token dan refresh token saat login
- Menerima Data:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "message": "Authentication berhasil ditambahkan",
    "data": {
      "accessToken": "<accessToken>",
      "refreshToken": "<refreshToken>"
    }
  }
  ```

### Memperbarui Access Token

- Method: `PUT`
- Path: `/authentications`
- Deskripsi: Digunakan untuk memperbarui access token menggunakan refresh token
- Menerima Data:
  ```json
  {
    "refreshToken": "string"
  }
  ```
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "message": "Access token berhasil diperbarui",
    "data": {
      "accessToken": "<accessToken>"
    }
  }
  ```

### Menghapus Refresh Token

- Method: `DELETE`
- Path: `/authentications`
- Deskripsi: Digunakan untuk menghapus refresh token saat logout
- Menerima Data:
  ```json
  {
    "refreshToken": "string"
  }
  ```
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "message": "Refresh token berhasil dihapus"
  }
  ```

## Predicts

### Memprediksi Foto Paprika yang Diberikan oleh User

- Method: `POST`
- Path: `/predictpotato`
- Deskripsi: Memprediksi foto tumbuhan paprika yang diberikan oleh pengguna dengan model machine learning.
- Menerima Data:
	- `id`: Diperoleh dari `Bearer Token` yang diberikan saat request
	- `file`: Foto yang akan diprediksi oleh model machine learning
  
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "message": "Gambar Berhasil Diprediksi",
    "data": {
        "historyId": "<historyId>",
        "category": "Paprika",
        "imageUrl": "<imageUrl>",
        "result": {
            "isDetected": "true/false",
            "labels": "<labels>",
            "accuracy": "<accuracy>",
        }
    }
  }
  ```
### Memprediksi Foto Kentang yang Diberikan oleh User

- Method: `POST`
- Path: `/predictpotato`
- Deskripsi: Memprediksi foto tumbuhan kentang yang diberikan oleh pengguna dengan model machine learning.
- Menerima Data:
	- `id`: Diperoleh dari `Bearer Token` yang diberikan saat request
	- `file`: Foto yang akan diprediksi oleh model machine learning
  
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "message": "Gambar Berhasil Diprediksi",
    "data": {
        "historyId": "<historyId>",
        "category": "Kentang",
        "imageUrl": "<imageUrl>",
        "result": {
            "isDetected": "true/false",
            "labels": "<labels>",
            "accuracy": "<accuracy>",
        }
    }
  }
  ```

### Memprediksi Foto Tomat yang Diberikan oleh User

- Method: `POST`
- Path: `/predicttomato`
- Deskripsi: Memprediksi foto tumbuhan tomat yang diberikan oleh pengguna dengan model machine learning.
- Menerima Data:
	- `id`: Diperoleh dari `Bearer Token` yang diberikan saat request
	- `file`: Foto yang akan diprediksi oleh model machine learning
  
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "message": "Gambar Berhasil Diprediksi",
    "data": {
        "historyId": "<historyId>",
        "category": "Tomato",
        "imageUrl": "<imageUrl>",
        "result": {
            "isDetected": "true/false",
            "labels": "<labels>",
            "accuracy": "<accuracy>",
        }
    }
  }
  ```

## History

### Mendapatkan History User

- Method: `GET`
- Path: `/history`
- Deskripsi: Mendapatkan riwayat aktivitas pengguna.
- Menerima Data:
	- id: Diperoleh dari `Bearer Token` yang diberikan saat request
  
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "data": {
      "history": [
            {
                "id": "id-1",
                "categories": "Tomato",
                "image_url": "image1.jpg",
                "created_at": "2023-01-01"
            },
            {
                "id": "id-2",
                "categories": "Paprika",
                "image_url": "image2.jpg",
                "created_at": "2023-01-02"
            },
            {
                "id": "id-3",
                "categories": "Potato",
                "image_url": "image3.jpg",
                "created_at": "2023-01-03"
            }
        ]
    }
  }
  ```

### Mendapatkan Detail History

- Method: `GET`
- Path: `/history/{id}`
- Deskripsi: Mendapatkan detail dari riwayat aktivitas berdasarkan ID history yang diberikan.
- Menerima Data:
	- user_id: Diperoleh dari `Bearer Token` yang diberikan saat request
  
- Mengembalikan Data:
  ```json
  {
    "status": "success",
    "data": {
      "history": {
        "id": "<historyId>",
        "user_id": "<userId>",
        "categories": "<historyCategory>",
        "image_url": "<imageUrl>",
        "data": {"result": "<predictionResult>"},
        "created_at": "<createdAt>"
      }
    }
  }
  ```