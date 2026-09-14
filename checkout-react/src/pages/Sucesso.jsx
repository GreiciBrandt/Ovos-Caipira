import { useNavigate } from "react-router-dom";

function Sucesso() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Compra aprovada!</h1>

      <p>Sua compra foi realizada com sucesso.</p>

      <button onClick={() => navigate("/")}>
        Voltar para o carrinho
      </button>
    </main>
  );
}

export default Sucesso;
