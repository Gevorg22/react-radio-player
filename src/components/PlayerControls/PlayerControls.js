import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './PlayerControls.module.scss';

const PlayerControls = ({setIsPlaying, isPlaying, prevRadioBtn, nextRadioBtn}) => {
    return (
        <div className={styles.playerControls}>
            <button className={styles.prevBtn}>
                <FontAwesomeIcon icon={faBackward} onClick={prevRadioBtn} />
            </button>
            <button className={styles.playBtn} onClick={() => setIsPlaying(!isPlaying)} >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
            <button className={styles.nextBtn} onClick={nextRadioBtn} >
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    );
};

export default PlayerControls;
