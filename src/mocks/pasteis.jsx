import pastelQueijoBacon from '../img//pastelQueijoBacon.avif'
import pastelQueijoPresunto from '../img/pastelQueijoPresunto.avif'
import pastelQueijo from '../img/pastelQueijo.avif'
import pastelFrangoQueijo from '../img/pastelFrangoQueijo.avif'
import pastelPizza from '../img/pastelPizza.avif'
import pastelFrangoCatupiry from '../img/pastelFrangoCatupiry.avif'
import pastelFrangoCheddar from '../img/pastelFrangoCheddar.avif'
import pastelFrango from '../img/pastelFrango.avif'
import pastelFrangoCaipira from '../img/pastelFrangoCaipira.avif'
import pastelCarneMussarelaCatupiry from '../img/pastelCarneMussarelaCatupiry.avif'
import pastelCarneQueijo from '../img/pastelCarneQueijo.avif'
import pastelCarneOvo from '../img/pastelCarneOvo.avif'
import pastelCarneOvoAzeitona from '../img/pastelCarneOvoAzeitona.avif'
import pastelCarneCatupiry from '../img/pastelCarneCatupiry.avif'
import pastelCarneCheddar from '../img/pastelCarneCheddar.avif'
import pastelCarne from '../img/pastelCarne.avif'
import pastelCarneAzeitona from '../img/pastelCarneAzeitona.avif'
import pastelCalabresaCheddar from '../img/pastelCalabresaCheddar.jpg'
import pastelCalabresaQueijo from '../img/pastelCalabresaQueijo.avif'
import pastelCalabresaBaiana from '../img/pastelCalabresaBaiana.avif'
import pastelCalabresaCatupiry from '../img/pastelCalabresaCatupiry.avif'
import pastelBrocolisBaconQueijo from '../img/pastelBrocolisBaconQueijo.avif'
import pastelCalabresa from '../img/pastelCalabresa.avif'
import pastelBrocolisQueijo from '../img/pastelBrocolisQueijo.avif'
import pastelBrocolisQueijoAlho from '../img/pastelBrocolisQueijoAlho.avif'
import pastelAtumOvoAzeitona from '../img/pastelAtumOvoAzeitona.avif'
import pastelBauru from '../img/pastelBauru.avif'
import pastelAtumCatupiry from '../img/pastelAtumCatupiry.avif'
import pastelAtumMussarela from '../img/pastelAtumMussarela.avif'
import pastelQueijoAlho from '../img/pastelQueijoAlho.avif'
import pastel4Queijos from '../img/pastel4Queijos.avif'

const pasteis = [
  // === Carne ===
  {
    id: 1,
    nome: 'Pastel de Carne',
    imagem: pastelCarne,
    preco: 13,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Carne moída temperada na medida certa, envolta em massa crocante e sequinha. Simples e saboroso!',
  },
  {
    id: 2,
    nome: 'Pastel Carne com Queijo',
    imagem: pastelCarneQueijo,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Carne moída temperada com queijo derretido, tudo em massa crocante e dourada. Sabor marcante!',
  },
  {
    id: 3,
    nome: 'Pastel Carne com Ovo',
    imagem: pastelCarneOvo,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Carne moída temperada com ovo cozido fatiado, envoltos em massa crocante. Clássico de sabor intenso!',
  },
  {
    id: 4,
    nome: 'Pastel Carne com Catupiry',
    imagem: pastelCarneCatupiry,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Carne moída suculenta combinada com Catupiry cremoso, tudo em massa crocante. Cremoso e irresistível!',
  },
  {
    id: 5,
    nome: 'Pastel Carne com Cheddar',
    imagem: pastelCarneCheddar,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Carne moída temperada com cheddar derretido, envoltos em massa crocante. Sabor intenso e cremoso!',
  },
  {
    id: 6,
    nome: 'Pastel Carne com Ovo e Azeitona',
    imagem: pastelCarneOvoAzeitona,
    preco: 18,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Carne moída, ovo cozido e azeitonas fatiadas, tudo envolto em massa crocante. Uma explosão de sabores!',
  },
  {
    id: 7,
    nome: 'Pastel Carne com Azeitona',
    imagem: pastelCarneAzeitona,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Carne moída temperada e azeitonas fatiadas, tudo essa deliciosa massa crocante. Sabor único!',
  },
  {
    id: 8,
    nome: 'Pastel Carne com Mussarela e Catupiry',
    imagem: pastelCarneMussarelaCatupiry,
    preco: 18,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Carne moída suculenta, mussarela derretida e Catupiry, unidos em massa crocante. Um trio perfeito de sabores!',
  },

  // === Frango ===
  {
    id: 9,
    nome: 'Pastel de Frango',
    imagem: pastelFrango,
    preco: 13,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Recheio de frango desfiado temperado, envolto em massa crocante e dourada. Clássico e delicioso!',
  },
  {
    id: 10,
    nome: 'Pastel de Frango com Queijo',
    imagem: pastelFrangoQueijo,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Frango desfiado temperado e queijo derretido, tudo isso envolto em massa crocante e pronto para comer. Leve e saboroso!',
  },
  {
    id: 11,
    nome: 'Pastel Frango com Catupiry',
    imagem: pastelFrangoCatupiry,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Frango desfiado com cremoso Catupiry, servido em massa crocante e quentinha. Uma combinação cremosa e irresistível!',
  },
  {
    id: 12,
    nome: 'Pastel de Frango com Cheddar',
    imagem: pastelFrangoCheddar,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Frango desfiado temperado com cheddar derretido, envoltos em massa crocante. Sabor marcante e cremoso!',
  },
  {
    id: 13,
    nome: 'Pastel Frango Caipira',
    imagem: pastelFrangoCaipira,
    preco: 18,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Frango caipira desfiado com temperos caseiros, tudo em massa crocante e sequinha. Sabor autêntico do campo!',
  },

  // === Calabresa ===
  {
    id: 14,
    nome: 'Pastel de Calabresa',
    imagem: pastelCalabresa,
    preco: 13,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Calabresa fatiada temperada, envolta em massa crocante. Simples, mas cheio de personalidade!',
  },
  {
    id: 15,
    nome: 'Pastel Calabresa com Queijo',
    imagem: pastelCalabresaQueijo,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Calabresa fatiada e queijo derretido envoltos em massa crocante. Combinação clássica que nunca falha!',
  },
  {
    id: 16,
    nome: 'Pastel Calabresa com Catupiry',
    imagem: pastelCalabresaCatupiry,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Calabresa fatiada combinada com Catupiry cremoso, tudo em massa crocante. Perfeito equilíbrio de texturas!',
  },
  {
    id: 17,
    nome: 'Pastel Calabresa com Queijo Cheddar',
    imagem: pastelCalabresaCheddar,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Calabresa fatiada com queijo cheddar derretido, alicerçados em massa crocante. Picância e cremosidade em cada mordida!',
  },
  {
    id: 18,
    nome: 'Pastel Calabresa Baiana',
    imagem: pastelCalabresaBaiana,
    preco: 18,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Calabresa apimentada no estilo baiano com temperos marcantes, em massa crocante. Sabor intenso e autêntico!',
  },

  // === Atum ===
  {
    id: 19,
    nome: 'Pastel de Atum com Ovo Cozido e Azeitona',
    imagem: pastelAtumOvoAzeitona,
    preco: 19,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Uma combinação leve e deliciosa: atum temperado, ovo cozido e azeitonas picadinhas. Para quem quer um pastel diferente e nutritivo!',
  },
  {
    id: 20,
    nome: 'Pastel de Atum com Catupiry',
    imagem: pastelAtumCatupiry,
    preco: 18,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Atum temperado com o sabor cremoso do catupiry. Um recheio suave e delicioso em uma massa crocante.',
  },
  {
    id: 21,
    nome: 'Pastel de Atum com Queijo Mussarela',
    imagem: pastelAtumMussarela,
    preco: 18,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'A mistura perfeita de atum e queijo mussarela, com um toque de tempero especial. Um pastel leve, mas marcante!',
  },

  // === Brócolis ===
  {
    id: 22,
    nome: 'Pastel de Brócolis com Queijo',
    imagem: pastelBrocolisQueijo,
    preco: 17,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Brócolis fresquinho com queijo derretido formando uma combinação saudável e saborosa, envolvida em uma massa crocante.',
  },
  {
    id: 23,
    nome: 'Pastel Brócolis, Queijo e Alho',
    imagem: pastelBrocolisQueijoAlho,
    preco: 18,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Brócolis no ponto, queijo derretido e alho frito trazendo aquele sabor especial e marcante. Ideal para quem ama combinações diferentes!',
  },
  {
    id: 24,
    nome: 'Pastel Brócolis, Bacon e Queijo',
    imagem: pastelBrocolisBaconQueijo,
    preco: 18,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Brócolis frescos, bacon crocante e queijo derretido, unidos em uma massa crocante. Sabor sofisticado e irresistível!',
  },

  // === Queijo ===
  {
    id: 25,
    nome: 'Pastel de Queijo',
    imagem: pastelQueijo,
    preco: 13,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Recheio farto de queijo derretido na medida certa, envolto em massa crocante e sequinha. Simples, mas irresistível!',
  },
  {
    id: 26,
    nome: 'Pastel de Queijo com Bacon',
    imagem: pastelQueijoBacon,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Massa crocante recheada com queijo derretido e bacon crocante, preparada com ingredientes selecionados e feita na hora. Um clássico cheio de sabor!',
  },
  {
    id: 27,
    nome: 'Pastel de Queijo com Alho Frito',
    imagem: pastelQueijoAlho,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Queijo derretido e cremoso com alho frito douradinho. Uma combinação inusitada e deliciosa!',
  },
  {
    id: 28,
    nome: 'Pastel de Queijo e Presunto',
    imagem: pastelQueijoPresunto,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Delicioso pastel com queijo derretido e presunto fatiado, envoltos em massa crocante e assados até dourar. Sabor que conquista qualquer paladar!',
  },
  {
    id: 29,
    nome: 'Pastel 4 Queijos',
    imagem: pastel4Queijos,
    preco: 18,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Uma mistura irresistível de quatro queijos selecionados, derretidos e envoltos em uma massa douradinha e crocante.',
  },

  // === Outros ===
  {
    id: 30,
    nome: 'Pastel de Pizza',
    imagem: pastelPizza,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Recheio tradicional de presunto, queijo mussarela e molho de tomate temperado, envoltos em massa crocante e deliciosamente assados.',
  },
  {
    id: 31,
    nome: 'Pastel Bauru',
    imagem: pastelBauru,
    preco: 15,
    categoria: 'pastel',
    ativo: true,
    descricao:
      'Presunto, queijo, tomate e orégano no estilo tradicional Bauru, dentro de uma massa crocante e dourada. Uma receita que atravessa gerações!',
  },
]

export default pasteis
