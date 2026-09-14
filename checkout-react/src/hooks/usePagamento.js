import { useState } from "react";

function usePagamento() {
  const [processando, setProcessando] = useState(false);

  const processarPagamento = (dados, sucesso, falha) => {
    setProcessando(true);

    setTimeout(() => {
      const numeroCartao = dados.cartao.replace(/[\s-]/g, "");

      const todosIguais = numeroCartao
        .split("")
        .every((digito) => digito === numeroCartao[0]);

      setProcessando(false);

      if (todosIguais) {
        falha();
      } else {
        sucesso();
      }
    }, 2000);
  };

  return {
    processando,
    processarPagamento,
  };
}

export default usePagamento;
