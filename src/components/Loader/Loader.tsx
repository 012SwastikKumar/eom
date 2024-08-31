import React from 'react';
import './Loader.css'; // We'll create this CSS file next

const Loader: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>We are finding PERFECT match for you...</p>
    </div>
  );
};

export default Loader;
