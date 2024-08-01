// src/components/ProductListing.js
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Product Title 1",
    description: "Some description about the product goes here.",
    imageUrl: "https://via.placeholder.com/150",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    title: "Product Title 2",
    description: "Some description about the product goes here.",
    imageUrl: "https://via.placeholder.com/150",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    title: "Product Title 3",
    description: "Some description about the product goes here.",
    imageUrl: "https://via.placeholder.com/150",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    title: "Product Title 4",
    description: "Some description about the product goes here.",
    imageUrl: "https://via.placeholder.com/150",
    tags: ["tag1", "tag2", "tag3"],
  },
  // Add more products as needed
];

const ProductListing = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
            tags={product.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
