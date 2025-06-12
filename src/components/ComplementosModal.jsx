import React, { useState } from "react"
import extrasLanche from "../mocks/extrasLanche.jsx"
import extrasXB from "../mocks/lancheXBurguer.jsx"
import sacheMock from "../mocks/sache.jsx"

// IMPORTAÇÃO DOS MOCKS DE COMBOS
import comboIndividualMock from "../mocks/comboIndividualMock"
import combo2Mock from "../mocks/combo2Mock"
import combo4Mock from "../mocks/combo4Mock"
import combo6Mock from "../mocks/combo6Mock"

export default function ComplementoModal({ produto, onClose, onConfirm }) {
  const [saches, setSaches] = useState([])
  const [extras, setExtras] = useState([])
  const [observacao, setObservacao] = useState("")
  const [comboExtras, setComboExtras] = useState({})
  const [lanchesSelecionados, setLanchesSelecionados] = useState([])

  // CATEGORIA E REGRAS
  const categoria = produto.categoria?.toLowerCase() || ""
  const isLanche = categoria === "lanche"
  const isPastel = categoria === "pastel"

  const isSimples = ["porcoes", "caldo", "bebida", "doces", "doce"].includes(categoria)

  // VERIFICAÇÃO DE COMBOS POR NOME
  const comboMap = {
    "combo individual": comboIndividualMock,
    "combo casal": combo2Mock,
    "combo familia 4": combo4Mock,
    "combo familia 6": combo6Mock,
  }

  const comboKey = Object.keys(comboMap).find((key) =>
    produto.nome.toLowerCase().includes(key)
  )
  const comboMock = comboMap[comboKey]
  const isCombo = !!comboKey

  // EXIBIÇÕES
  const showSaches = isLanche || isPastel
  const showExtras = !isPastel && isLanche && !isCombo
  const showObservacao = (isLanche || isPastel) && !isCombo

  // MOCK DE EXTRAS
  const isXB = produto.nome.toLowerCase() === "x-burguer"
  const extrasMock = isXB ? extrasXB : extrasLanche

  // ALTERAR QUANTIDADE DE ITENS
  const alterarQuantidade = (lista, setLista, item, operacao) => {
    setLista((prev) => {
      const existente = prev.find((e) => e.id === item.id)
      if (!existente && operacao === "add") {
        return [...prev, { ...item, quantidade: 1 }]
      } else if (existente) {
        return prev
          .map((e) =>
            e.id === item.id
              ? {
                ...e,
                quantidade:
                  operacao === "add"
                    ? e.quantidade + 1
                    : Math.max(e.quantidade - 1, 0),
              }
              : e
          )
          .filter((e) => e.quantidade > 0)
      }
      return prev
    })
  }

  // ALTERA OPÇÃO DE COMBO
  const handleComboChange = (grupoId, item) => {
    setComboExtras((prev) => ({
      ...prev,
      [grupoId]: {
        ...item,
        __titulo: comboMock.find(g => g.id === grupoId)?.tituloSimples || grupoId,
      },
    }))
  }

  // CALCULAR VALORES
  const totalSaches = saches.reduce((soma, s) => soma + s.preco * s.quantidade, 0)
  const totalExtras = extras.reduce((soma, e) => soma + e.preco * e.quantidade, 0)

  const totalCombo = Object.entries(comboExtras).reduce((soma, [grupoId, item]) => {
    if (Array.isArray(item)) {
      return soma + item.reduce((sub, op) => sub + (op?.preco || 0), 0)
    }
    return soma + (item?.preco || 0)
  }, 0)

  const precoFinal = produto.preco + totalSaches + totalExtras + totalCombo

  // CONFIRMAR
  const confirmar = () => {
    onConfirm({
      ...produto,
      saches: showSaches ? saches : [],
      extras: showExtras ? extras : [],
      observacao: isCombo
        ? comboExtras["5"]?.texto || ""
        : showObservacao
          ? observacao
          : "",
      tipo: isCombo ? "combo" : undefined,
      comboExtras: isCombo ? comboExtras : undefined,
      preco: precoFinal,
    })
    onClose()
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white rounded-xl p-6 w-full max-w-xl shadow-lg overflow-hidden
    ${isSimples ? "h-auto max-h-[40vh]" : "h-full max-h-[60vh]"}`}
      >

        <div className="flex flex-col h-full">
          <h2 className="text-xl font-bold mb-4 text-red-700">{produto.nome}</h2>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">

            {isCombo && comboMock && (
              <div>
                {comboMock.map((grupo) => {
                  if (grupo.tipo === "observacao") {
                    return (
                      <div key={grupo.id}>
                        <label className="block font-semibold mb-2">{grupo.titulo}</label>
                        <textarea
                          className="w-full border rounded p-2"
                          rows={3}
                          placeholder="Digite sua observação..."
                          value={comboExtras[grupo.id]?.texto || ""}
                          onChange={(e) =>
                            setComboExtras((prev) => ({
                              ...prev,
                              [grupo.id]: { ...prev[grupo.id], texto: e.target.value },
                            }))
                          }
                        />
                      </div>
                    )
                  }

                  if (grupo.tipo === "escolha") {

                    // // Código para múltiplas escolhas (botões + e -)
                    // const selecionados = comboExtras[grupo.id] || []

                    // const toggleEscolha = (opcao) => {
                    //   let novosSelecionados = [...(comboExtras[grupo.id] || [])]
                    //   const quantidadeSelecionada = novosSelecionados.length
                    //   if (quantidadeSelecionada >= grupo.quantidadeMaxima) return
                    //   novosSelecionados.push(opcao)
                    //   setComboExtras((prev) => ({
                    //     ...prev,
                    //     [grupo.id]: novosSelecionados,
                    //   }))
                    // }

                    return (
                      <div key={grupo.id}>
                        <p className="font-semibold mb-2">{grupo.titulo}</p>
                        {grupo.opcoes.map((opcao) => {
                          const selecionados = comboExtras[grupo.id] || []
                          const quantidade = selecionados.filter((o) => o.id === opcao.id).length

                          return (
                            <div key={opcao.id} className="flex items-center gap-2 mb-2">
                              {opcao.imagem && (
                                <img src={opcao.imagem} alt={opcao.nome} className="w-6 h-6" />
                              )}
                              <span>{opcao.nome} {opcao.preco ? `(+ R$${opcao.preco.toFixed(2)})` : ""}</span>
                              <div className="flex items-center gap-1 ml-auto">
                                <button
                                  onClick={() => {
                                    if (quantidade > 0) {
                                      const novosSelecionados = [...selecionados]
                                      const index = novosSelecionados.findIndex((o) => o.id === opcao.id)
                                      if (index !== -1) {
                                        novosSelecionados.splice(index, 1)
                                        setComboExtras((prev) => ({ ...prev, [grupo.id]: novosSelecionados }))
                                      }
                                    }
                                  }}
                                  className="px-2 py-1 border rounded"
                                >
                                  –
                                </button>
                                <span>{quantidade}</span>
                                <button
                                  onClick={() => {
                                    if (selecionados.length < grupo.quantidadeMaxima) {
                                      const grupoDados = Array.isArray(comboMock)
                                        ? comboMock.find((g) => g.id === grupo.id)
                                        : null

                                      const novoItem = { ...opcao, __titulo: grupoDados?.tituloSimples || grupoDados?.titulo || grupo.id }

                                      setComboExtras((prev) => ({
                                        ...prev,
                                        [grupo.id]: [...selecionados, novoItem],
                                      }))
                                    }
                                  }}
                                  className="px-2 py-1 border rounded"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )
                  }

                  // Caso padrão: seleção simples (radio)
                  const selecionado = comboExtras[grupo.id]
                  return (
                    <div key={grupo.id}>
                      <p className="font-semibold">{grupo.titulo}</p>
                      <p className="font-extralight mb-2 text-sm text-gray-500">{grupo.descricao}</p>
                      {grupo.opcoes.map((opcao) => (
                        <label
                          key={opcao.id}
                          className={`flex items-center gap-2 mb-1 cursor-pointer ${selecionado?.id === opcao.id ? "font-bold" : ""
                            }`}
                        >
                          <input
                            type="radio"
                            name={`grupo-${grupo.id}`}
                            checked={selecionado?.id === opcao.id}
                            onChange={() => handleComboChange(grupo.id, opcao, grupo.titulo)}
                          />
                          {opcao.imagem && (
                            <img src={opcao.imagem} alt={opcao.nome} className="w-6 h-6" />
                          )}
                          <span>{opcao.nome} {opcao.preco ? `(+ R$${opcao.preco.toFixed(2)})` : ""}</span>
                        </label>
                      ))}
                    </div>
                  )
                })}
              </div>

            )}


            {/* EXTRAS E SACHÊS NORMAIS */}
            {!isCombo && showSaches && (
              <div>
                <p className="font-semibold mb-2">Escolha os sachês:</p>
                {sacheMock.map((sache) => {
                  const selecionado = saches.find((s) => s.id === sache.id)
                  const qtd = selecionado ? selecionado.quantidade : 0
                  return (
                    <div
                      key={sache.id}
                      className="flex items-center justify-between mb-2"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={sache.imagem}
                          alt={sache.nome}
                          className="w-8 h-8"
                        />
                        <span>{sache.nome}</span>
                        <span className="text-sm text-gray-500">
                          R$ {sache.preco.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            alterarQuantidade(saches, setSaches, sache, "sub")
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span>{qtd}</span>
                        <button
                          onClick={() =>
                            alterarQuantidade(saches, setSaches, sache, "add")
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {!isCombo && showExtras && (
              <div>
                <p className="font-semibold mb-2">Escolha os extras:</p>
                {extrasMock.map((extra) => {
                  const selecionado = extras.find((e) => e.id === extra.id)
                  const qtd = selecionado ? selecionado.quantidade : 0
                  return (
                    <div
                      key={extra.id}
                      className="flex items-center justify-between mb-2"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={extra.imagem}
                          alt={extra.nome}
                          className="w-8 h-8"
                        />
                        <span>{extra.nome}</span>
                        <span className="text-sm text-gray-500">
                          R$ {extra.preco.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            alterarQuantidade(extras, setExtras, extra, "sub")
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span>{qtd}</span>
                        <button
                          onClick={() =>
                            alterarQuantidade(extras, setExtras, extra, "add")
                          }
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {!isCombo && showObservacao && (
              <div>
                <label className="block font-semibold mb-2">Observações:</label>
                <textarea
                  className="w-full border rounded p-2"
                  rows="3"
                  placeholder="Ex: Sem cebola, pouco molho…"
                  value={observacao}
                  onChange={(e) => setObservacao(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="mt-4">
            <div className="flex justify-between font-semibold">
              <p>Total:</p>
              <p>R$ {precoFinal.toFixed(2)}</p>
            </div>
            <div className="flex gap-6 mt-4">
              <button
                onClick={onClose}
                className="flex-1 border-2 text-red-700 px-4 py-2 rounded hover:bg-gray-200 font-bold"
              >
                Cancelar
              </button>
              <button
                onClick={confirmar}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-bold"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
