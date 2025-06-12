import React, { useState } from 'react'

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  const numeroWhatsApp = '5511967759989'
  const mensagem = 'Olá! Preciso de ajuda com o meu pedido.'
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`
  const linkInstagram = 'https://www.instagram.com/planetburguerpg' // Substitua pelo real

  return (
     <header className="bg-red-700 text-white py-4 shadow-md relative z-50 a">
      <div className="w-full px-8 md:px-24 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
          Planet Burguer
        </h1>

        {/* Menu desktop */}
        <nav className="hidden sm:flex gap-6 items-center text-sm sm:text-base font-medium">
          <a
            href={linkInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            Instagram
          </a>
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline cursor-pointer"
          >
            Precisa de ajuda?
          </a>
          {/* <a className="hover:underline cursor-pointer">WhatsApp</a> */}
        </nav>

        {/* Ícone hamburguer mobile */}
        <button
          className="sm:hidden text-2xl focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>
      </div>

      {/* Dropdown absoluto no mobile */}
      {menuAberto && (
        <nav className="sm:hidden absolute right-8 top-full mt-2">
          <ul className="bg-red-700 px-4 py-3 rounded shadow-lg text-sm font-medium space-y-2 w-48 text-start">
            <li>
              <a
                href={linkInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Precisa de ajuda?
              </a>
            </li>
            {/* <li className="hover:underline cursor-pointer">WhatsApp</li> */}
          </ul>
        </nav>
      )}
    </header>
  )
}
