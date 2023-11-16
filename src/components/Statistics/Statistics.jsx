import data from './data.json'
import React from 'react';


const Statistics = ({title, stats}) =>{
    stats={data}
    // console.log(stats)
    return(
        <div>
            <section >
            <h2>UPLOAD STATS</h2>
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