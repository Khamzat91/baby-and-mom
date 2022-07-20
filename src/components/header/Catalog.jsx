import React from 'react';
import pusher from "../../images/content/pusher.svg";
import autoChair from "../../images/content/auto-chair.svg";
import babyBootle from "../../images/content/baby-bootle.svg";
import arrowGreen from "../../images/content/arrow-green.svg";

const catalogs = [
  {
    icon: pusher,
    title: 'Коляски',
    subCatalogs: [{
      title: 'Куклы и аксессуары',
      subCatalogsTitle: ['LOL куклы и аксессуары', 'Babyborn куклы и аксессуаы',
        'Barbie куклы и аксессуаы', 'Мягкие куклы', 'Аксессуары для кукол (Коляски, дома, одежда и т.д)']
    }]
  },
  {
    icon: autoChair,
    title: 'Автокресла',
    subCatalogs: [{
      title: 'Игры для дома и дачи',
      subCatalogsTitle: ['Игровые домики', 'Детские палатки',
        'Горки и лазалки', 'Песочницы', 'Батуты', 'Бассейны', 'Детские качели']
    }]
  },
  {
    icon: babyBootle,
    title: 'Детская комната',
    subCatalogs: [{
      title: 'Машинки, тракторы, самолеты, дороги, роботы',
      subCatalogsTitle: ['Радиоуправляемые игрушки', 'Машинки, самолеты, лодки, модели',
        'Тяжелая техника и тракторы', 'Роботы', 'Поезда и железные дороги', 'Трассы и гаражи']
    }]
  },

  {
    icon: pusher,
    title: 'Коляски',
    subCatalogs: [{
      title: 'Куклы и аксессуары',
      subCatalogsTitle: ['LOL куклы и аксессуары', 'Babyborn куклы и аксессуаы',
        'Barbie куклы и аксессуаы', 'Мягкие куклы', 'Аксессуары для кукол (Коляски, дома, одежда и т.д)']
    }]
  },
  {
    icon: autoChair,
    title: 'Автокресла',
    subCatalogs: [{
      title: 'Игры для дома и дачи',
      subCatalogsTitle: ['Игровые домики', 'Детские палатки',
        'Горки и лазалки', 'Песочницы', 'Батуты', 'Бассейны', 'Детские качели']
    }]
  },
  {
    icon: babyBootle,
    title: 'Детская комната',
    subCatalogs: [{
      title: 'Машинки, тракторы, самолеты, дороги, роботы',
      subCatalogsTitle: ['Радиоуправляемые игрушки', 'Машинки, самолеты, лодки, модели',
        'Тяжелая техника и тракторы', 'Роботы', 'Поезда и железные дороги', 'Трассы и гаражи']
    }]
  },
]

const Catalog = () => {
  const [idMouseMove, setIdMouseMove] = React.useState(null);

  return (
    <div className="catalog">
      <div className="catalog__items">
        {catalogs.map(({icon, title, subCatalogs}) => <div className="catalog__item">
          <div className="catalog__item-images">
            <img src={icon} alt=""/>
          </div>
          <div className="catalog__item-title">{title}</div>
            <img src={arrowGreen} alt=""/>
          {idMouseMove && subCatalogs.map(({title, subCatalogsTitle}) =>  <ul className="catalog__item-subcatalogs">
            <li>{title}</li>
            {subCatalogsTitle.map((obj) => <li>{obj}</li>)}
            </ul>
          )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;