const ClienteModel = require('../model/ClienteModel');
const ClientePlanoModel = require('../model/ClientePlanoModel')

class ClienteController{
    
    async create(req, res){
        const Cliente = new ClienteModel(req.body);
        await Cliente
                    .save()
                    .then(response => {
                        return res.status(200).json(response)
                    })
                    .catch(error => {
                        return res.status(500).json(error);
                    })
    }

    async update(req, res){
        await ClienteModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async getOne(req, res){
        await ClienteModel.findById(req.params.id)
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async all(req, res){
        await ClienteModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })   
    }

    async delete(req, res){
        await ClienteModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async deleteAll(req, res){
        await ClienteModel.delete()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async join(req, res) {
        await ClienteModel.aggregate([
            {
                "$lookup" : {
                    "from" : "fdsdssdf",
                    "localField": "_id",
                    "foreignField": "plano_id",
                    "as": "Teste" 
                }
            }
        ])
    }

    async join(req, res) {
        ClienteModel.aggregate([
            { $lookup:
               {
                 from: 'clienteplanos',
                 localField: '_id',
                 foreignField: 'cliente_id',
                 as: 'plano_join'
               }
             }
            ]).then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async FindSearch(req, res){
        
         if (req.params.search == undefined){
            delete req.params.search
         }
         else{
            await ClienteModel.find({nome: { $regex: '.*' + req.params.search + '.*' }})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
         }
            
        
        
        
    }
}

module.exports = new ClienteController();