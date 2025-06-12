import React from 'react';

export function Footer() {
  return (
    <footer className="bg-red-700 text-white text-md py-6 mt-8">
      <div className="w-full px-8 md:px-24 text-center">
        <p>&copy; {new Date().getFullYear()} Planet Burguer. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
