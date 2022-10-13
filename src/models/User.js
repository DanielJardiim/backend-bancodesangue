const mongoose = require('mongoose');

const User = mongoose.model('User', {
    nome: {
        type: String,
        index: true,
    },
    endereco: {
        type: String,
        index: true,
    },
    telefone: {
        type: String,
        index: true,
    },
    email: {
        type: String,
        index: true,
        unique: true,
    },
    tipoSanguineo: {
        type: String,
        index: true,
    },
    senha: {
        type: String,
        index: true,
        unique: true,
    },
});

module.exports = User;
