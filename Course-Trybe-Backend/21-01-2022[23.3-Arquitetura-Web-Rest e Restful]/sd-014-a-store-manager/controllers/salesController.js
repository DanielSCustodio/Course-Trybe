const sales = require('express').Router();
const salesService = require('../services/salesService');
const validationSales = require('./middlewares/validationSales');

const create = async (req, res) => {
  const sale = await salesService.create(req.body);
  return res.status(201).json(sale);
};

const getAll = async (_req, res) => {
  const allSales = await salesService.getAll();
  return res.status(200).json(allSales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);
  return res.status(200).json(sale);
};

const update = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.update(id, req.body);
  return res.status(200).json(sale);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const response = await salesService.getById(id);
  await salesService.remove(id);
  return res.status(200).json(response);
};

sales.post('/', 
validationSales.checkBody,
create);

sales.get('/', 
getAll);

sales.get('/:id', 
validationSales.checkId,
getById);

sales.put('/:id',
validationSales.checkBody,
update);

sales.delete('/:id',
validationSales.checkId,
remove);

module.exports = sales;