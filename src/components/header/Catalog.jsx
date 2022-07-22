import React from 'react';
import { catalogs } from './constants';



const Catalog = ({setActiveCatalogs}) => {
  
  return (
    <div className="catalog">
      <div className="catalog__items">
        {catalogs.map(({icon, title, subCatalogs}, index) => <div onClick={() => setActiveCatalogs(index)} className="catalog__item">
            <div className="catalog__item-images">
              {icon}
            </div>
            <div className="catalog__item-title">{title}</div>
            <div className="catalog__item-arrow">
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.857178L6 5.85718L1 10.8572" stroke="#74CCD8" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        )}

          
      </div>
    </div>
  );
};

export default Catalog;