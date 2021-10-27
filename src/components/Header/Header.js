import React from 'react';
import styles from './Header.module.scss';

const Header = ({ setRadioMenuOpen }) => {
    return (
        <div className={styles.header}>
            <div>
                <div>
                    <a href="https://github.com/Gevorg22" target="_blank">
                        <img width={35} height={35} src="img/github.svg" alt="github" />
                    </a>
                    <a href="https://www.instagram.com/gevorg.kara/" target="_blank">
                        <img width={35} height={35} src="img/instagram.svg" alt="instagram" />
                    </a>
                </div>
            </div>
            <div className={styles.menuBtn} onClick={() => setRadioMenuOpen(true)}>
                <img width={35} height={35} src="img/menu.svg" alt="menu" />
            </div>
        </div>
    );
};

export default Header;
