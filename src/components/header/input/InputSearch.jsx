import React from 'react';
import {ReactComponent as Search} from "../../../images/content/search.svg";
import "./index.scss";

const InputSearch = ({handleClickSearchRemove}) => {
    return (
        <label className='input-search'>
        <div onClick={handleClickSearchRemove} className="input-search__remove">X</div>
        <Search className="input-search__icon"/>
        <input type="text" placeholder="Введите запрос для поиска" />
        <button>Найти</button>
      </label>
    );
};

export default InputSearch;