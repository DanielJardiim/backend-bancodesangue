const User = require('../models/User');

var numAmais = 0;
var numAmenos = 0;
var numBmais = 0;
var numBmenos = 0;
var numABmais = 0;
var numABmenos = 0;
var numOmais = 0;
var numOmenos = 0;

module.exports = app => {
    // CREATE
    app.post('/bancodesangue/create', async (req, res) => {
        const { nome, endereco, telefone, email, tipoSanguineo, senha } =
            req.body;
        const userSchema = {
            nome,
            endereco,
            telefone,
            email,
            tipoSanguineo,
            senha,
        };

        // Validations
        if (!nome) {
            return res.status(422).json({ msg: 'Nome is required !' });
        }
        if (!endereco) {
            return res.status(422).json({ msg: 'Endereco is required !' });
        }
        if (!telefone) {
            return res.status(422).json({ msg: 'Telefone is required !' });
        }
        if (!email) {
            return res.status(422).json({ msg: 'Email is required !' });
        }
        if (!tipoSanguineo) {
            return res
                .status(422)
                .json({ msg: 'Tipo Sanguineo is required !' });
        }
        if (!senha) {
            return res.status(422).json({ msg: 'Senha is required !' });
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            try {
                await User.create(userSchema);

                if (tipoSanguineo === 'A+') {
                    const Amais = ((++numAmais / 1000) * 100).toFixed(2);
                    return res
                        .status(201)
                        .json({ msg: 'User create - OK', Amais });
                }
                if (tipoSanguineo === 'A-') {
                    const Amenos = ((++numAmenos / 1000) * 100).toFixed(2);
                    return res
                        .status(201)
                        .json({ msg: 'User create - OK', Amenos });
                }
                if (tipoSanguineo === 'B+') {
                    const Bmais = ((++numBmais / 1000) * 100).toFixed(2);
                    return res
                        .status(201)
                        .json({ msg: 'User create - OK', Bmais });
                }
                if (tipoSanguineo === 'B-') {
                    const Bmenos = ((++numBmenos / 1000) * 100).toFixed(2);
                    return res
                        .status(201)
                        .json({ msg: 'User create - OK', Bmenos });
                }
                if (tipoSanguineo === 'AB+') {
                    const ABmais = ((++numABmais / 1000) * 100).toFixed(2);
                    return res
                        .status(201)
                        .json({ msg: 'User create - OK', ABmais });
                }
                if (tipoSanguineo === 'AB-') {
                    const ABmenos = ((++numABmenos / 1000) * 100).toFixed(2);
                    return res
                        .status(201)
                        .json({ msg: 'User create - OK', ABmenos });
                }
                if (tipoSanguineo === 'O+') {
                    const Omais = ((++numOmais / 1000) * 100).toFixed(2);
                    return res
                        .status(201)
                        .json({ msg: 'User create - OK', Omais });
                }
                if (tipoSanguineo === 'O-') {
                    const Omenos = ((++numOmenos / 1000) * 100).toFixed(2);
                    return res
                        .status(201)
                        .json({ msg: 'User create - OK', Omenos });
                }
            } catch (error) {
                return res.status(500).json({ error: error });
            }
        } else {
            return res.json({ msg: 'User Duplicate !' });
        }
    });
};
