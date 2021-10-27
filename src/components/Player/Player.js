import React from 'react';
import PlayerControls from '../PlayerControls/PlayerControls';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import styles from './Player.module.scss';

const Player = ({ currentStationIndex, setCurrentStationIndex, stations }) => {
    const audioElement = React.useRef(null);

    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
            audioElement.current.volume = 0.4
        } else {
            audioElement.current.pause();
        }
    });

    const prevRadioBtn = () => {
        setCurrentStationIndex(() => {
            let stationIndex = currentStationIndex - 1;
            if (stationIndex < 0) {
                stationIndex = stations.length - 1;
            }
            return stationIndex;
        });
    };

    const nextRadioBtn = () => {
        setCurrentStationIndex(() => {
            let stationIndex = currentStationIndex + 1;
            if (stationIndex > stations.length - 1) {
                stationIndex = 0;
            }
            return stationIndex;
        });
    };

    return (
        <div className={styles.player}>
            <h4>{isPlaying ? 'Играет сейчас' : 'Нажмите на Play'}</h4>
            <PlayerDetails currentStationIndex={currentStationIndex} stations={stations} />
            <PlayerControls
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                prevRadioBtn={prevRadioBtn}
                nextRadioBtn={nextRadioBtn}
            />
            <audio
                ref={audioElement}
                className={styles.playerRadio}
                src={stations[currentStationIndex].src}
                controls autoPlay></audio>
        </div>
    );
};

export default Player;
