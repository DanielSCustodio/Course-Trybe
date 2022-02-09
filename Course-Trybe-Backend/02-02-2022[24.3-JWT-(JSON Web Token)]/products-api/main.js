const {User,Product,Tag,ProductTag} = require('./models');
const main = async ()=> {
  /* Product.sync()// Cria a tabela */
  /*  await Product.create({name:'Televisao', price:500, description:'É grande (:)'}); */
  /* const id = await Product.findByPk(1); */
  /*   console.log(id.dataValues); */  


 /*  const user = await User.create({email:'email@email.com', password:'senha', username:'Daniel'}); */
  


/*  const userId = user.dataValues.id;
  const newProduct = await Product.create({
    name:'Rádio',
    description:'É um Rádio',
    price:3000,
    userId
  }); */



/*   const  product = await Product.findByPk(5);
  const user = await product.getUser();
  console.log('==>',user);
 */
/*  const products = await Product.findAll({
    where:{
      userId:16,
    }
  });


  console.log(products ); */
  /*  const products = await moldes.Product.findAll();
  console.log(products.map((product) => product.dataValues)); */

/*   const user = await User.findByPk(16); // o parametro é o userId
  const products = await user.getProducts();
  console.log(products); */

/* 
  const product = await Product.findByPk(5); 
  const tags = await product.getTags();
  console.log(tags); */


 /*  const tag = await Tag.create({name:'90% Off'});
  const product = await Product.findByPk(6); 
  await ProductTag.create({ productId: product.id, tagId:tag.id }) */

  

  /* const product=await Product.findByPk(6);
  const tags = await product.getTags();
  console.log('---->',tags);  */

/*  const tag = await Tag.findByPk(16);
  const product = await tag.getProducts();
  console.log('---->',product);   */


  /* const product=await Product.findByPk(5,{
    include: {model: User,as: 'xablau'}
  });
  console.log(product.toJSON()); */


  const product=await Product.findByPk(6,{
    include:[
      {model: User, as: 'user'},
      {model: Tag, as:'tags'} // o relcionamento de product e tag é no producTag, product que estão chamando
    ]
  });
  console.log(product.toJSON());



}

main();
