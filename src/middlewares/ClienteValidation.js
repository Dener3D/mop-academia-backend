const ClienteModel = require('../model/ClienteModel');

const ClienteValidation = async (req, res, next) => {
    const { nome, cpf, endereco, data_nascimento, telefone, email } = req.body;
    if (!nome)
    return res.status(400).json({ error: 'O nome é obrigatório!'})
    else if (!cpf)
    return res.status(400).json({ error: "O cpf é obrigatório!" })
    else if (!endereco)
    return res.status(400).json({error: "O endereco é obrigatório!"})
    else if (!data_nascimento)
    return res.status(400).json({error: "A data_nascimento é obrigatória!"})
    else if (!telefone)
    return res.status(400).json({error: "O telefone é obrigatório"})
    else if (!email)
    return res.status(400).json({error: "O email é obrigatório"})
    else
    next()
}

module.exports = ClienteValidation;