import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import usePagamento from "../hooks/usePagamento";

const pagamentoSchema = z.object({
  titular: z.string().min(1, "Informe o nome do titular do cartão."),

  cartao: z
    .string()
    .min(1, "Informe o número do cartão.")
    .refine(
      (valor) => valor.replace(/[\s-]/g, "").length === 16,
      "O cartão deve ter 16 dígitos."
    )
    .refine(
      (valor) => /^\d[\d\s-]*$/.test(valor),
      "O cartão deve conter apenas números."
    ),

  validade: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use o formato MM/AA."),

  cvv: z
    .string()
    .regex(/^\d{3}$/, "O CVV deve ter 3 dígitos."),
});

function Pagamento() {
  const navigate = useNavigate();
  const { processando, processarPagamento } = usePagamento();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
  });

  const onSubmit = (dados) => {
    processarPagamento(
      dados,
      () => navigate("/sucesso"),
      () => navigate("/falha")
    );
  };

  return (
    <main>
      <h1>Pagamento</h1>

      <p>Informe os dados do seu cartão para finalizar a compra.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="titular">Nome do titular</label>
          <input
            id="titular"
            type="text"
            placeholder="Nome completo"
            {...register("titular")}
            disabled={processando}
          />
          {errors.titular && <p>{errors.titular.message}</p>}
        </div>

        <div>
          <label htmlFor="cartao">Número do cartão</label>
          <input
            id="cartao"
            type="text"
            placeholder="0000 0000 0000 0000"
            maxLength="19"
            {...register("cartao")}
            disabled={processando}
          />
          {errors.cartao && <p>{errors.cartao.message}</p>}
        </div>

        <div>
          <label htmlFor="validade">Validade</label>
          <input
            id="validade"
            type="text"
            placeholder="MM/AA"
            maxLength="5"
            {...register("validade")}
            disabled={processando}
          />
          {errors.validade && <p>{errors.validade.message}</p>}
        </div>

        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            placeholder="000"
            maxLength="3"
            {...register("cvv")}
            disabled={processando}
          />
          {errors.cvv && <p>{errors.cvv.message}</p>}
        </div>

        <button type="submit" disabled={processando}>
          {processando ? "Processando compra…" : "Pagar"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => navigate("/")}
        disabled={processando}
      >
        Voltar para o carrinho
      </button>
    </main>
  );
}

export default Pagamento;
