// Node.js ortamında çalışacaksa 'node-fetch' modülünü yükleyin:
// npm install node-fetch
const fetch = require('node-fetch');

// GitHub Raw URL
const rawUrl = "https://raw.githubusercontent.com/emredeveloper/Database/main/db.json";

// API İsteği Gönderme
fetch(rawUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP hata! Hata kodu: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Alınan Veriyi Gösterme
    console.log("Alınan Veri:");
    console.log(data);
  })
  .catch(error => {
    console.error("Hata:", error.message);
  });
