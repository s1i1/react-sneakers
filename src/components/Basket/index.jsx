import React from 'react';
import BasketCard from "./BasketCard";
import BasketTotal from "./BasketTotal";
import styles from './Basket.module.scss';

const Basket = ({ onClickOverlay, items = [] }) => {
    return (
        <div>
            <div
                className={styles.basket__overlay}
                onClick={onClickOverlay}
            ></div>
            <div className={styles.basket__container}>
                <h3 className={styles.basket__title}>Корзина</h3>
                <div className={styles.basket__cards}>
                    {items.map((item, index) => {
                        return (
                            <BasketCard
                                key={index}
                                product={item.product}
                                desc={item.desc}
                                price={item.price}
                            />)
                    })}
                </div>
                <BasketTotal productData={items} />
                <div className={styles.basket__button}>
                    <div className={styles.basket__button_text}>
                        Оформить заказ
                    </div>
                    <div className={styles.basket__button_image}>
                        <img src="img/main/basket/arrow.svg" alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket