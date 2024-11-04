Car management Api

dalam project chapter 5 ini, saya membuat aplikasi car management api yang dibangun menggunakan express.js , PostgreSQL, sequalize sebagai ORM. untuk menjalankan aplikasi ini saya menggunakan Postman untuk cek API. Aplikasi ini mempunyai operasi CRUD pada tabel car, dan user untuk mengelola peminjaman / pengguna mobil rental.  dalam pembuatan aplikasi ini menggunkan sistem authentikasidan otorisasi menggunakan JWT (json web token), dan hash password menggunakan bcrypt dan Api-documentasi menggunakan swagger.

Teknologi yang digunakan
Node.js, express.js, sequelize ORM, JWT(json web token), swagger, bycript, postgreSQL


instalasi
jangan lupa untuk clone repo
https://github.com/wahyuanang/24001183-km7-waz-CarManagementApi-ch5.git

install dependencies
npm insall

atur .env di .env.example
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

jalankan database
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all

Jalankan aplikasi
npm run dev

testing postman

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





