import React from 'react';

const CustomInitial = () => {
  return(
  <body>
    <main>
      <nav>
        <ul>
          <li><a href="#cursos">cursos</a></li>
        </ul>
        <li><a href="#saiba mais">saiba mais</a></li>
        <form action="">
          <label htmlFor="form"></label>
          <input type="text" placeholder="Buscar"/>
          <button><img src="" alt=""/></button>
        </form>
        <ul>
          <li><a href="#entrar">entrar</a></li>
          <li><a href="#carrinho"><img src="" alt=""/></a></li>
        </ul>
      </nav>
    </main>
    <section>
      <a href="#home"><img src="" alt="" /></a>
      <div className='container'>
        <ul>
          <li><a href="#sobre">sobre</a></li>
          <li><a href="#formaDePagamento">Forma de pagamento</a></li>
          <li><a href="#entrega">Entrega</a></li>
          <li><a href="#trocaedevolucao">Troca e devolução</a></li>
          <li><a href="#segurancaeprivacidade">segurança e privacidade</a></li>
          <li><a href="contato">Contato</a></li>
        </ul>
        <div className='txt'>
        <h1>Institucional</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id animi fuga architecto cumque similique, eaque nobis mollitia natus, repellendus nihil autem impedit possimus porro aliquam nam ut? Voluptatem, temporibus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perspiciatis fuga maiores iste! Rerum et possimus ducimus assumenda nulla ullam, quos ad, facere incidunt atque exercitationem rem dolorum neque in!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, debitis, maxime ducimus rerum provident quos autem labore ipsa quam quisquam repudiandae culpa accusamus facilis voluptates possimus, porro aliquam asperiores ut.</p>
        </div>
      </div>
    </section>

</body>
  );
};
export{CustomInitial};