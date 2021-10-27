import React from 'react';
import Header from '../components/Header/Header';
import Player from '../components/Player/Player';
import RadioMenu from '../components/RadioMenu/RadioMenu';

import styles from './App.module.scss';

function App() {
    const [stations] = React.useState([
        {
            title: 'Retro FM',
            number: '88.3 FM',
            src: 'http://europaplus.hostingradio.ru:8014/retro320.mp3',
            img_src: 'img/stations/retro-fm.jpg',
        },
        {
            title: 'Radio Hermitage',
            number: '90.1 FM',
            src: 'https://hermitage.hostingradio.ru/hermitage128.mp3',
            img_src: 'img/stations/hermitage.png',
        },
        {
            title: 'Dorognoe Radio',
            number: '96 FM',
            src: 'http://dorognoe.hostingradio.ru:8000/radio',
            img_src: 'img/stations/roadradio.png',
        },
        {
            title: 'Radio Monte Carlo',
            number: '102.1 FM',
            src: 'https://montecarlo.hostingradio.ru/montecarlo96.aacp',
            img_src: 'img/stations/monte-carlo.jpg',
        },
        {
            title: 'Radio Maximum',
            number: '102.8 FM',
            src: 'https://maximum.hostingradio.ru/maximum96.aacp',
            img_src: 'img/stations/maximum.jpg',
        },
        {
            title: 'Radio Shanson',
            number: '103 FM',
            src: 'http://chanson.hostingradio.ru:8041/chanson256.mp3',
            img_src: 'img/stations/shanson.jpg',
        },
        {
            title: 'DFM Radio',
            number: '103.4 FM',
            src: 'https://dfm.hostingradio.ru/dfm96.aacp',
            img_src: 'img/stations/dfm.jpg',
        },
        {
            title: 'Russkoe Radio',
            number: '105.7 FM',
            src: 'https://rusradio.hostingradio.ru/rusradio96.aacp',
            img_src: 'img/stations/rus-radio.jpeg',
        },
        {
            title: 'Europa Plus',
            number: '106.2 FM',
            src: 'http://ep128.hostingradio.ru:8030/ep128',
            img_src: 'img/stations/europaplus.jpg',
        },
    ]);

    const [currentStationIndex, setCurrentStationIndex] = React.useState(4);
    const [radioMenuOpen, setRadioMenuOpen] = React.useState(false);

    const closeRadioMenu = () => {
        setRadioMenuOpen(false);
    };

    return (
        <div className={styles.app}>
            <RadioMenu
                stations={stations}
                setCurrentStationIndex={setCurrentStationIndex}
                radioMenuOpen={radioMenuOpen}
                closeRadioMenu={closeRadioMenu}
            />
            <Header setRadioMenuOpen={setRadioMenuOpen} />
            <Player
                currentStationIndex={currentStationIndex}
                setCurrentStationIndex={setCurrentStationIndex}
                stations={stations}
            />
        </div>
    );
}

export default App;
