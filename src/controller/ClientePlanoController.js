const ClientePlanoModel = require('../model/ClientePlanoModel');
const mongoose = require('mongoose')

class ClientePlanoController{
    
    async create(req, res){
        const ClientePlano = new ClientePlanoModel(req.body);
        await ClientePlano
                    .save()
                    .then(response => {
                        return res.status(200).json(response)
                    })
                    .catch(error => {
                        return res.status(500).json(error);
                    })
    }

    async update(req, res){
        await ClientePlanoModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async getOne(req, res){
        await ClientePlanoModel.findOne({'cliente_id' : req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async all(req, res){
        await ClientePlanoModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })   
    }

    async delete(req, res){
        await ClientePlanoModel.deleteOne({'_id': req.body.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async deleteAll(req, res){
        await ClientePlanoModel.delete()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async join(req, res) {
        await ClientePlanoModel.aggregate([ 
            [    
            {
                $match: {
                    cliente_id: new mongoose.Types.ObjectId(req.params.id)
                }
            },
            {
                $lookup: {
                    from: 'planos',
                    localField: 'plano_id',
                    foreignField: '_id',
                    as: 'plano'
                }
            }, {
                $lookup: {
                    from: 'clientes',
                    localField: 'cliente_id',
                    foreignField: '_id',
                    as: 'cliente'
                }
            }]
        ])
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async FindSearch(req, res){
        if (req.params.search){
            await ClientePlanoModel.find({nome: { $regex: '.*' + req.params.search + '.*' }})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
        }
        else{
            await ClientePlanoModel.find()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            }) 
        }
        
    }
}

module.exports = new ClientePlanoController();