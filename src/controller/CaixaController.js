const CaixaModel = require('../model/CaixaModel');

class CaixaController{
    
    async create(req, res){
        const Caixa = new CaixaModel(req.body);
        await Caixa
                    .save()
                    .then(response => {
                        return res.status(200).json(response)
                    })
                    .catch(error => {
                        return res.status(500).json(error);
                    })
    }

    async update(req, res){
        await CaixaModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async getOne(req, res){
        await CaixaModel.findById(req.params.id)
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async all(req, res){
        await CaixaModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })   
    }


    
}

module.exports = new CaixaController();