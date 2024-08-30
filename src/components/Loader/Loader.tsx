import React from 'react';
import './Loader.css'; // We'll create this CSS file next

const Loader: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>This may take time depending upon your GPU</p>
    </div>
  );
};

export default Loader;
