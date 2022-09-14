import React from 'react'

const Header = () => {
    return (
        <div className="header-block">
            <div className="logo-block">
                <img width={'40px'} height={'40px'} src="img/header/logo.png" alr="logo" />
                <div>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="profile-block">
                <ul>
                    <li className="basket__icon">
                        <img width={'18px'} height={'18px'} src="/img/header/basket_icon.svg" alr="basket_icon" />
                        <p>1205 руб.</p>
                    </li>
                    <li>
                        <img width={'21px'} height={'19px'} src="/img/header/like_icon.svg" alr="like_icon" />
                    </li>
                    <li>
                        <img width={'20px'} height={'20px'} src="/img/header/profile_icon.svg" alr="profile_icon" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header