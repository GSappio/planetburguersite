import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import lanches from '../mocks/lanches.jsx'
import pasteis from '../mocks/pasteis.jsx'
// import caldos from '../mocks/caldos.jsx'
import doces from '../mocks/doces.jsx'
import bebidas from '../mocks/bebidas.jsx'
import combos from '../mocks/combos.jsx'
import lancheturbo from '../mocks/lancheturbo.jsx'
import porcoes from '../mocks/porcoes.jsx'
import promocoes from '../mocks/promocoes.jsx'
import promocaoTurbo from '../mocks/promocaoTurbo.jsx'
import ComplementosModal from '../components/ComplementosModal.jsx'
import fretePorBairro from '../mocks/fretePorBairro.jsx'
import BotaoCarrinho from '../components/BotaoCarrinho.jsx'

function Home() {
  const [filtro, setFiltro] = useState('lanches')
  const [carrinho, setCarrinho] = useState([])
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [bairro, setBairro] = useState('')
  const [pagamento, setPagamento] = useState('')
  const [modalAberto, setModalAberto] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)
  const todosProdutos = [
    ...lanches,
    ...lancheturbo,
    ...pasteis,
    // ...combos,
    ...promocoes,
    ...promocaoTurbo,
    ...porcoes,
    // ...caldos,
    ...bebidas,
    ...doces,
  ]

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto)
    setModalAberto(true)
  }

  const adicionarComComplementos = (produtoComExtras) => {
    setCarrinho([...carrinho, produtoComExtras])
    setModalAberto(false)
    setProdutoSelecionado(null)
  }

  const removerItem = (index) => {
    const novoCarrinho = [...carrinho]
    novoCarrinho.splice(index, 1)
    setCarrinho(novoCarrinho)
  }

  const abrirCarrinho = () => {
    // Substituir com navegação ou exibição do carrinho
    alert('Abrir carrinho')
  }

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0)

  const freteBase =
    bairro && fretePorBairro[bairro] !== undefined ? fretePorBairro[bairro] : 0

  const valorFrete = total >= 20 ? 0 : freteBase
  const totalComFrete = total + valorFrete

  const finalizarPedido = () => {
    const lista = carrinho
      .map((item, i) => {
        let texto = `${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}\n`

        if (item.tipo === 'combo' && item.comboExtras) {
          Object.entries(item.comboExtras).forEach(([grupoId, escolha]) => {
            if (!escolha) return

            if (escolha.texto) {
              texto += `  *Observação:* ${escolha.texto}\n`
            } else if (Array.isArray(escolha)) {
              const titulo = escolha[0]?.__titulo || grupoId
              const nomes = escolha.map((e) => e.nome).join(', ')
              texto += `  *${titulo}:* ${nomes}\n`
            } else if (escolha.nome) {
              const titulo = escolha.__titulo || grupoId
              texto += `  *${titulo}:* ${escolha.nome}\n`
            }
          })
        }

        if (item.extras?.length > 0) {
          // Para cada extra, mostra "Nome" ou "Nome xQuantidade" se quantidade > 1
          const extrasTexto = item.extras
            .map((e) =>
              e.quantidade > 1 ? `${e.nome} x${e.quantidade}` : e.nome
            )
            .join(', ')
          texto += `  *Extras:* ${extrasTexto}\n`
        }

        if (item.saches?.length > 0) {
          const sachesTexto = item.saches
            .map((s) =>
              s.quantidade > 1 ? `${s.nome} x${s.quantidade}` : s.nome
            )
            .join(', ')
          texto += `  *Sachês/Molhos:* ${sachesTexto}\n`
        }

        if (!item.tipo && item.observacao?.trim()) {
          texto += `  *Observação:* ${item.observacao.trim()}\n`
        }

        return texto.trim()
      })
      .join('\n\n')

    const mensagem = encodeURIComponent(
      `*Pedido Planet Burguer:*\n\n${lista}\n\n` +
        `*Subtotal:* R$ ${total.toFixed(2)}\n` +
        `*Frete (${bairro}):* R$ ${valorFrete.toFixed(2)}\n` +
        `*Total com Frete:* R$ ${totalComFrete.toFixed(2)}\n\n` +
        `*Nome:* ${nome}\n🏠 *Endereço:* ${endereco}\n🏘️ *Bairro:* ${bairro}\n💳 *Pagamento:* ${pagamento}`
    )

    const numero = '5513981618608'
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank')
  }

  const produtosFiltrados = (() => {
    if (filtro === 'todos') return todosProdutos
    if (filtro === 'lanches') return lanches
    if (filtro === 'lanches Turbo') return lancheturbo
    if (filtro === 'pastel') return pasteis
    if (filtro === 'combos') return combos
    if (filtro === 'promoção') return promocoes
    if (filtro === 'Turbo 3X') return promocaoTurbo
    if (filtro === 'porção') return porcoes
    // if (filtro === 'caldos') return caldos
    if (filtro === 'bebidas') return bebidas
    if (filtro === 'doces') return doces
    return []
  })()

  const isFormValido =
    nome && endereco && bairro && pagamento && carrinho.length > 0

  return (
    <>
      <Header />
      <div className="p-4 mt-6 md:mx-20 space-y-8 min-h-screen">
        {/* Filtros */}
        <h1 className="text-2xl sm:text-3xl font-bold">
          Seja bem-vindo ao Planet Burguer!
        </h1>

        <div className="flex gap-2 flex-wrap">
          {[
            'lanches',
            'lanches Turbo',
            'pastel',
            'combos',
            'promoção',
            'Turbo 3X',
            'porção',
            // 'caldos',
            'bebidas',
            'doces',
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-full text-md font-semibold border transition-transform duration-200 hover:scale-105 transform-gpu ${
                filtro === cat
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-red-600'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {filtro === 'lanches Turbo' && (
          <h2 className="text-md font-bold mt-4 text-red-600">
            * Lanches Turbo: feitos com hambúrguer de 90gr no pão brioche 100gr.
            Um lanche maior, mais completo e cheio de sabor!
          </h2>
        )}

        {/* Lista de produtos   */}
        {produtosFiltrados.map((produto, i) => (
          <div
            key={i}
            onClick={() => produto.ativo && abrirModal(produto)}
            className={`flex justify-between gap-4 border-b pb-4 rounded p-2 transition ${
              produto.ativo
                ? 'cursor-pointer hover:bg-red-50'
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <div className="flex-1">
              {produto.destaque && produto.ativo && (
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs inline-block mb-1">
                  🔥 O mais pedido
                </span>
              )}
              <h3 className="text-lg font-semibold">{produto.nome}</h3>
              <div className="text-sm text-gray-600">{produto.descricao}</div>
              <p className="text-base font-bold mt-1">
                R$ {produto.preco.toFixed(2)}
              </p>
              {!produto.ativo && (
                <p className="text-sm text-red-500 font-semibold mt-1">
                  Produto indisponível
                </p>
              )}
            </div>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>
        ))}

        {/* Carrinho */}
        <div id="carrinho">
          <h2 className="text-xl font-semibold mb-2">🛒 Carrinho</h2>
          <ul className="mb-4">
            {carrinho.map((item, i) => (
              <li
                key={i}
                className="border-b py-2 flex justify-between items-center"
              >
                <span>
                  {item.nome} - R${item.preco.toFixed(2)}
                  <div className="text-sm text-gray-600">
                    {item.tipo === 'combo' && item.comboExtras && (
                      <div className="text-sm text-gray-600 space-y-1">
                        {Object.entries(item.comboExtras).map(
                          ([grupoId, escolha], idx) => {
                            if (!escolha) return null

                            // Observação (texto)
                            if (escolha.texto) {
                              return (
                                <div key={idx}>
                                  📝 Observação: {escolha.texto}
                                </div>
                              )
                            }

                            // Múltiplas escolhas
                            if (Array.isArray(escolha)) {
                              const titulo = escolha[0]?.__titulo || 'Opções'
                              const nomes = escolha
                                .map((e) => e.nome)
                                .join(', ')
                              return (
                                <div key={idx}>
                                  {titulo}: {nomes}
                                </div>
                              )
                            }

                            // Única escolha
                            if (escolha.nome) {
                              const titulo = escolha.__titulo || 'Opção'
                              return (
                                <div key={idx}>
                                  {titulo}: {escolha.nome}
                                </div>
                              )
                            }

                            return null
                          }
                        )}
                      </div>
                    )}

                    {item.extras?.length > 0 && (
                      <div>
                        Extras:{' '}
                        {item.extras.map((extra, idx) => (
                          <span key={idx}>
                            {extra.nome}{' '}
                            {extra.quantidade > 1 ? `x${extra.quantidade}` : ''}
                            {idx < item.extras.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.saches?.length > 0 && (
                      <div>
                        Sachês/Molhos:{' '}
                        {item.saches.map((sache, idx) => (
                          <span key={idx}>
                            {sache.nome}{' '}
                            {sache.quantidade > 1 ? `x${sache.quantidade}` : ''}
                            {idx < item.saches.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.observacao && (
                      <div>Observação: {item.observacao}</div>
                    )}
                  </div>
                </span>
                <button
                  onClick={() => removerItem(i)}
                  className="text-red-500 text-sm hover:underline font-bold"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          {total < 20 && (
            <p className="text-sm text-red-600 mb-2">
              Taxa de entrega grátis para compras acima de{' '}
              <strong>R$20,00</strong>
            </p>
          )}

          <p className="font-normal">Total: R${total.toFixed(2)}</p>
          <p className="mb-1">
            Frete: R$ {valorFrete.toFixed(2)}{' '}
            {total >= 20 && (
              <span className="text-green-600 font-semibold">
                - FRETE GRÁTIS!!
              </span>
            )}
          </p>
          <p className="font-bold mb-4">
            Total com Frete: R$ {totalComFrete.toFixed(2)}
          </p>
        </div>

        {/* Formulário */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-red-500"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Endereço"
            className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-red-500"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <select
            className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-red-500"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          >
            <option value="">Selecione o bairro</option>
            <option value="Anhanguera">Anhanguera</option>
            <option value="Balneário Oceópolis">Balneário Oceópolis</option>
            <option value="Balneário Umurama">Balneário Umurama</option>
            <option value="Caiçara">Caiçara</option>
            <option value="Centro Mongaguá">Centro Mongaguá</option>
            <option value="Cidade da Criança">Cidade da Criança</option>
            <option value="Esmeralda">Esmeralda</option>
            <option value="Flórida">Flórida</option>
            <option value="Imperador">Imperador</option>
            <option value="Jardim Caiahu">Jardim Caiahu</option>
            <option value="Jardim Chácara São João">
              Jardim Chácara São João
            </option>
            <option value="Jardim Marina">Jardim Marina</option>
            <option value="Jardim Riveira">Jardim Riveira</option>
            <option value="Jardim Samoa">Jardim Samoa</option>
            <option value="Jardim Vera Cruz">Jardim Vera Cruz</option>
            <option value="Maracanã">Maracanã</option>
            <option value="Melvi">Melvi</option>
            <option value="Mirim">Mirim</option>
            <option value="Pedreira">Pedreira</option>
            <option value="Princesa">Princesa</option>
            <option value="Real">Real</option>
            <option value="Ribeirópolis">Ribeirópolis</option>
            <option value="Samambaia">Samambaia</option>
            <option value="Solemar">Solemar</option>
            <option value="Vela Stella">Vela Stella</option>
            <option value="Vila Atlântica">Vila Atlântica</option>
            <option value="Vila Dianópolis">Vila Dianópolis</option>
            <option value="Vila Nova">Vila Nova</option>
            <option value="Vila Seabra">Vila Seabra</option>
            <option value="Vila São Paulo">Vila São Paulo</option>
          </select>
          <select
            className="w-full p-2 rounded border focus:outline-none focus:ring-2 focus:ring-red-500"
            value={pagamento}
            onChange={(e) => setPagamento(e.target.value)}
          >
            <option value="">Forma de pagamento</option>
            <option value="Cartão Crédito">Cartão Crédito</option>
            <option value="Cartão Débito">Cartão Débito</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Pix">Pix</option>
          </select>
        </div>

        <button
          onClick={finalizarPedido}
          disabled={!isFormValido}
          className={`p-3 w-full rounded-xl font-bold text-white transition 
                    ${
                      isFormValido
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
        >
          Finalizar Pedido no WhatsApp
        </button>
      </div>

      {modalAberto && produtoSelecionado && (
        <ComplementosModal
          produto={produtoSelecionado}
          onClose={() => setModalAberto(false)}
          onConfirm={adicionarComComplementos}
        />
      )}
      <BotaoCarrinho onClick={abrirCarrinho} quantidade={carrinho.length} />
      <Footer />
    </>
  )
}

export default Home
