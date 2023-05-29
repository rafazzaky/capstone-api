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
