interface MagicalPerson{
  power:string;
  sayPower():void;
}

interface Warrior {
  weappons : string[];
}


class MiddleEarthPerson{
  protected name: string; //acessível para as classes filhas, mas não fora da classe
  protected height:number;

  constructor(name:string, height:number){
    this.name = name;
    this.height = height;
  }
}

class Army {
  solidiers: MiddleEarthPerson[];

  constructor(){
    this.solidiers =[];
  }

  add(person: MiddleEarthPerson){
    this.solidiers.push(person);
  }
}

class Dwarf  extends MiddleEarthPerson implements MagicalPerson, Warrior{
  heightBeard: number;
  colorBeard: string;
  power: string;
  weappons: string[];

  constructor(name:string, height:number, heightBeard:number, colorBeard:string){
    super(name, height);
    this.heightBeard = heightBeard;
    this.colorBeard = colorBeard;
    this.power = 'Mira altamente precisa'
    this.weappons = ['Flecha' , 'Arpão', 'Pedra']
  }
  sayPower(): void {
    console.log(`Meu poder é ${this.power}`);
    
  }

  displayName(){
    console.log(`Meu nome é ${this.name}`);
    
  }
}

const person1 = new MiddleEarthPerson('Batman', 1.78);
const person2 = new Dwarf('Anão', 1.78, 0.5, 'green');
const army = new Army();
/* 
console.log(person1);
console.log(person2); */

person2.displayName();
person2.sayPower();
console.log(person2.weappons);

army.add(person2) // tem que ser uma instância que pertence a MiddleEarthPerson ou que herde de MiddleEarthPerson


