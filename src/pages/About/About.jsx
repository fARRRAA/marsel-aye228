import './About.css'
import {facts} from './About.js'
export function About(){
    return(
        <div className="about">
            <div className="container">
                <div className="about__inner">
                    <h1 className="about__title">Интересные факты</h1>
                         {facts.map((fact) => (
                             <div key={fact.num} className="aboutcard">
                                 <p className='aboutcard__num'>{fact.num}</p>
                                 <div className="aboutcard__textall">
                                     <h1 className='aboutcard__title'>{fact.title}</h1>
                                     <p className="aboutcard__text">{fact.text}</p>
                                 </div>
                             </div>
                         ))}
                </div>
            </div>
        </div>
    );
}
