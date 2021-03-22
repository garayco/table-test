import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "antd";
import { getRandomUsers } from "../../api/randomUser";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import FilterForm from "./FilterForm";
import ModalForm from "./modalForm";
const columns = [
  {
    title: "Nombres",
    dataIndex: "name",
    render: ({ first }) => first,
  },
  {
    title: "Apellidos",
    dataIndex: "name",
    render: ({ last }) => last,
  },
  {
    title: "Identificacion (C.C)",
    dataIndex: "id",
    render: ({ value }) => (value ? value : "No aplica"),
  },

  {
    title: "Rol asociado",
    dataIndex: "rol",
  },
  {
    title: "Estado",
    dataIndex: "state",
  },
  {
    title: "Telefono",
    dataIndex: "phone",
  },
  {
    title: "Correo electrónico",
    dataIndex: "email",
  },
  {
    title: "Acción",
    render: () => (
      <div style={{ display: "flex" }}>
        <EditOutlined onClick={() => {}} style={{ margin: "0 0.5em" }} />
        <DeleteOutlined onClick={() => {}} style={{ margin: " 0 0.5em" }} />
      </div>
    ),
  },
];

const Roles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const _filterData = (data, filters) => {};

  useEffect(() => {
    let auxData = [...data];
    if (filterData) {
      for (var key in filterData) {
        if (filterData[key] !== "") {
          let aux = auxData.filter((user) => {
            user.first = user.name.first;
            user.last = user.name.last;
            if (key === "state")
              return user[key].toLowerCase() === filterData[key].toLowerCase();

            return user[key]
              .toLowerCase()
              .includes(filterData[key].toLowerCase());
          });
          auxData = aux;
        }
      }
      setDataSource(auxData);
    } else {
      setDataSource(data);
    }
  }, [filterData]);

  const randomRol = () => {
    const roles = [
      "Administrador",
      "Conductor",
      "Recolector",
      "Coordinador",
      "Digitador CG-UNO",
    ];
    return roles[Math.floor(Math.random() * roles.length)];
  };

  const randomState = () => {
    const state = ["Activo", "Inactivo"];
    return state[Math.floor(Math.random() * state.length)];
  };

  useEffect(() => {
    setIsLoading(true);
    getRandomUsers().then((res) => {
      let data = res.results;
      data.forEach((user) => {
        user.rol = randomRol();
        user.state = randomState();
      });
      setData(res.results);
      setDataSource(res.results);
      setIsLoading(false);
    });
  }, []);

  const onChange = (pagination) => {
    setCurrentPage(pagination.current);
  };

  const onSubmitForm = (newUser) => {
    setData([...data, newUser]);
    setDataSource([...data, newUser]);

    setShowModal(false);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <h2>Usuarios existentes</h2>
        <Button
          style={{ position: "absolute", right: "3em" }}
          onClick={() => setShowModal(true)}
        >
          Crear
        </Button>
      </div>

      <div style={{ display: "flex" }}>
        <Table
          columns={columns}
          dataSource={dataSource}
          onChange={onChange}
          pagination={{
            current: currentPage,
            pageSize: 8,
            responsive: true,
          }}
          rowKey={({ login }) => login.uuid}
          scroll={{ x: true }}
          loading={isLoading}
          style={{ width: "80%" }}
        />
        <FilterForm setFilterData={setFilterData} />
        <ModalForm
          showModal={showModal}
          setShowModal={setShowModal}
          onSubmit={onSubmitForm}
        />
      </div>
    </>
  );
};

Roles.propTypes = {};

export default Roles;
