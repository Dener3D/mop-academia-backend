const PagamentoModel = require('../model/PagamentoModel');


class PagamentoController{
    
    async create(req, res){
        const Pagamento = new PagamentoModel(req.body);
        await Pagamento
                    .save()
                    .then(response => {
                        return res.status(200).json(response)
                    })
                    .catch(error => {
                        return res.status(500).json(error);
                    })
    }

    async update(req, res){
        await PagamentoModel.findOneAndUpdate({$and: [{'cliente_id': req.params.id}, {'ref': req.params.ref}]}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async getOne(req, res){
        await PagamentoModel.findOne({$and: [{"cliente_id" : req.params.id}, {"ref" : req.params.ref}]})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async getOnePendente(req, res){
        await PagamentoModel.findOne({$and: [{"cliente_id" : req.params.id}, {"status" : req.params.status}]})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async checkPendencia(req, res){
        await PagamentoModel.findOne({"cliente_id" : req.params.cliente_id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }


    async all(req, res){
        await PagamentoModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })   
    }

    async getAllByClient(req, res){
        await PagamentoModel.find({'cliente_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })   
    }

    async getAllPendentes(req, res){
        await PagamentoModel.find({$and: [{"cliente_id" : req.params.id}, {"status" : req.params.status}]})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })   
    }

    async delete(req, res){
        await PagamentoModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async deleteAll(req, res){
        await PagamentoModel.delete()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }



    async join(req, res) {
        await PagamentoModel.aggregate([
            [{
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
            await PagamentoModel.find({nome: { $regex: '.*' + req.params.search + '.*' }})
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
        }
        else{
            await PagamentoModel.find()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            }) 
        }
        
    }
}

module.exports = new PagamentoController();