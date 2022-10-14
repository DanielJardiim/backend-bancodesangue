const User = require('../models/User');

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
                return res.status(201).json({ msg: 'User create - OK', email });
            } catch (error) {
                return res.status(500).json({ error: error });
            }
        } else {
            return res.json({ msg: 'User Duplicate !' });
        }
    });
};
