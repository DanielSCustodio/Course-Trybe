import React from 'react';
import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from './App';

const mockPikachu ={cards:[{  
  "id": "xyp-XY174",
  "name": "Pikachu-EX",
  "nationalPokedexNumber": 25,
  "imageUrl": "https://images.pokemontcg.io/xyp/XY174.png",
  "imageUrlHiRes": "https://images.pokemontcg.io/xyp/XY174_hires.png",
  "types": [
    "Lightning"
  ],
  "supertype": "Pokémon",
  "subtype": "EX",
  "hp": "130",
  "retreatCost": [
    "Colorless"
  ],
  "convertedRetreatCost": 1,
  "number": "XY174",
  "artist": "5ban Graphics",
  "rarity": "Common",
  "series": "XY",
  "set": "XY Black Star Promos",
  "setCode": "xyp",
  "text": [
    "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
  ],
  "attacks": [
    {
      "cost": [
        "Lightning",
        "Colorless"
      ],
      "name": "Thunder Shock",
      "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
      "damage": "30",
      "convertedEnergyCost": 2
    },
    {
      "cost": [
        "Lightning",
        "Lightning",
        "Colorless"
      ],
      "name": "Mega Thunderbolt",
      "text": "Discard all Energy attached to this Pokémon.",
      "damage": "160",
      "convertedEnergyCost": 3
    }
  ],
  "resistances": [
    {
      "type": "Metal",
      "value": "-20"
    }
  ],
  "weaknesses": [
    {
      "type": "Fighting",
      "value": "×2"
    }
  ]
} ] }
describe('Veifica elementos na tela',() => {
    it('Exibe a logo',() => {
        render(<App />)
        const logImg=screen.getByRole('img');
        expect(logImg).toBeInTheDocument();
    });

    it('Exibe o título "Pesquise um Pokémon"',() => {
        render(<App />)
        const textTitle=screen.getByRole('heading',{
            level: 2,
            name:"Pesquise um Pokémon",
        })
        expect(textTitle).toBeInTheDocument();
    });

    it('O input está sendo renderizados',()=>{
        render(<App/>)
        const InputText = screen.getByRole('textbox')
        expect(InputText).toBeInTheDocument();
    });

    it('O botão com o texto "Pesquisar" está sendo renderizado',()=>{
        render(<App/>)
        const  searchButton = screen.getByRole('button', {
            name: "Pesquisar",
        });
        expect(searchButton).toBeInTheDocument();
    });

});


describe('Interação do usuário',()=>{
    it('Input recebe valores de entrada',()=>{
        render(<App/>)
        const InputText = screen.getByRole('textbox')
        userEvent.type(InputText,'pikachu')
        
        expect(InputText).toHaveValue('pikachu')
    });

    it('Aparece o card quando um pokémon é pesquisado', async ()=>{
        render(<App/>)
        const InputText = screen.getByRole('textbox')

        const  searchButton = screen.getByRole('button', {
            name: "Pesquisar",
        });
        
        userEvent.type(InputText,'pikachu');
        userEvent.click(searchButton)

        const textSearch= await screen.findByRole('heading',{
            level: 3,
            name:'Pikachu-EX'
        });

        expect(textSearch).toBeInTheDocument();

    });
});

describe('Mock da API',()=>{
  it('Fetch da API',async ()=>{
    global.fetch = jest.fn(
      function(url){
        return Promise.resolve({
          json: ()=>Promise.resolve(mockPikachu)
        })
      }
    );
    
    render(<App/>)
    const InputText = screen.getByRole('textbox')

    const  searchButton = screen.getByRole('button', {
        name: "Pesquisar",
    });
    
    userEvent.type(InputText,'pikachu');
    userEvent.click(searchButton)

    const textSearch= await screen.findByRole('heading',{
        level: 3,
        name:'Pikachu-EX'
    });

    expect(textSearch).toBeInTheDocument();
    
  });
});
