const express = require('express');
const router = express.Router();
require('dotenv').config();

const ClienteController = require('../controller/ClienteController');
const ClienteValidation = require('../middlewares/ClienteValidation');

const PlanoController = require('../controller/PlanoController');
const PlanoValidation = require('../middlewares/PlanoValidation');

const ClientePlanoController = require('../controller/ClientePlanoController');

const PagamentoController = require('../controller/PagamentoController');

const CaixaController = require('../controller/CaixaController');

const CaixaLancController = require('../controller/CaixaLancController');

router.post('/cliente/create', ClienteValidation, ClienteController.create);
router.get('/cliente/filter/all', ClienteController.all);
router.get('/cliente/:id', ClienteController.getOne);
router.delete('/cliente/:id', ClienteController.delete);
router.delete('/cliente/all/delete', ClienteController.deleteAll);
router.put('/cliente/:id', ClienteController.update);
router.get('/cliente/filter/all/:search', ClienteController.FindSearch);

router.post('/plano/create', PlanoValidation, PlanoController.create);
router.get('/plano/filter/all', PlanoController.all);
router.get('/plano/:id', PlanoController.getOne);
router.delete('/plano/:id', PlanoController.delete);
router.delete('/plano/all/delete', PlanoController.deleteAll);
router.put('/plano/:id', PlanoController.update);

router.post('/clienteplano/create', ClientePlanoController.create);
router.get('/clienteplano/filter/:id', ClientePlanoController.join);
router.get('/clienteplano/:id', ClientePlanoController.getOne);
router.delete('/clienteplano/:id', ClientePlanoController.delete);
router.delete('/clienteplano/all/delete', ClientePlanoController.deleteAll);
router.put('/clienteplano/:id', ClientePlanoController.update);

router.post('/pagamento/create', PagamentoController.create);
router.get('/pagamento/filter/all', PagamentoController.join);
router.get('/pagamento/:id/:ref', PagamentoController.getOne);
router.get('/pagamento/:id/filter/all', PagamentoController.getAllByClient);
router.get('/pagamento/check/:id/:status', PagamentoController.getOnePendente);
router.get('/pagamento/check/all/:id/:status', PagamentoController.getAllPendentes)
router.delete('/pagamento/:id', PagamentoController.delete);
router.delete('/pagamento/all/delete', PagamentoController.deleteAll);
router.put('/pagamento/:id/:ref', PagamentoController.update);

router.post('/caixa/create', CaixaController.create);
router.get('/caixa/filter/all', CaixaController.all);
router.get('/caixa/:id/:ref', CaixaController.getOne);
router.put('/caixa/:id', CaixaController.update);

router.post('/caixalanc/create', CaixaLancController.create);
router.get('/caixalanc/filter/all', CaixaLancController.all);
router.get('/caixalanc/:id/:ref', CaixaLancController.getOne);
router.put('/caixalanc/:id', CaixaLancController.update);

module.exports = router;