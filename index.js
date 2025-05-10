const express = require('express');
const app = express();
const port = 3000;

app.set('json spaces', 2);
// Mengimpor data dari file soal.json
const soalBind = require('./soal/bahasaindonesia.json');
const soalMtk = require('./soal/matematika.json');

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk mendapatkan semua soal
app.get('/api/bahasaindonesia', (req, res) => {
    res.status(200).json(soalBind);
});

app.get('/api/matematika', (req, res) => {
    res.status(200).json(soalMtk);
});


// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});