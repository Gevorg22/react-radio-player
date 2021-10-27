import React from 'react';
import styles from './RadioMenu.module.scss';

const RadioMenu = ({ stations, setCurrentStationIndex, radioMenuOpen, closeRadioMenu }) => {
    let onClickItem = (index) => {
        setCurrentStationIndex(index);
        closeRadioMenu();
    };

    return (
        <div className={`${styles.overlay} ${radioMenuOpen ? styles.overlayVisible : ''}`}>
            <div className={styles.radioMenu}>
                <div className={styles.closeMenu}>
                    <span onClick={closeRadioMenu} className={styles.closeMenuBtn}>
                        <img src="img/close.svg" alt="close" />
                    </span>
                </div>
                <div>
                    <ul>
                        {stations.map((item, index) => {
                            return (
                                <li key={item.number} onClick={() => onClickItem(index)}>
                                    {item.title}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RadioMenu;
