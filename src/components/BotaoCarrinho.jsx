export default function BotaoCarrinho({ onClick, quantidade }) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => {
          const carrinhoDiv = document.getElementById("carrinho");
          if (carrinhoDiv) {
            carrinhoDiv.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="bg-red-700 hover:bg-red-700 text-white p-5 rounded-full relative transition duration-300 ease-in-out"
        aria-label="Ir para o carrinho"
      >

        {/* Ícone SVG do carrinho */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"ßß
          strokeWidth={2} 
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.293 2.293a1 1 0 00.293 1.414L7 17h10m-4 0a1 1 0 100 2 1 1 0 000-2zm-6 0a1 1 0 100 2 1 1 0 000-2z"
          />
        </svg>

        {/* Badge com quantidade */}
        {quantidade > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
            {quantidade}
          </span>
        )}
      </button>
    </div>
  );
}
