import Pizza from "./Pizza";
import PizzaSize from "./PizzaSize";

export default class Margherita extends  Pizza {
  
  constructor(size: PizzaSize){
    super(size);
    this.ingredients.push('Alho', 'Cebola','Pimentão');
  }

    get price():number{
    const pizzaPrice ={
      "medium":28,
      "large":33,
      "extra-large":38
    }
    const price = pizzaPrice[this.size] ?? pizzaPrice.large
    return price;
  }
}