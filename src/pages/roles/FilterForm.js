import React, { useState } from "react";
import { FormContainer } from "./styles";
import InputForm from "../../components/InputForm";
import { Button } from "antd";
const FilterForm = ({ setFilterData }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [id, setID] = useState("");
  const [rol, setRol] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <FormContainer>
      <h2>Filtrar busqueda</h2>

      <InputForm
        label="Nombre"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <InputForm
        label="Apellido"
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />
      <InputForm
        label="Identificación"
        value={id}
        onChange={(e) => setID(e.target.value)}
      />
      <InputForm
        label="Rol asociado"
        value={rol}
        select
        options={[
          "Administrador",
          "Conductor",
          "Recolector",
          "Coordinador",
          "Digitador CG-UNO",
        ]}
        onChange={(e) => setRol(e)}
      />
      <InputForm
        label="Estado"
        value={state}
        select
        options={["Activo", "Inactivo"]}
        onChange={(e) => setState(e)}
      />
      <InputForm
        label="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <InputForm
        label="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        onClick={() =>
          setFilterData({ first, last, id, rol, state, phone, email })
        }
      >
        Filtrar
      </Button>
      <Button
        onClick={() => {
          setFilterData(null);
          setFirst("");
          setLast("");
          setPhone("");
          setState("");
          setRol("");
          setID("");
        }}
      >
        Limpiar
      </Button>
    </FormContainer>
  );
};

export default FilterForm;
