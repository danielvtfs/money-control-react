import { Deshboard } from "./components/Deshboard/Deshboard";
import { Header } from "./components/Header/header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Deshboard />
      <GlobalStyle />
    </>
  );
}
