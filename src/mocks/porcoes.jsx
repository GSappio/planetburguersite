import batataFrita from "../img/batatafrita.avif"
import batataMedia from "../img/batatamedia.avif"
import batataMediaCheddar from "../img/batatamediacheddar.avif"
import aneisDeCebola from "../img/aneisdecebola.jpg"
import batataTriangular from "../img/batatatriangular.jpg"
import miniChicken from "../img/minichicken.jpg"
import porcaoCompleta from "../img/porcaocompleta.avif"

const porcoes = [
  {
    id: 1,
    nome: "Batata Frita",
    descricao: "400g de batata frita perfeitamente crocante. Delicie-se com cada mordida desta porção irresistível, perfeita para compartilhar ou satisfazer seu apetite. Peça agora para um momento de prazer culinário!",
    preco: 19.99,
    imagem: batataFrita,
    categoria: "porcoes",
    ativo: true
  },
  {
    id: 2,
    nome: "Batata Média",
    descricao: "200g de batata frita perfeitamente crocante. Delicie-se com cada mordida desta porção irresistível, perfeita para compartilhar ou satisfazer seu apetite. Peça agora para um momento de prazer culinário!",
    preco: 9.99,
    imagem: batataMedia,
    categoria: "porcoes",
    ativo: true
  },
  {
    id: 3,
    nome: "Batata Cheddar e Bacon",
    descricao: "400g de batata frita perfeitamente crocante, coberta com uma generosa camada de cheddar cremoso e pedaços crocantes de bacon. Uma combinação irresistível de sabores, perfeita para compartilhar ou saborear sozinho. Peça agora e transforme seu momento em uma explosão de sabor!",
    preco: 24.99,
    imagem: batataMediaCheddar,
    categoria: "porcoes",
    ativo: true
  },
  {
    id: 4,
    nome: "Batata Média Cheddar e Bacon",
    descricao: "200g de batata frita perfeitamente crocante, coberta com uma generosa camada de cheddar cremoso e pedaços crocantes de bacon. Uma combinação irresistível de sabores, perfeita para compartilhar ou saborear sozinho. Peça agora e transforme seu momento em uma explosão de sabor!",
    preco: 13.99,
    imagem: batataMediaCheddar,
    categoria: "porcoes",
    ativo: true
  },
  {
    id: 5,
    nome: "Anéis de Cebola",
    descricao: "Crocantes e dourados, nossos Anéis de Cebola vêm em uma porção com 10 unidades perfeitas para acompanhar seu lanche ou petiscar com os amigos!",
    preco: 9.99,
    imagem: aneisDeCebola,
    categoria: "porcoes",
    ativo: true
  },
  {
    id: 6,
    nome: "Batata Hash Brown Triangular",
    descricao: "Porção com 10 Batatas Hash Brown Triangulares, crocantes por fora e macias por dentro. O acompanhamento perfeito para qualquer momento do dia!",
    preco: 9.99,
    imagem: batataTriangular,
    categoria: "porcoes",
    ativo: true
  },
  {
    id: 7,
    nome: "Mini Chicken",
    descricao: "Franguinhos crocantes, douradinhos e prontos pra matar sua fome! Uma porção com 10 Mini Chicken Perdigão, perfeita pra comer assistindo série, dividir com a galera ou dar aquele up no seu pedido.",
    preco: 9.99,
    imagem: miniChicken,
    categoria: "porcoes",
    ativo: true
  },
  {
    id: 8,
    nome: "Porção Completa",
    descricao: "Uma seleção irresistível para os amantes de batata! São 800g de batata frita crocante, 10 anéis de cebola empanados, 10 batatas Smile divertidas e 10 hash browns triangulares. Perfeito para compartilhar e saborear em qualquer ocasião!",
    preco: 69.99,
    imagem: porcaoCompleta,
    categoria: "porcoes",
    ativo: true
  },

]

export default porcoes
