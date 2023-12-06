import data from './data.json'
import React from 'react';
import css from "./Statistic.module.css"


const Statistics = ({title, stats}) =>{
    stats={data}
    return(
        <div>
            <section >
            <h2>{title}</h2>
            <ul>
                {data.map((item, i)=>(
                    <li key={i}>{item.label} : {item.percentage} </li>
                )
                )}

            </ul>

            </section>
        </div>


    )
}



export default Statistics;