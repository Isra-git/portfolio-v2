import React from 'react';

const SilkTitle = ({ title }) => {
  return (
    <div className="left-wrapper">
      <hr className="linea-estilizada" />
      <div className="left-silk">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default SilkTitle;
