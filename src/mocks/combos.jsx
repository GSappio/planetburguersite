import comboIndividual from "../img/comboindividual.avif"
import combocasal from "../img/combocasal.jpg"
import combofamilia4 from "../img/combofamilia4.avif"
import combofamilia6 from "../img/combofamilia6.jpg"

const combos = [
  {
    id: 1,
    nome: "Combo Individual",
    descricao: "Um lanche completo, suculento e feito com ingredientes de qualidade. Perfeito para quem quer matar a fome com muito sabor!",
    preco: 35,
    imagem: comboIndividual,
    categoria: "combos",
    ativo: true
  },
  {
    id: 2,
    nome: "Combo Casal",
    descricao: "Perfeito para compartilhar! Duas porções de batatas sequinhas e crocantes, acompanhadas de refrigerantes bem gelados. Ideal pra curtir bons momentos a dois com muito sabor e praticidade.",
    preco: 60,
    imagem: combocasal,
    categoria: "combos",
    ativo: true
  },
  {
    id: 3,
    nome: "Combo Familia 4 ( Acompanha 2 Refrigerantes )",
    descricao: "Ideal para compartilhar com a galera! Porção generosa de batatas super crocantes e dois refrigerantes geladinhos pra acompanhar. Um combo completo, prático e cheio de sabor, perfeito pra reunir a família ou os amigos e curtir bons momentos juntos!",
    preco: 100,
    imagem: combofamilia4,
    categoria: "combos",
    ativo: true
  },
  {
    id: 4,
    nome: "Combo Familia 6 ( Acompanha 2 Refrigerantes )",
    descricao: "Ideal para compartilhar com a galera! Porção generosa de batatas super crocantes e dois refrigerantes geladinhos pra acompanhar. Um combo completo, prático e cheio de sabor, perfeito pra reunir a família ou os amigos e curtir bons momentos juntos!",
    preco: 120,
    imagem: combofamilia6,
    categoria: "combos",
    ativo: true
  },
]

export default combos
