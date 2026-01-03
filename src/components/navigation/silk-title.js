import React from 'react';
import '../../style/silk-title.scss';

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
