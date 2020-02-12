const mongoose = require('mongoose')

const MesaSchema = new mongoose.Schema({
    client: String,
    numero: Number,
    disponivel: Boolean
})

module.exports = mongoose.model('mesa', MesaSchema)