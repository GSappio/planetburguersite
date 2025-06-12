import pastelQueijoBacon from "../img//pastelQueijoBacon.avif"
import pastelQueijoPresunto from "../img/pastelQueijoPresunto.avif"
import pastelQueijo from "../img/pastelQueijo.avif"
import pastelFrangoQueijo from "../img/pastelFrangoQueijo.avif"
import pastelPizza from "../img/pastelPizza.avif"
import pastelFrangoCatupiry from "../img/pastelFrangoCatupiry.avif"
import pastelFrangoCheddar from "../img/pastelFrangoCheddar.avif"
import pastelFrango from "../img/pastelFrango.avif"
import pastelFrangoCaipira from "../img/pastelFrangoCaipira.avif"
import pastelCarneMussarelaCatupiry from "../img/pastelCarneMussarelaCatupiry.avif"
import pastelCarneQueijo from "../img/pastelCarneQueijo.avif"
import pastelCarneOvo from "../img/pastelCarneOvo.avif"
import pastelCarneOvoAzeitona from "../img/pastelCarneOvoAzeitona.avif"
import pastelCarneCatupiry from "../img/pastelCarneCatupiry.avif"
import pastelCarneCheddar from "../img/pastelCarneCheddar.avif"
import pastelCarne from "../img/pastelCarne.avif"
import pastelCarneAzeitona from "../img/pastelCarneAzeitona.avif"
import pastelCalabresaCheddar from "../img/pastelCalabresaCheddar.jpg"
import pastelCalabresaQueijo from "../img/pastelCalabresaQueijo.avif"
import pastelCalabresaBaiana from "../img/pastelCalabresaBaiana.avif"
import pastelCalabresaCatupiry from "../img/pastelCalabresaCatupiry.avif"
import pastelBrocolisBaconQueijo from "../img/pastelBrocolisBaconQueijo.avif"
import pastelCalabresa from "../img/pastelCalabresa.avif"
import pastelBrocolisQueijo from "../img/pastelBrocolisQueijo.avif"
import pastelBrocolisQueijoAlho from "../img/pastelBrocolisQueijoAlho.avif"
import pastelAtumOvoAzeitona from "../img/pastelAtumOvoAzeitona.avif"
import pastelBauru from "../img/pastelBauru.avif"
import pastelAtumCatupiry from "../img/pastelAtumCatupiry.avif"
import pastelAtumMussarela from "../img/pastelAtumMussarela.avif"
import pastelQueijoAlho from "../img/pastelQueijoAlho.avif"
import pastel4Queijos from "../img/pastel4Queijos.avif"

const pasteis = [
  {
    id: 1,
    nome: "Pastel de Queijo com Bacon",
    descricao: "Massa crocante recheada com queijo derretido e bacon crocante, preparada com ingredientes selecionados e feita na hora. Um clássico cheio de sabor!",
    preco: 15.99,
    imagem: pastelQueijoBacon,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 2,
    nome: "Pastel de Queijo e Presunto",
    descricao: "Delicioso pastel com queijo derretido e presunto fatiado, envoltos em massa crocante e assados até dourar. Sabor que conquista qualquer paladar!",
    preco: 15.99,
    imagem: pastelQueijoPresunto,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 3,
    nome: "Pastel de Queijo",
    descricao: "Recheio farto de queijo derretido na medida certa, envolto em massa crocante e sequinha. Simples, mas irresistível!",
    preco: 14.99,
    imagem: pastelQueijo,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 4,
    nome: "Pastel de Frango com Queijo",
    descricao: "Frango desfiado temperado e queijo derretido, tudo isso envolto em massa crocante e pronto para comer. Leve e saboroso!",
    preco: 15.99,
    imagem: pastelFrangoQueijo,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 5,
    nome: "Pastel de Pizza",
    descricao: "Recheio tradicional de presunto, queijo mussarela e molho de tomate temperado, envoltos em massa crocante e deliciosamente assados.",
    preco: 15.99,
    imagem: pastelPizza,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 6,
    nome: "Pastel Frango com Catupiry",
    descricao: "Frango desfiado com cremoso Catupiry, servido em massa crocante e quentinha. Uma combinação cremosa e irresistível!",
    preco: 15.99,
    imagem: pastelFrangoCatupiry,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 7,
    nome: "Pastel de Frango com Cheddar",
    descricao: "Frango desfiado temperado com cheddar derretido, envoltos em massa crocante. Sabor marcante e cremoso!",
    preco: 15.99,
    imagem: pastelFrangoCheddar,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 8,
    nome: "Pastel de Frango",
    descricao: "Recheio de frango desfiado temperado, envolto em massa crocante e dourada. Clássico e delicioso!",
    preco: 13.99,
    imagem: pastelFrango,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 9,
    nome: "Pastel Frango Caipira",
    descricao: "Frango caipira desfiado com temperos caseiros, tudo em massa crocante e sequinha. Sabor autêntico do campo!",
    preco: 15.99,
    imagem: pastelFrangoCaipira,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 10,
    nome: "Pastel Carne com Mussarela e Catupiry",
    descricao: "Carne moída suculenta, mussarela derretida e Catupiry, unidos em massa crocante. Um trio perfeito de sabores!",
    preco: 18.99,
    imagem: pastelCarneMussarelaCatupiry,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 11,
    nome: "Pastel Carne com Queijo",
    descricao: "Carne moída temperada com queijo derretido, tudo em massa crocante e dourada. Sabor marcante!",
    preco: 15.99,
    imagem: pastelCarneQueijo,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 12,
    nome: "Pastel Carne com Ovo",
    descricao: "Carne moída temperada com ovo cozido fatiado, envoltos em massa crocante. Clássico de sabor intenso!",
    preco: 15.99,
    imagem: pastelCarneOvo,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 13,
    nome: "Pastel Carne com Ovo e Azeitona",
    descricao: "Carne moída, ovo cozido e azeitonas fatiadas, tudo envolto em massa crocante. Uma explosão de sabores!",
    preco: 18.99,
    imagem: pastelCarneOvoAzeitona,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 14,
    nome: "Pastel Carne com Catupiry",
    descricao: "Carne moída suculenta combinada com Catupiry cremoso, tudo em massa crocante. Cremoso e irresistível!",
    preco: 15.99,
    imagem: pastelCarneCatupiry,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 15,
    nome: "Pastel Carne com Cheddar",
    descricao: "Carne moída temperada com cheddar derretido, envoltos em massa crocante. Sabor intenso e cremoso!",
    preco: 15.99,
    imagem: pastelCarneCheddar,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 16,
    nome: "Pastel de Carne",
    descricao: "Carne moída temperada na medida certa, envolta em massa crocante e sequinha. Simples e saboroso!",
    preco: 13.99,
    imagem: pastelCarne,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 17,
    nome: "Pastel Carne com Azeitona",
    descricao: "Carne moída temperada e azeitonas fatiadas, tudo essa deliciosa massa crocante. Sabor único!",
    preco: 15.99,
    imagem: pastelCarneAzeitona,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 18,
    nome: "Pastel Calabresa com Queijo Cheddar",
    descricao: "Calabresa fatiada com queijo cheddar derretido, alicerçados em massa crocante. Picância e cremosidade em cada mordida!",
    preco: 15.99,
    imagem: pastelCalabresaCheddar,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 19,
    nome: "Pastel Calabresa com Queijo",
    descricao: "Calabresa fatiada e queijo derretido envoltos em massa crocante. Combinação clássica que nunca falha!",
    preco: 15.99,
    imagem: pastelCalabresaQueijo,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 20,
    nome: "Pastel Calabresa Baiana",
    descricao: "Calabresa apimentada no estilo baiano com temperos marcantes, em massa crocante. Sabor intenso e autêntico!",
    preco: 18.99,
    imagem: pastelCalabresaBaiana,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 21,
    nome: "Pastel Calabresa com Catupiry",
    descricao: "Calabresa fatiada combinada com Catupiry cremoso, tudo em massa crocante. Perfeito equilíbrio de texturas!",
    preco: 15.99,
    imagem: pastelCalabresaCatupiry,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 22,
    nome: "Pastel Brócolis, Bacon e Queijo",
    descricao: "Brócolis frescos, bacon crocante e queijo derretido, unidos em uma massa crocante. Sabor sofisticado e irresistível!",
    preco: 18.99,
    imagem: pastelBrocolisBaconQueijo,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 23,
    nome: "Pastel de Calabresa",
    descricao: "Calabresa fatiada temperada, envolta em massa crocante. Simples, mas cheio de personalidade!",
    preco: 13.99,
    imagem: pastelCalabresa,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 24,
    nome: "Pastel de Brócolis com Queijo",
    descricao: "Brócolis fresquinho com queijo derretido formando uma combinação saudável e saborosa, envolvida em uma massa crocante.",
    preco: 17.99,
    imagem: pastelBrocolisQueijo,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 25,
    nome: "Pastel Brócolis, Queijo e Alho",
    descricao: "Brócolis no ponto, queijo derretido e alho frito trazendo aquele sabor especial e marcante. Ideal para quem ama combinações diferentes!",
    preco: 18.99,
    imagem: pastelBrocolisQueijoAlho,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 26,
    nome: "Pastel de Atum com Ovo Cozido e Azeitona",
    descricao: "Uma combinação leve e deliciosa: atum temperado, ovo cozido e azeitonas picadinhas. Para quem quer um pastel diferente e nutritivo!",
    preco: 19.99,
    imagem: pastelAtumOvoAzeitona,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 27,
    nome: "Pastel Bauru",
    descricao: "Presunto, queijo, tomate e orégano no estilo tradicional Bauru, dentro de uma massa crocante e dourada. Uma receita que atravessa gerações!",
    preco: 15.99,
    imagem: pastelBauru,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 28,
    nome: "Pastel de Atum com Catupiry",
    descricao: "Atum temperado com o sabor cremoso do catupiry. Um recheio suave e delicioso em uma massa crocante.",
    preco: 19.99,
    imagem: pastelAtumCatupiry,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 29,
    nome: "Pastel de Atum com Queijo Mussarela",
    descricao: "A mistura perfeita de atum e queijo mussarela, com um toque de tempero especial. Um pastel leve, mas marcante!",
    preco: 19.99,
    imagem: pastelAtumMussarela,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 30,
    nome: "Pastel de Queijo com Alho Frito",
    descricao: "Queijo derretido e cremoso com alho frito douradinho. Uma combinação inusitada e deliciosa!",
    preco: 15.99,
    imagem: pastelQueijoAlho,
    categoria: "pastel",
    ativo: true
  },
  {
    id: 31,
    nome: "Pastel 4 Queijos",
    descricao: "Uma mistura irresistível de quatro queijos selecionados, derretidos e envoltos em uma massa douradinha e crocante.",
    preco: 17.99,
    imagem: pastel4Queijos,
    categoria: "pastel",
    ativo: true
  }
]
export default pasteis
