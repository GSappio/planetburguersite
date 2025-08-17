import saladaTurbo from "../img/saladaturbo.avif"
import baconTurbo from "../img/baconturbo.jpg"
import calabresaturbo from "../img/calabresaturbo.avif"
import frangoTurbo from "../img/frangoturbo.jpg"
import frangoBaconTurbo from "../img/frangobaconturbo.avif"
import eggBaconTurbo from "../img/eggbaconturbo.avif"
import lancheXTudo from "../img/lanchextudo.avif"

import extramolhocheddar from "../img/extramolhocheddar.avif"
import extracatupiry from "../img/extracatupiry.avif"
import extrabacon from "../img/extrabacon.avif"

import guaranazero15 from "../img/guaranazero15.avif"
import guarana350 from "../img/guarana350.avif"
import itubaina350 from "../img/itubaina350.avif"

const comboIndividualMock = [
  {
    id: 1,
    titulo: "Turbine seu lanche",
    tituloSimples: "Turbinar",
    tipo: "radio",
    descricao: "- Hamburguer de 90gr no Pão Brioche 100gr",
    quantidadeMaxima: 1, // Apenas uma opção permitida
    opcoes: [
      { id: "t1", nome: "Sim", preco: 5 },
      { id: "t2", nome: "Não", preco: 0 },
    ],
  },
  {
    id: 2,  
    titulo: "Escolha seu lanche",
    tituloSimples: "Lanche",
    tipo: "escolha",
    quantidadeMaxima: 1, // Agora o usuário pode escolher até 2 lanches
    opcoes: [
      { id: "l1", nome: "X-Salada", preco: 0, imagem: saladaTurbo },
      { id: "l2", nome: "X-Calabresa", preco: 0, imagem: calabresaturbo },
      { id: "l3", nome: "X-Frango", preco: 0, imagem: frangoTurbo },
      { id: "l4", nome: "X-Bacon", preco: 0, imagem: baconTurbo },
      { id: "l5", nome: "X-Egg Bacon", preco: 3, imagem: eggBaconTurbo },
      { id: "l6", nome: "X-Frango Bacon", preco: 3, imagem: frangoBaconTurbo },
      { id: "l7", nome: "X-Tudo", preco: 8, imagem: lancheXTudo },
    ],
  },
  {
    id: 3,
    titulo: "Incrementar batata",
    tituloSimples: "Batata",
    tipo: "escolha",
    quantidadeMaxima: 5, // exemplo de limite de até 3 toppings
    opcoes: [
      { id: "b1", nome: "Catupiry", preco: 2.5, imagem: extracatupiry },
      { id: "b2", nome: "Bacon", preco: 2.5, imagem: extrabacon },
      { id: "b3", nome: "Cheddar", preco: 2.5, imagem: extramolhocheddar },
    ],
  },
  {
    id: 4,
    titulo: "Escolha seu refrigerante",
    tituloSimples: "Refrigerante",
    tipo: "escolha",
    quantidadeMaxima: 1, // permitir até 2 refrigerantes
    opcoes: [
      { id: "r1", nome: "Refrigerante Itubaína Lata 350ml", preco: 0, imagem: itubaina350  },
      { id: "r2", nome: "Refrigerante Guaraná Lata 350ml", preco: 1, imagem: guarana350 },
      { id: "r3", nome: "Refrigerante Guaraná Zero Lata 350ml", preco: 1, imagem: guaranazero15 },

    ],
  },
  {
    id: 5,
    titulo: "Comentário",
    tipo: "observacao",
  },
]

export default comboIndividualMock
