# 🚗 Car Management API

Selamat datang di **Car Management API**! Proyek ini merupakan aplikasi untuk mengelola data mobil dan pengguna dalam sistem rental mobil. Dibangun menggunakan **Express.js**, **PostgreSQL**, dan **Sequelize** sebagai ORM, API ini menyediakan operasi CRUD untuk pengelolaan data mobil dan pengguna. 

## 🎯 Deskripsi Proyek

Dalam proyek ini, Anda akan menemukan fitur-fitur sebagai berikut:
- **CRUD** untuk data mobil dan pengguna.
- Sistem **autentikasi** dan **otorisasi** menggunakan **JWT (JSON Web Token)**.
- **Hashing password** menggunakan **bcrypt**.
- Dokumentasi API yang jelas menggunakan **Swagger**.

## ⚙️ Teknologi yang Digunakan

- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **JWT (JSON Web Token)**
- **Swagger**
- **Bcrypt**
- **PostgreSQL**

## 📥 Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan aplikasi ini di lingkungan lokal Anda:

### 1. Clone Repository
Clone repo dari GitHub:
```bash
git clone https://github.com/wahyuanang/24001183-km7-waz-CarManagementApi-ch5.git

### 2. Intall Dependencies
npm install

### 3. Atur file .env
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=

PUBLIC_KEY=
PRIVATE_KEY=
URL_ENDPOINT=

JWT_SECRET=
JWT_EXPIRED=

### 4. Jalankan database
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all

### 4. Jalankan aplikasi
npm run dev






## Authentication
Akses ke beberapa endpoint dibatasi untuk peran Admin dan Super Admin.

## Endpoints USERS

### 1. Post Token
- **Method:** `POST`
- **Endpoint:** `/api/v1/auth/login`
- **Description:** untuk mendapatkan token dengan role superadmin / admin berdasarkan email.

### 1. Register User
- **Method:** `POST`
- **Endpoint:** `/api/v1/auth/register`
- **Description:** untuk membuat user baru dengan mengisi row query.

### 1. Get All Users
- **Method:** `GET`
- **Endpoint:** `/api/v1/users`
- **Description:** Mengambil semua data pengguna.

### 2. Get User by ID
- **Method:** `GET`
- **Endpoint:** `/api/v1/users/id`
- **Description:** Mengambil data pengguna tertentu menggunakan ID uniknya.
- **Parameters:**
  - `id`: ID dari pengguna yang ingin Anda ambil.

### 3. Create a User
- **Method:** `POST`
- **Endpoint:** `/api/v1/users`
- **Description:** Membuat catatan pengguna baru. Endpoint ini dapat diakses oleh pengguna yang berwenang.


## Endpoints CARS

### 1. Get All Cars
- **Method:** `GET`
- **Endpoint:** `/api/v1/cars`
- **Description:** Mengambil semua data mobil.

### 2. Get Car by ID
- **Method:** `GET`
- **Endpoint:** `/api/v1/cars/id`
- **Description:** Mengambil data mobil tertentu menggunakan ID uniknya.
- **Parameters:**
  - `id`: ID dari mobil yang ingin Anda ambil.

### 3. Create a Car
- **Method:** `POST`
- **Endpoint:** `/api/v1/cars`
- **Description:** Membuat catatan mobil baru. Endpoint ini hanya dapat diakses oleh Admin dan Superadmin
- **Note:** Isi di dalam row query

### 4. Update car by id
- **Method:** `PATCH`
- **Endpoint:** `/api/v1/cars/id`
- **Description:** Memperbarui detail mobil berdasarkan id
- **Note:** Isi di dalam row query

### 5. Delete Car by id
- **Method:** `DELETE`
- **Endpoint:** `/api/v1/cars/id`
- **Description:** Delete mobil berdasarkan id 
- **Note:** Isi di dalam row query





