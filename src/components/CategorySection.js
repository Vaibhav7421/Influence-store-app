// CategorySection.js
import React from 'react';
import './CategorySection.css';

const CategorySection = () => {
  return (
    <div className="category-section">
      <div className="categories-header">
        <h2>Categories</h2>
        <button className="view-all-button">View All</button>
      </div>
      <div className="categories-list">
        {Array(24).fill('Category').map((category, index) => (
          <a key={index} href="#" className="category-link">
            › {category}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
