import { useNavigate } from "react-router-dom";

function Falha() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Compra não aprovada</h1>

      <p>tentativa de golpe</p>

      <button onClick={() => navigate("/pagamento")}>
        Tentar novamente
      </button>
    </main>
  );
}

export default Falha;
