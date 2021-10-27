import React from 'react';
import styles from './PlayerDetails.module.scss';

const PlayerDetails = ({currentStationIndex, stations}) => {
    return (
        <div className={styles.playerDetails}>
            <div className={styles.playerDetailsImg}>
                <img src={stations[currentStationIndex].img_src} alt={stations[currentStationIndex].title} />
            </div>
            <h3 className={styles.playerDetailsTitle}>{stations[currentStationIndex].title}</h3>
            <h4 className={styles.playerDetailsNumber}>{stations[currentStationIndex].number}</h4>
        </div>
    );
};

export default PlayerDetails;
