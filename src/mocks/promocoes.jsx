import saladaTurbo from "../img/saladaturbo.avif"
import baconTurbo from "../img/baconturbo.jpg"
import calabresaturbo from "../img/calabresaturbo.avif"
import frangoTurbo from "../img/frangoturbo.jpg"
import frangoBaconTurbo from "../img/frangobaconturbo.avif"
import eggTurbo from "../img/eggturbo.avif"
import eggBaconTurbo from "../img/eggbaconturbo.avif"
import xburguer from "../img/xburguer.avif"

const promocoes = [
  {
    id: 1,
    nome: "X-Burguer - 6 UNIDADES",
    descricao:
      "6 unidades: Hambúrguer suculento com queijo cheddar derretido, alface crocante e tomate fresco, servido no pão selado na chapa. Um clássico cheio de sabor e equilíbrio!",
    preco: 45.99,
    imagem: xburguer,
    categoria: "lanche",
    ativo: true
  },
  {
    id: 2,
    nome: "X-Salada - 3 UNIDADES",
    descricao:
      "3 unidades: Hambúrguer suculento com queijo cheddar derretido, alface crocante e tomate fresco, servido no pão selado na chapa. Um clássico cheio de sabor e equilíbrio!",
    preco: 35.99,
    imagem: saladaTurbo,
    categoria: "lanche",
    ativo: true
  },
  {
    id: 3,
    nome: "X-Calabresa - 3 UNIDADES",
    descricao:
      "3 unidades: Hambúrguer com calabresa grelhada, cheddar cremoso, alface e tomate, tudo isso no pão selado. Uma explosão de sabor defumado e intensidade!",
    preco: 40.99,
    imagem: calabresaturbo,
    categoria: "lanche",
    ativo: true
  },
  {
    id: 4,
    nome: "X-Frango - 3 UNIDADES",
    descricao:
      "3 unidades: Hambúrguer com filé de frango grelhado no ponto certo, queijo cheddar, alface e tomate fresco em um pão selado e macio. Leve, saboroso e marcante!",
    preco: 40.99,
    imagem: frangoTurbo,
    categoria: "lanche",
    ativo: true
  },
  {
    id: 5,
    nome: "X-Bacon - 3 UNIDADES",
    descricao:
      "3 unidades: Hambúrguer suculento com cheddar derretido, tiras generosas de bacon crocante, alface e tomate, servido em pão selado. Um lanche que une potência e sabor!",
    preco: 40.99,
    imagem: baconTurbo,
    categoria: "lanche",
    ativo: true
  },
  {
    id: 6,
    nome: "X-Frango Bacon - 3 UNIDADES",
    descricao:
      "3 unidades: Hambúrguer com filé de frango grelhado com bacon crocante, cheddar cremoso, alface e tomate no pão selado. Uma combinação ousada para quem ama sabor de verdade!",
    preco: 45.99,
    imagem: frangoBaconTurbo,
    categoria: "lanche",
    ativo: true
  },
  {
    id: 7,
    nome: "X-Egg Bacon - 3 UNIDADES",
    descricao:
      "3 unidades: Hambúrguer suculento com bacon crocante, ovo frito, cheddar derretido, alface e tomate. Um lanche robusto para quem não abre mão de tudo junto!",
    preco: 45.99,
    imagem: eggBaconTurbo,
    categoria: "lanche",
    ativo: true
  },
  {
    id: 8,
    nome: "X-Egg - 3 UNIDADES",
    descricao:
      "3 unidades: Hambúrguer com ovo frito, cheddar derretido, alface e tomate fresco, no pão selado. Simples, completo e delicioso!",
    preco: 40.99,
    imagem: eggTurbo,
    categoria: "lanche",
    ativo: true
  }
]


export default promocoes
