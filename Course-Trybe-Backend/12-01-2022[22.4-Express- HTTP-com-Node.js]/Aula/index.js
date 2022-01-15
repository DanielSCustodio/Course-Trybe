const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const books = [
	{ id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien'},
	{ id: 2, title: 'Dune', author: 'Frank Herbert'},
	{ id: 3, title: 'Foundation', author: 'Isaac Asimov'},
	{ id: 4, title: 'The Man in The High Castle', author: 'Philip K Dick'},
	{ id: 5, title: '1984', author: 'George Orwell'},
	{ id: 6, title: 'Brave New World', author: 'Aldous Huxley'}
];

app.get('/',(_req, res) => {
  res.send('<h1>Olá mundo</h1> <h6>Olá mundo</h6>')
})

app.get('/books',(_req, res) => {
  res.status(200).json(books) 
});

app.get('/books/search', (req, res) => { //Queries antes de id
  const {author} = req.query;
  const filterBook = books.filter((b)=> b.author === author)
  if(filterBook.length === 0) {return res.status(200).json({message:`Nenhum livro do autor ${author} foi encontrado`})}
  res.status(200).json({books:filterBook});
});

app.get('/books/:id',(req, res) => {
  const {id} = req.params;
  const book = books.find((b) => b.id === +id);
  if(!book){ return res.status(404).send('<h3>Não existe livro com esse ID</h3>')}
  res.status(200).json(book)
})

app.post('/books',(req, res)=>{
  const {id, title, author} = req.body;
  books.push({id, title, author})
  res.status(201).json({message: 'Livro Criado'})
});

app.put('/books/:id', (req, res)=> {
  const {id} = req.params;
  const {title, author} = req.body;
  const bookIndex = books.findIndex((b)=> b.id === +id);
  if(bookIndex === -1){return res.status(404).send({message: 'Livro não encontrado'})}
  const index = parseInt(id);
  books[bookIndex] = {id:index, title, author};
  res.status(204).end();
});

app.delete('/books/:id', (req, res)=> {
  const {id} = req.params;
  const bookIndex = books.findIndex((b)=> b.id === parseInt(id));
  if(bookIndex === -1){return res.status(404).send({message: 'Livro não encontrado'})}
  books.splice(bookIndex, 1)
  res.status(204).end();
});

app.listen(3001);