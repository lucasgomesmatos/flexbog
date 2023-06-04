import imgProduto1 from './assets/img/produtos1.jpg';
import imgProduto2 from './assets/img/produtos2.jpg';
import imgProduto3 from './assets/img/produtos3.jpg';
import imgSobre1 from './assets/img/sobre1.jpg';
import imgSobre2 from './assets/img/sobre2.jpg';

export const App = () => {
  return (
    <>
      <div className="superInfoBg">
        <div className="superInfo">
          <p>Segunda / Sexta-Feira - 08:00 às 18:00</p>
          <a href="tel:+5521999999999">+55 21 99999-9999</a>
          <p>Av. Ali Perto, 330, Botafogo - RJ</p>
        </div>
      </div>

      <header className="menuBg">
        <div className="menu">
          <div className="menuLogo">
            <a href="#">FlexBlog</a>
          </div>
          <nav className="menuNav">
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#sobre">Produtos</a>
              </li>
              <li>
                <a href="#sobre">Preço</a>
              </li>
              <li>
                <a href="#sobre">Qualidade</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <h1 className="introducao">
        Novo valores e <br />
        Propriedades de CSS
      </h1>

      <section className="sobre" id="sobre">
        <div className="sobreInfo">
          <h1>Sobre</h1>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente apropriadas objetivos.
          </p>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente apropriadas objetivos.
          </p>
        </div>
        <div className="sobreImg">
          <img src={imgSobre1} alt="Sobre 1" />
        </div>
        <div className="sobreImg">
          <img src={imgSobre2} alt="Sobre 2" />
        </div>
      </section>
      <section className="produtos" id="produtos">
        <h1>Produtos</h1>
        <div className="produtosContainer">
          <div className="produtosItem purple">
            <h2>Purple</h2>
            <img src={imgProduto1} alt="Produto 1" />
          </div>
          <div className="produtosItem pink">
            <h2>Pink</h2>
            <img src={imgProduto2} alt="Produto 2" />
          </div>
          <div className="produtosItem blue">
            <h2>Blue</h2>
            <img src={imgProduto3} alt="Produto 3" />
          </div>
        </div>
      </section>

      <section className="preco" id="preco">
        <div className="precoItem">
          <h2>Cobre</h2>
          <span>
            <sup>R$</sup> 19
          </span>

          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteúdo Secreto</li>
            <li>Suporte 24h</li>
          </ul>
          <a href="">Comprar</a>
        </div>
        <div className="precoItem">
          <h2>Prata</h2>
          <span>
            <sup>R$</sup> 39
          </span>

          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteúdo Secreto</li>
            <li>Suporte 24h</li>
            <li>Compra Exclusiva</li>
          </ul>
          <a href="">Comprar</a>
        </div>
        <div className="precoItem">
          <h2>Ouro</h2>
          <span>
            <sup>R$</sup> 79
          </span>

          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteúdo Secreto</li>
            <li>Suporte 24h</li>
            <li>Compra Exclusiva</li>
            <li>Download dos Itens</li>
          </ul>
          <a href="">Comprar</a>
        </div>
      </section>

      <section className="qualidade" id="qualidade">
        <div className="qualidadeItem">
          <h2>Inteligente</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente
          </p>
        </div>
        <div className="qualidadeItem">
          <h2>Compacto</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente
          </p>
        </div>
        <div className="qualidadeItem">
          <h2>Econômico</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente
          </p>
        </div>
        <div className="qualidadeItem">
          <h2>Transparente</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente
          </p>
        </div>
        <div className="qualidadeItem">
          <h2>Opaco</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente
          </p>
        </div>
        <div className="qualidadeItem">
          <h2>Sustentável</h2>
          <p>
            O que temos que ter sempre em mente é que a determinação clara de
            objetivos afeta positivamente a correta previsão das condições
            inegavelmente
          </p>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletterInfo">
          <h1>Newsletter</h1>
          <p>assine e fique por dentro das novidades</p>
        </div>
        <form className="newsletterForm">
          <input type="text" placeholder="Seu e-mail" />
          <button type="submit">Assinar</button>
        </form>
      </section>
      <footer>
        <p>FlexBog © Todos os direitos reservados</p>
      </footer>
    </>
  );
};
