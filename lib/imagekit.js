const ImageKit = require('imagekit'); // Ganti dengan yang sesuai

const imagekit = new ImageKit({
    publicKey: 'YOUR_PUBLIC_KEY',     // Ganti dengan kunci publik Anda
    privateKey: 'YOUR_PRIVATE_KEY',   // Ganti dengan kunci privat Anda
    urlEndpoint: 'YOUR_URL_ENDPOINT',  // Ganti dengan endpoint URL Anda
});

module.exports = imagekit; // Ekspor variabel imagekit
