// ProductView.js (donde se muestran los productos)
import React, { useState, useEffect } from 'react';
import Card from "../Card/Card";
import Sidebar from './SideBar';

const ProductView = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filters, setFilters] = useState({ material: '', color: '' });
  const [sortOrder, setSortOrder] = useState(null);

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  // Aplicar filtros y ordenamiento
  useEffect(() => {
    if (products && filters && sortOrder) {
        let filtered = products;

    if (filters.material) {
      filtered = filtered.filter(product => product.material === filters.material);
    }

    if (filters.color) {
      filtered = filtered.filter(product => product.color === filters.color);
    }

    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
}
  }, [products, filters, sortOrder]);

  return (
    <div className="product-view">
      <Sidebar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductView;
