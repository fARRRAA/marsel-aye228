import './Catalog.css';
import { CatalogCard } from './CatalogCard/CatalogCard.jsx';
import { carsstore } from '../../../src/data/Cars/CarsData.js';
export function Catalog(){
    {
        
    }
    return(
        <section className='catalog__page'>
            <div className="container">
                <h1 className="main__title">ВЫБЕРИТЕ СВОЙ BMW</h1>
            </div>
            <div className="catalog__content-nav-wrap">
                <div className="container">
                    <div className="catalog__content-nav-wrap__inner">
                    <button className='catalog__content-nav-link BMW-I_link'>BMW i</button>
                    <button className='catalog__content-nav-link BMW-X_link'>X</button>
                    <button className='catalog__content-nav-link BMW-M_link'>M</button>
                    <button className='catalog__content-nav-link BMW-8_link'>8</button>
                    <button className='catalog__content-nav-link BMW-7_link'>7</button>
                    <button className='catalog__content-nav-link BMW-6_link'>6</button>
                    <button className='catalog__content-nav-link BMW-5_link'>5</button>
                    <button className='catalog__content-nav-link BMW-4_link'>4</button>
                    <button className='catalog__content-nav-link BMW-3_link'>3</button>
                    <button className='catalog__content-nav-link BMW-2_link'>2</button>
                    <button className='catalog__content-nav-link BMW-Z4_link'>Z4</button>
                    <button className='catalog__content-nav-linkk'>НЕ ЗАДАН ФУНКЦИОНАЛ</button>
                    </div>
                </div>
            </div>
            <div className="catalog">
                <div className="container">
                    <div className="catalog__inner">
                        <div className="catalog__inner-section-BMW-I catalog__inner-section">
                            <h2 className='catalog__title'>BMW i</h2>
                            <div className="catalog__cards">
                                { 
                                   carsstore.filter(category => category.category == 'BMW i').map(item => <CatalogCard id={item.id} name={item.name} type={item.type} img={item.img} price={item.price} series={item.series} novelty={item.novelty}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="container">
                    <div className="catalog__inner">
                        <div className="catalog__inner-section-BMW-X catalog__inner-section">
                            <h2 className='catalog__title'>BMW X</h2>
                            <div className="catalog__cards">
                                { 
                                   carsstore.filter(category => category.category == 'BMW X').map(item => <CatalogCard id={item.id} name={item.name} type={item.type} img={item.img} price={item.price} series={item.series} novelty={item.novelty}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="container">
                    <div className="catalog__inner">
                        <div className="catalog__inner-section-BMW-M catalog__inner-section">
                            <h2 className='catalog__title'>BMW M</h2>
                            <div className="catalog__cards">
                                { 
                                   carsstore.filter(category => category.category == 'BMW M').map(item => <CatalogCard id={item.id} name={item.name} type={item.type} img={item.img} price={item.price} series={item.series} novelty={item.novelty}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
