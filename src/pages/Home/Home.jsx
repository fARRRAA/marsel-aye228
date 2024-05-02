import { useState } from 'react';
import './Home.css';
import { carsstore } from '../../../src/data/Cars/CarsData.js';
import { Link, NavLink } from 'react-router-dom';
export function Home(){
    const [index, setIndex] = useState(0);

        function handleNext(){
            if(index < 3){
                setIndex(prevIndex => prevIndex + 1);
            }
        }

        function handleBack(){
            if(index > 0){
                setIndex(prevIndex => prevIndex - 1);
            }
        }

    return(
        <section className='main_page'>
            <div className="container">
                <div className="main__inner">
                    <div className="main__slider">
                        <button className='main__slider-btn' onClick={handleBack}>‹</button>
                            <div className="banner__inner" style={{backgroundImage: `url(${carsstore[index].banner})`}} >
                                <h1 className='banner__car__title'>{carsstore[index].name}</h1>
                                <NavLink to={`/catalog/${carsstore[index].id}`} className="banner__nav-link">Подробнее</NavLink>  
                            </div>
                        <button className='main__slider-btn' onClick={handleNext}>›</button> 
                    </div>
                    <div className="main__about">
                        <h1 className="main__title">О BWM</h1>
                        <p className='main__text'>В 2021 году группа BMW выпустила 2,52 млн автомобилей (включая совместные предприятия, на которые пришлось 650 тыс. автомобилей); основным брендом является BMW (2,21 млн штук), далее следуют MINI (302 тыс.) и Rolls-Royce (6 тыс.). Мотоциклов за тот же год было произведено 194 тысячи.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
