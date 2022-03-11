import Pizza from "./Pizza"
import PizzaSize from "./PizzaSize";

export default class PepinoPizza extends Pizza{

  acompanhamento: string;

  constructor(size:PizzaSize, acompanhamento:string){
    super(size)
    this.ingredients.push('Pepino');
    this.acompanhamento = acompanhamento;
  }

  makePizza():string{
    return `Pizza de pepino do tamanho ${this.size} pizza está sendo preparada!`
  }

  get price():number{
    const pizzaPrice ={
      "medium":105,
      "large":125,
      "extra-large":955
    }
    const price = pizzaPrice[this.size] ?? pizzaPrice.large
    return price;
  }
}