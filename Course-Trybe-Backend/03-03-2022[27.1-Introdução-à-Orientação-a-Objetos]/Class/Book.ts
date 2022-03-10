class Book {
  private _id:number ;
  private _title:string ;
  private _costPrice:number;
  private _salePrice:number ;


  constructor(id: number, title: string,  costPrice: number, salePrice: number  ) {
    this._id = id;
    this._title = title;
    this._costPrice = costPrice;
    this._salePrice = salePrice;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(title:string){
    this._title= title;
  }

    get salePrice(): number {
    return this._salePrice;
  }

  set salePrice(value:number){
    if(value < this._costPrice){
      console.log('Preço de venda não pode ser menor que o preço de custo')
    }else{
      this._salePrice = value;
    }
  }

  public adjustSalePriceByMarginProfit(marginProfit: number){
    const newSalePrice = this._costPrice * (1 + marginProfit/100);
    this._salePrice = newSalePrice;
  }

}

/* const book1 = new Book(1,'Duna', 20, 25);
console.log(book1);

book1.title = 'Outa história';
console.log(book1); */

/* const bookAep = new Book(2,'Aventuras em Paris',15,45);
console.log(bookAep);

bookAep.salePrice = 10;
console.log(bookAep); */

const book1 = new Book(1,'Duna', 20, 25);
console.log(book1.salePrice);

book1.adjustSalePriceByMarginProfit(100);
console.log(book1.salePrice);


