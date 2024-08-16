import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Estilo por defecto de react-tabs
import CreateProduct from "../FormAdmin/CreateProduct";
import CreateImages from "../FormAdmin/Images";
import EditProduct from "../FormAdmin/EditProducts";
import EditUsers from "../FormAdmin/EditUsers";
import ShowProducts from "../FormAdmin/ShowProducts";
import "./Perfile.css"
import ShowUsers from "../FormAdmin/ShowUsers";

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h1>Bienvenido</h1>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Crear Imagenes</Tab>
          <Tab>Crear Productos</Tab>
          <Tab>Ver Productos</Tab>
          <Tab>Ver Usuarios</Tab>
          <Tab>Editar Productos</Tab>
          <Tab>Editar Usuarios</Tab>
        </TabList>
        <TabPanel>
          <CreateImages />
        </TabPanel>
        <TabPanel>
          <CreateProduct />
        </TabPanel>
        <TabPanel>
          <ShowProducts />
        </TabPanel>
        <TabPanel>
          <ShowUsers />
        </TabPanel>
                <TabPanel >
          <EditProduct className="edit-prod" />
        </TabPanel>
        <TabPanel >
          <EditUsers className="edit-prod" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Profile;
