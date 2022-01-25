const rescue=require('express-rescue');
const people=require('express').Router();
const peopleService=require('../services/peopleService');
const joi=require('joi');

const peopleSchema=joi.object({
  name: joi.string().min(3).required(),
  age: joi.number().min(1).required(),
});

const validateSchemaPeople=(body) => {
  const {error}=peopleSchema.validate(body);
  if(error) {
    throw error;
  }
}

people.post('/',
  rescue(async (req,res) => {
    validateSchemaPeople(req.body)

    const {name,age} = req.body;

    const newPerson=await peopleService.add({name,age});
    res.status(201).json(newPerson);
  })
);

people.get('/',
  rescue(async (_req,res) => {
    const people=await peopleService.getAll();
    res.status(200).json(people);
  })
);

people.get('/:id',
  rescue(async (req,res) => {
    const {id} = req.params;
    const person = await peopleService.getById(id);
    res.status(200).json(person);
  })
)

people.put('/:id',
  rescue(async (req,res) => {

    validateSchemaPeople(req.body);
    const {id}=req.params;
    const {name,age}=req.body;
    const person = await peopleService.update({name, age, id});
    res.status(200).json(person);
  })
);

people.delete('/:id',
  rescue(async (req,res) => {
    const {id}=req.params;
    await peopleService.remove(id);
    res.status(204).end();
  })
);



module.exports=people;