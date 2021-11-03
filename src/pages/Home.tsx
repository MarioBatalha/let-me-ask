import React from 'react';
import IlustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export const Home = () => {
  return (
    <div>
      <aside>
        <img src={IlustrationImg} alt="Ilustração de perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div>
          <img src={LogoImg} alt="letmeask" />
          <button>
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
          <div>Ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <button>Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
};
