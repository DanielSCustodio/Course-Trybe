use('movide-db');

db.movies.insertOne({ //insere um documento
  title: 'Frederico, the cat'
});

db.movies.insertOne({
  title: 'Frederico, the dog'
});

db.movies.find() // ler todos os documentos da coleção