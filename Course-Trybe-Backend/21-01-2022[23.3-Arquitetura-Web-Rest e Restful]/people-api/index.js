const express=require('express');
const bodyParser=require('body-parser');


const app=express();
const peopleController=require('./controllers/peopleController');
const middlewares=require('./controllers/middlewares');

app.use(bodyParser.json());

app.use('/people',peopleController);

app.use(middlewares.joiError)

app.use(middlewares.dominianError);

app.use(middlewares.genericError);

app.listen(3000,() => {
  console.log('Listen on port 3000');
});