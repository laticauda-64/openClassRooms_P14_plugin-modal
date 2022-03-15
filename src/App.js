import React, { useState } from "react";
import Modal from "./lib/components/Modal";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show Modal</button>
      <Modal title="My Modal" onValidate={() => setShow(false)} show={show}>
        This is modal body
      </Modal>
    </div>
  );
}
