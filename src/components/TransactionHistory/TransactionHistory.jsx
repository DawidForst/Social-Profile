import React from "react";
// import transactionData from "./transactions.json"


const TransactionHistory = ({transacions}) => {

    return (
        <div>
            <table>
                <thead>
                {transacions.map((transacion,i)=>{

                    return(
                        <tr key={i}>
                            <th>id: {transacion.id}</th>
                            <th>type: {transacion.type}</th>
                            <th>amount: {transacion.amount}</th>
                            <th>currency: {transacion.currency}</th>
                            

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
