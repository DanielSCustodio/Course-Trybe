import {CelularComInternet, CelularComCamera} from './interface'

class Celular {
  public numero: string;

  constructor (public marca: string, num: string){ // Com o public não precisa das declaracões fora de dentro do constructor
    this.numero = this.verificarNumero(num);
  }

  private verificarNumero (numero: string){
  if(!numero.startsWith('9') || numero.length > 9) return `9${numero}`;
  return numero;
  }

  ligarPara (outroCelular: Celular): string{
    return `${this.numero} ligou para ${outroCelular.numero}`
  }

  colocarVolume (volume: string): string{
    return `Método Normal => Volume ajustado para ${volume}`;
  }

}

class Tijolao extends Celular {
  
}

class Smartphone extends Celular {
  ligarPara (): string{
    return `Olá mundo`
  }

    colocarVolume (volume: string): string  {
    return `Método de Smatphone => Volume ajustado para ${volume}`;
  }

  ligarComVideo (): void{ //Adicionando método que não se encontra na super classe

  }
}


class DefaultSmartphone extends Celular {
  constructor(
    public marca: string,
    public num: string,
    public tamanhoDaTela: string,
    public camFrontal: string,
    public camTraseira: string,
  )

  {
    super(marca, num)
  }

  abrirTrybeTunes(): void {
    console.log('Solta o dom, DJ!');
    
  }

  tirarFoto(cam: string): void {
    if(cam === 'frontal'){
      console.log(`Foto tirada com a câmera forntal de ${this.camFrontal} MP`);
    }else {
      console.log(`Foto tirada com a câmera traseira de ${this.camTraseira} MP`);
    }
  }

}


class TopSmartphone extends DefaultSmartphone{
    constructor(
    public marca: string,
    public num: string,
    public tamanhoDaTela: string,
    public camera: string,
  )

  {
    super(marca, num, tamanhoDaTela, camera, camera)
  }

  tirarFoto(): void {
    console.log(`Uso sempre a mesma câmera de ${this.camFrontal}MP`);
    
  }
}


class Blackberry extends Celular implements CelularComInternet, CelularComCamera {
  tirarFoto(): void {
    console.log('Resolução parece de uma calculadora');
  
  }
  acessarInternet():void {
    console.log('Acessou com uma tecnologia defasada');
  }
}




class Ligacao {
  public static ligar(c1: Celular, c2: Celular): void {
    console.log(c1.ligarPara(c2));
  }
}

const mostrarVolume = (celular: Celular, volume:string) => {
  console.log(celular.colocarVolume(volume));
}


const cel1 = new Celular ('Xiaomi', '87654321');
const cel2 = new Celular ('Samsung', '987868584');
const cel3 = new Smartphone ('Iphone', '988776655');
const cel4 = new DefaultSmartphone('Sony', '40028992', '9 polegadas', '10', '24');
const cel5 = new TopSmartphone('iPhone', '400589652', '9 polegadas', '40');
const cel6 = new Blackberry('iPhone', '400589652'); // É o mesmo contrutor da classe mãe, por isso só tem 2 parametros

/* Ligacao.ligar(cel1, cel2); */

/* mostrarVolume(cel1,'96');
mostrarVolume(cel2,'85');
mostrarVolume(cel3,'42'); */

/* cel4.tirarFoto('oii');
cel4.acessarInternet(); */

/* cel5.tirarFoto(); */

/* cel6.acessarInternet();
cel6.tirarFoto(); */