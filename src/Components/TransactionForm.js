import React, { useState } from 'react'
import { UniqueId } from './ReuseComp'

export default function TransactionForm({ newAddDataForm }) {

    const [name, setName] = useState("")
    const [amount, setAmount] = useState()

    const pickData = (type, e) => {
        e.preventDefault();
        const Data = {
            id: UniqueId(),
            name: name,
            amount: parseInt(amount),
            type: type
        }

        newAddDataForm(Data)
        setName("")
        setAmount("")
    }

    return (
        <div>

            <h2>Add New Transactions</h2>

            <form className='transaction-form'>
                <label>
                    Name
                    <div>
                        <input type="text" name={"name"} value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                </label>
                <label>
                    Amount
                    <div>
                        <input type="number" name={"amount"} value={amount}
                            onChange={(e) => setAmount(e.target.value)} />
                    </div>
                </label>
                <div>
                    <button className='income-btn' onClick={(e) => pickData('income', e)}>Add Income</button>
                    <button className='expense-btn' onClick={(e) => pickData('expense', e)}>Add Expense</button>
                </div>
            </form>

        </div>
    )
}
