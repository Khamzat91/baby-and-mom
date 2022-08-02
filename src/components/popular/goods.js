
import card1 from "../../images/card1.jpg";
import card2 from "../../images/card2.jpg";
import card3 from "../../images/card3.jpg";
import card4 from "../../images/card4.jpg";
import card5 from "../../images/card5.jpg";
import card6 from "../../images/card6.jpg";
import {ReactComponent as Delivery} from "../../images/content/delivery.svg";
import {ReactComponent as Rating} from "../../images/content/rating.svg";
import {ReactComponent as HeartClick} from "../../images/content/heartClick.svg";
import { ReactComponent as Append } from '../../images/content/append.svg';
import ellipse from "../../images/ellipse.png";

export const goodsCards = [
    {
        linkSaleImg: ellipse,
        cardImg: card1,
        heart: <HeartClick/>,
        price: '100 €',
        priseSale: '250 €',
        description: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        colors: ['pink', 'black'],
        delivery: <Delivery/>,
        subTitle: 'Доставка: 1-2 дня',
        rating: <Rating/>,
        testimonial: '15 отзывов'
    },
    {
        linkSaleImg: ellipse,
        cardImg: card2,
        heart: <HeartClick/>,
        price: '100 €',
        priseSale: '250 €',
        description: 'Safety 1st Timba Natural',
        colors: ['pink', 'black', 'lightGreen', 'brown', 'Blue'],
        append: <Append/>,
        delivery: <Delivery/>,
        subTitle: 'Доставка: 1-2 дня',
        rating: <Rating/>,
        testimonial: '15 отзывов'
    },
    {
        linkSaleImg: ellipse,
        cardImg: card3,
        heart: <HeartClick/>,
        price: '1200 €',
        description: 'Футболка DJ Dutchjeans E38091-45 Anthracite 16...',
        delivery: <Delivery/>,
        subTitle: 'Доставка: 1-2 дня',
        rating: <Rating/>,
        testimonial: '15 отзывов'
    },
    {
        linkSaleImg: ellipse,
        cardImg: card4,
        heart: <HeartClick/>,
        price: '100 €',
        priseSale: '250 €',
        description: 'Safety 1st Timba Natural',
        colors: ['pink', 'black', 'lightGreen', 'brown', 'Blue'],
        append: <Append/>,
        delivery: <Delivery/>,
        subTitle: 'Доставка: 1-2 дня',
        rating: <Rating/>,
        testimonial: '15 отзывов'
    },
    {
        linkSaleImg: ellipse,
        cardImg: card5,
        heart: <HeartClick/>,
        price: '1000 €',
        priseSale: '250 €',
        description: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        colors: ['pink', 'black', 'lightGreen', 'brown', 'Blue'],
        append: <Append/>,
        delivery: <Delivery/>,
        subTitle: 'Доставка: 1-2 дня',
        rating: <Rating/>,
        testimonial: '15 отзывов'
    },
    {
        linkSaleImg: ellipse,
        cardImg: card6,
        heart: <HeartClick/>,
        price: '100 €',
        priseSale: '250 €',
        description: 'Футболка DJ Dutchjeans E38091-45 Anthracite 16...',
        colors: ['pink', 'black', 'lightGreen', 'brown'],
        delivery: <Delivery/>,
        subTitle: 'Доставка: 1-2 дня',
        rating: <Rating/>,
        testimonial: '15 отзывов'
    }
]

