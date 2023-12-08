import React from "react";
import css from "./TransactionHistory.module.css"



const TransactionHistory = ({transacions}) => {
    const headers = ['TYPE', 'AMOUNT', 'CURRENCY'];

    return (
        <div>
            <table className={css.Table}>
                <thead>
                    <tr>
                      {headers.map((header, index) => (
                      <th key={index}>{header}</th>
                     ))}

                    </tr>
                {transacions.map((transacion,i)=>{

                    return(
                        <tr key={i}>
                            <td> {transacion.type}</td>
                            <td> {transacion.amount}</td>
                            <td> {transacion.currency}</td>
                            

                        </tr>
                    )


                }         
                            )
                }
                </thead>
            </table>

        </div>


    )}


    export default TransactionHistory;
