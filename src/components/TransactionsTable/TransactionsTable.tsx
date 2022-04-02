import moment from "moment";

import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

moment.locale("pt-BR");

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.amount.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>{transaction.category}</td>
                <td>{moment(transaction.createdAt).format("L LT")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
