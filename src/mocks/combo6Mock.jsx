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

import guarana15 from "../img/guarana15.avif"
import pepsi15 from "../img/pepsi15.avif"
import sukita2 from "../img/sukita2.avif"
import pepsiblack from "../img/pepsiblack.avif"


const combo6Mock = [
  {
    id: 1,
    titulo: "Turbine seu lanche",
    tituloSimples: "Turbinar",
    descricao: "- Hamburguer de 90gr no Pão Brioche 100gr",
    tipo: "radio",
    quantidadeMaxima: 1,
    opcoes: [
      { id: "t1", nome: "Sim", preco: 30 },
      { id: "t2", nome: "Não", preco: 0 },
    ],
  },
  {
    id: 2,
    titulo: "Escolha seu lanche",
    tituloSimples: "Lanche",
    tipo: "escolha",
    quantidadeMaxima: 6,
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
    quantidadeMaxima: 5,
    opcoes: [
      { id: "b1", nome: "Catupiry", preco: 5, imagem: extracatupiry },
      { id: "b2", nome: "Bacon", preco: 5, imagem: extrabacon },
      { id: "b3", nome: "Cheddar", preco: 5, imagem: extramolhocheddar },
    ],
  },
  {
    id: 4,
    titulo: "Escolha seu refrigerante",
    tituloSimples: "Refrigerante",
    tipo: "escolha",
    quantidadeMaxima: 2,  
    opcoes: [
      { id: "r1", nome: "Refrigerante Guaraná Antarctica 1,5L", preco: 0, imagem: guarana15 },
      { id: "r2", nome: "Refrigerante Guaraná Antarctica Zero 1,5L", preco: 0, imagem: guarana15 },
      { id: "r3", nome: "Refrigerante Pepsi 1,5L", preco: 0, imagem: pepsi15 },
      { id: "r4", nome: "Refrigerante Pepsi Black Shrin 1,5L", preco: 0, imagem: pepsiblack },
      { id: "r5", nome: "Refrigerante de Laranja Sukita 1,5L", preco: 0, imagem: sukita2 },
    ],
  },
  {
    id: 5,
    titulo: "Comentário",
    tipo: "observacao",
  },
]

export default combo6Mock
