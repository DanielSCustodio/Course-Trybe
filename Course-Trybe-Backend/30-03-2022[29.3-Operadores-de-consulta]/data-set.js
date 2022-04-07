use('Lanchonete');
db.burgers.insertMany(
  [{
      cod: 1,
      nome: 'X-Burger',
      ingredientes: ['pão', 'alface', 'tomate', 'carne', 'queijo'],
      estoque: 16,
      chapeiro:'Batman',
      avaliacao:{
        bom:9,
        medio:5,
        ruim:13
      }
    },
    {
      cod: 2,
      nome: 'X-Frango',
      ingredientes: ['pão', 'alface', 'tomate', 'frango', 'queijo'],
      estoque: 12,
      chapeiro: 'Batman',
      avaliacao: {
        bom: 2,
        medio: 5,
        ruim: 4
      }
    },
    {
      cod: 3,
      nome: 'X-Bacon',
      ingredientes: ['pão', 'alface', 'tomate', 'bacon', 'queijo'],
      estoque: 15,
      chapeiro: 'Batman',
      avaliacao: {
        bom: 6,
        medio: 8,
        ruim: 5
      }
    },
    {
      cod: 4,
      nome: 'X-Calabresa',
      ingredientes: ['pão', 'alface', 'tomate', 'calabresa', 'queijo'],
      estoque: 12,
      chapeiro: 'Coringa',
      avaliacao: {
        bom: 6,
        medio: 7,
        ruim: 2
      }
    },
    {
      cod: 5,
      nome: 'X-Tudo',
      ingredientes: ['pão', 'alface', 'tomate', 'carne', 'frango', 'bacon', 'calabresa', 'queijo'],
      estoque: 3, 
      chapeiro: 'Batman',
      avaliacao: {
        bom: 4,
        medio: 3,
        ruim: 7
      }
    },
    {
      cod: 6,
      nome: 'X-Carne Seca',
      ingredientes: ['pão', 'alface', 'tomate', 'carne seca', 'abóbora'],
      estoque: 16,
      chapeiro: 'Coringa',
      avaliacao: {
        bom: 8,
        medio: 5,
        ruim: 0
      }
    },
    {
      cod: 7,
      nome: 'X-Miojo',
      ingredientes: ['pão', 'tomate', 'carne', 'queijo', 'miojo'],
      estoque: 8,
      chapeiro: 'Batman',
    },
    {
      cod: 8,
      nome: 'X-Picanha',
      ingredientes: ['pão', 'alface', 'tomate', 'bacon', 'queijo', 'bife de picanha'],
      estoque: 4
    },
    {
      cod: 9,
      nome: 'X-Maravilha',
      ingredientes: ['pão', 'alface', 'tomate', 'calabresa', 'queijo', 'dua scarnes', 'ovo', 'cheddar'],
      estoque: 2
    },
    {
      cod: 10,
      nome: 'X-Pobre',
      ingredientes: ['pão', 'carne'],
      estoque: 20,
      chapeiro: 'Batman',
      avaliacao: {
        bom: 8,
        medio: 5,
        ruim: 11
      }
    }
  ]
);