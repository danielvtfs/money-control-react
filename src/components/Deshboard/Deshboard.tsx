import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";
import { Container } from "./styles";

export function Deshboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
