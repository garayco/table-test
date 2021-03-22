import React, { useState, useEffect } from "react";
import InputForm from "../../../components/InputForm";
import { Modal, Button } from "antd";
const ModalForm = ({ showModal, setShowModal, onSubmit }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [id, setID] = useState("");
  const [rol, setRol] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Modal footer={false} title="Agregar nuevo usuario" visible={showModal}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ first, last, id, rol, state, phone, email });
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", padding: "0 1em" }}>
            <InputForm
              label="Nombre"
              value={first}
              required
              onChange={(e) => setFirst(e.target.value)}
            />
            <InputForm
              label="Apellido"
              value={last}
              required
              onChange={(e) => setLast(e.target.value)}
            />
            <InputForm
              label="Identificación"
              value={id}
              required
              onChange={(e) => setID(e.target.value)}
            />
            <InputForm
              label="Rol asociado"
              value={rol}
              required
              onChange={(e) => setRol(e.target.value)}
            />
          </div>
          <div style={{ width: "50%", padding: "0 1em" }}>
            <InputForm
              label="Estado"
              value={state}
              required
              onChange={(e) => setState(e.target.value)}
            />
            <InputForm
              label="Teléfono"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <InputForm
              label="Correo"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ background: "green", color: "white", margin: "0 0.5em" }}
            htmlType="submit"
          >
            Aceptar
          </Button>
          <Button
            style={{ borderColor: "green", color: "black", margin: "0 0.5em" }}
            onClick={() => setShowModal(false)}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalForm;
