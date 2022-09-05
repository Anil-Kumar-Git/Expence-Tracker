import React from 'react'

export default function Expense({ income, expense }) {
    // console.log(income,expence);
    return (
        <div>
            <h2>Your Balance</h2>
            <div className='balance-val'>Rs{income - expense}</div>
            <div className='row row-expense'>
                <div className='col col-income'>
                    <span>
                        <h3>Income</h3>
                        <div className='income-text'>Rs{income}</div>
                    </span>
                </div>
                <div className='col col-expense'>
                    <h3>Expense</h3>
                    <div className='expense-text'>Rs{expense}</div>
                </div>
            </div>
        </div>
    )
}
