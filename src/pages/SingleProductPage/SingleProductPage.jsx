import './SingleProductPage.css';
import { carsstore } from '../../../src/data/Cars/CarsData.js';
import { useParams } from 'react-router-dom';
export function SingleProductPage(){
    const { id } = useParams();
    const car = carsstore.find(car => car.id == id);
    function checkseries(){
        if(car.series == "innovation"){
            return innovation_icon;
        }
        else if(car.series == "motorsport"){
            return motorsport_icon;
        }
        else{
            return "";
        }
    }
    function checktype(){
        if((car.type) == 'electric'){
            return "Полностью электрический";
        }
        else if((car.type) == 'petrol'){
            return "Бензин";
        }
        else if((car.type) == 'diesel'){
            return "Дизель";
        }
        else if((car.type) == 'petrolanddiesel'){
            return "Бензин • Дизель";
        }
        else if((car.type) == 'hybrid'){
            return "Подключаемый гибрид";
        }
    }
    return(
        <section className='single_product_page'>
           <div className="container">
            <div className="single_product_page_inner">
                <div className="single_product_page-banner" style={{backgroundImage: `url(${car.banner})`}}>
                    <div className="container-single_product">
                        <div className="single_product_page-title__block">
                            <h1 className='single_product_page-title'>{car.name}</h1>  
                            {/* <img className='car__series-img' src={checkseries(car)} alt="" /> */}
                        </div>
                        <div className="single_product_page-info">
                            <div className="single_product_page-info-price">
                                <h2 className="single_product_page-info-price-text">{car.price} ₽</h2>
                                <p>Стоимость</p>
                            </div>
                            <div className="single_product_page-info-km">
                                <h2 className="single_product_page-info-km-text">До {car.banner_info_km} км*</h2>
                                <p>Запас хода</p>
                            </div>
                            <div className="single_product_page-info-type">
                                <h2 className="single_product_page-info-type-text">{checktype(carsstore)}</h2>
                                <p>Двигатель</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </section>        
    );
}
