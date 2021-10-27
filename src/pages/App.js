import React from 'react';
import Header from '../components/Header/Header';
import Player from '../components/Player/Player';
import RadioMenu from '../components/RadioMenu/RadioMenu';

import styles from './App.module.scss';

function App() {
    const [stations] = React.useState([
        {
            id: 1,
            title: 'Retro FM',
            number: '88.3 FM',
            src: 'http://europaplus.hostingradio.ru:8014/retro320.mp3',
            img_src: 'img/stations/retro-fm.jpg',
        },
        {
            id: 2,
            title: 'Radio Hermitage',
            number: '90.1 FM',
            src: 'https://hermitage.hostingradio.ru/hermitage128.mp3',
            img_src: 'img/stations/hermitage.png',
        },
        {
            id: 3,
            title: 'Dorognoe Radio',
            number: '96 FM',
            src: 'http://dorognoe.hostingradio.ru:8000/radio',
            img_src: 'img/stations/roadradio.png',
        },
        {
            id: 4,
            title: 'Radio Record',
            number: '98.4 FM',
            src: 'http://radio-srv1.11one.ru/record192k.mp3',
            img_src: 'img/stations/record-radio.jpg',
        },
        {
            id: 5,
            title: 'Radio Record Russian Mix',
            number: '98.4 FM',
            src: 'https://radiorecord.hostingradio.ru/rus96.aacp',
            img_src: 'img/stations/record-radio-rus-mix.jpg',
        },
        {
            id: 6,
            title: 'СуперДискотека 90-х',
            number: '98.4 FM',
            src: 'https://radiorecord.hostingradio.ru/sd9096.aacp',
            img_src: 'img/stations/superdisco-90.jpg',
        },
        {
            id: 7,
            title: 'Radio Monte Carlo',
            number: '102.1 FM',
            src: 'https://montecarlo.hostingradio.ru/montecarlo96.aacp',
            img_src: 'img/stations/monte-carlo.jpg',
        },
        {
            id: 8,
            title: 'Radio Maximum',
            number: '102.8 FM',
            src: 'https://maximum.hostingradio.ru/maximum96.aacp',
            img_src: 'img/stations/maximum.jpg',
        },
        {
            id: 9,
            title: 'Radio Shanson',
            number: '103 FM',
            src: 'http://chanson.hostingradio.ru:8041/chanson256.mp3',
            img_src: 'img/stations/shanson.jpg',
        },
        {
            id: 10,
            title: 'DFM Radio',
            number: '103.4 FM',
            src: 'https://dfm.hostingradio.ru/dfm96.aacp',
            img_src: 'img/stations/dfm.jpg',
        },
        {
            id: 11,
            title: 'Radio ENERGY',
            number: '104.2 FM',
            src: 'http://ic6.101.ru:8000/stream/air/aac/64/99',
            img_src: 'img/stations/energy.png',
        },
        {
            id: 12,
            title: 'Russkoe Radio',
            number: '105.7 FM',
            src: 'https://rusradio.hostingradio.ru/rusradio96.aacp',
            img_src: 'img/stations/rus-radio.jpeg',
        },
        {
            id: 13,
            title: 'Europa Plus',
            number: '106.2 FM',
            src: 'http://ep128.hostingradio.ru:8030/ep128',
            img_src: 'img/stations/europaplus.jpg',
        },
    ]);

    const [currentStationIndex, setCurrentStationIndex] = React.useState(3);
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
