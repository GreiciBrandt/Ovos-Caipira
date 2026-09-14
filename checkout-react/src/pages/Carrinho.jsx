import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";
import { produtos } from "../data/produtos";
import { useNavigate } from "react-router-dom";

function Carrinho() {
  const navigate = useNavigate();

  const total = produtos.reduce(
    (soma, produto) => soma + produto.preco * produto.quantidade,
    0
  );

  return (
    <main>
      <h1>Ovos Caipira</h1>

      <p>Confira os produtos do seu carrinho:</p>

      <section>
        {produtos.map((produto) => (
          <ItemCarrinho
            key={produto.id}
            produto={produto}
          />
        ))}
      </section>

      <ResumoCompra total={total} />

      <button onClick={() => navigate("/pagamento")}>
        Finalizar compra
      </button>
    </main>
  );
}

export default Carrinho;
