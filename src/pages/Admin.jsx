// src/pages/Admin.jsx
import { useState, useEffect } from "react"
import { db } from "../firebase"
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore"

function Admin() {
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [preco, setPreco] = useState("")
  const [imagem, setImagem] = useState("")
  const [categoria, setCategoria] = useState("")
  const [produtos, setProdutos] = useState([])
  const [categorias, setCategorias] = useState([])

  const produtosRef = collection(db, "produtos")

  const carregarProdutos = async () => {
    const snapshot = await getDocs(produtosRef)
    const lista = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setProdutos(lista)

    // Pegar categorias distintas
    const unicas = [...new Set(lista.map((p) => p.categoria))]
    setCategorias(unicas)
  }

  useEffect(() => {
    carregarProdutos()
  }, [])

  const adicionarProduto = async () => {
    if (!nome || !preco || !imagem || !categoria) {
      alert("Preencha todos os campos")
      return
    }

    await addDoc(produtosRef, {
      nome,
      descricao,
      preco: Number(preco),
      imagem,
      categoria,
    })

    setNome("")
    setDescricao("")
    setPreco("")
    setImagem("")
    setCategoria("")
    carregarProdutos()
  }

  const removerProduto = async (id) => {
    await deleteDoc(doc(db, "produtos", id))
    carregarProdutos()
  }

  const editarProduto = async (id) => {
    const novoNome = prompt("Novo nome:")
    if (!novoNome) return
    await updateDoc(doc(db, "produtos", id), { nome: novoNome })
    carregarProdutos()
  }

  return (
    <div className="p-4 max-w-xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">Painel de Administração</h1>

      <input
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        placeholder="Preço"
        type="number"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        placeholder="Link da imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="border p-2 w-full mb-4"
      >
        <option value="">Selecione a categoria</option>
        {categorias.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
        <option value="nova">Nova categoria...</option>
      </select>

      {categoria === "nova" && (
        <input
          placeholder="Nova categoria"
          onChange={(e) => setCategoria(e.target.value)}
          className="border p-2 w-full mb-4"
        />
      )}

      <button
        onClick={adicionarProduto}
        className="bg-purple-600 text-white w-full p-2 rounded font-semibold"
      >
        Adicionar Produto
      </button>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-2">Produtos</h2>
      <ul>
        {produtos.map((p) => (
          <li
            key={p.id}
            className="border-b py-2 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{p.nome}</p>
              <p className="text-sm text-gray-600">{p.categoria}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => editarProduto(p.id)}
                className="text-blue-600 text-sm"
              >
                Editar
              </button>
              <button
                onClick={() => removerProduto(p.id)}
                className="text-red-500 text-sm"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Admin
