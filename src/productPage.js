// ProductPage.js
import React, { useState } from "react";
import VirtualProduct from "./virtualProduct"; // Import your virtual product component
import { PRODUCTS as productData } from "./product";

const productsPerPage = 4; // Number of products per page

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate index range for products on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Slice product data based on the current page
  const productsToDisplay = productData.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(productData.length / productsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <h1>Product Display Page</h1>
      <div className="product-list">
        {productsToDisplay.map((product) => (
          <VirtualProduct key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(productData.length / productsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
