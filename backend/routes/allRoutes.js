const express = require('express');
const router = express.Router()

const { addSong,getSongs,deleteSong,updateSong, uploads } = require('../Controllers/songController')

router.post('/addSongs',uploads.single('file'),addSong);

router.get('/getSongs',getSongs);

router.delete('/deleteSong/:id',deleteSong);

router.patch('/updateSongs/:id',updateSong);

module.exports = router