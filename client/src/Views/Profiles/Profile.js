import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Estilo por defecto de react-tabs
import CreateProduct from "../FormAdmin/CreateProduct";
import CreateImages from "../FormAdmin/Images";
import EditProduct from "../FormAdmin/EditProducts";

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h1>Bienvenido</h1>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Profile</Tab>
          <Tab>Contact</Tab>
        </TabList>
        <TabPanel>
          <CreateImages />
        </TabPanel>
        <TabPanel>
          <CreateProduct />
        </TabPanel>
        <TabPanel>
          <EditProduct />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Profile;
