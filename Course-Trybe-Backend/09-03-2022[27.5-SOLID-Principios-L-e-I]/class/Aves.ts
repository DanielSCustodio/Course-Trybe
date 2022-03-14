import {Voar} from './interface';

abstract class Aves {
  
}

class Aguia extends Aves implements Voar {
  public voar(): void {
    console.log('Voa numa altitude de 1000m');
  }
}

class Falcao extends Aves implements Voar {
  public voar(): void {
    console.log('Voa numa altitude de 800m');
  }
}


class Pinguim extends Aves {

}


const aguia =  new Aguia();
const falcao =  new Falcao();
const pinguim =  new Pinguim();



aguia.voar();