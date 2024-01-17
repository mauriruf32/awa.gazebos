// Sidebar.js
import React from 'react';
import { Form, Dropdown } from 'react-bootstrap';

const Sidebar = ({ onFilterChange, onSortChange }) => {
  return (
    <div className="sidebar">
      <h3>Filtrar</h3>
      <Form>
        <Form.Group controlId="materialFilter">
          <Form.Label>Material</Form.Label>
          <Form.Control as="select" onChange={(e) => onFilterChange('material', e.target.value)}>
            <option value="">Todos</option>
            <option value="Algodón">Algodón</option>
            <option value="Cuero">Cuero</option>
            <option value="Plástico">Plástico</option>
            <option value="Metal">Metal</option>
            <option value="Lana">Lana</option>
            {/* Agrega más opciones según tus materiales */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="colorFilter">
          <Form.Label>Color</Form.Label>
          <Form.Control as="select" onChange={(e) => onFilterChange('color', e.target.value)}>
            <option value="">Todos</option>
            {/* Agrega opciones de colores según tus productos */}
          </Form.Control>
        </Form.Group>
      </Form>

      <hr />

      <h3>Ordenar</h3>
      <Dropdown onSelect={(eventKey) => onSortChange(eventKey)}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Ordenar por
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="asc">Precio de Menor a Mayor</Dropdown.Item>
          <Dropdown.Item eventKey="desc">Precio de Mayor a Menor</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sidebar;
