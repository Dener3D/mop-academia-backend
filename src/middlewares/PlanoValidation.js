const PlanoModel = require('../model/PlanoModel');

const PlanoValidation = async (req, res, next) => {
    const { nome, desc, preco } = req.body;
    if (!nome)
    return res.status(400).json({ error: 'O nome é obrigatório!'})
    else if (!desc)
    return res.status(400).json({ error: "A descrição é obrigatória!" })
    else if (!preco)
    return res.status(400).json({error: "O preço é obrigatório!"})
    else
    next()
}

module.exports = PlanoValidation;