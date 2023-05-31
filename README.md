# C23-PR584 API
Dokumentasi API yang digunakan pada Capstone Project C23-PR584


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
on progress

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
	- Id: Diperoleh dari `Bearer Token` yang diberikan saat request
  
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