import data from './data.json'
import React from 'react';
import css from "./Statistic.module.css"


const Statistics = ({title, stats}) =>{
    stats={data}
    return(
        <div>
            <section className={css.statistics}>
            <h3 className={css.title}>{title}</h3>
            <ul className={css.stat_list}>
                {data.map((item, i)=>(
                    <li key={i} className={css.item}>
                        <div className={css.label}>{item.label} </div>
                        <div className={css.percentage}>{item.percentage}%</div> </li>
                )
                )}

            </ul>

            </section>
        </div>


    )   
}



export default Statistics;