import { useState } from "react";
import Modal from "react-modal";

import { Deshboard } from "./components/Deshboard/Deshboard";
import { Header } from "./components/Header/header";
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [modalIsOpen, setModalIsOpenIsOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setModalIsOpenIsOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setModalIsOpenIsOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Deshboard />
      <NewTransactionModal
        isOpen={modalIsOpen}
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
