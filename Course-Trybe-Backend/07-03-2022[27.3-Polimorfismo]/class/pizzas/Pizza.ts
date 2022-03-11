import PizzaSize from "./PizzaSize";

export default abstract class Pizza {
  public static countPizzas:number = 0; // vai permanecer o mesmo valor inpdependente da instância que estiver chamando ele
  protected size: PizzaSize;    // é um valor comum a todos, classe mãe e classes filhas
  protected ingredients: string[];

  constructor(size: PizzaSize){
    this.size = size;
    this.ingredients = ['Massa'];
    Pizza.incrementCount();
  }

  makePizza():string{
    return `${this.size} pizza está sendo preparada!`
  }

  static incrementCount(){
    Pizza.countPizzas += 1;
  }

  abstract get  price():number;
}