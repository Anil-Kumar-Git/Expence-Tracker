import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { UniqueId } from './ReuseComp'

export default function TransactionForm({ newAddDataForm }) {

    const [name, setName] = useState("")
    const [amount, setAmount] = useState()
    const [error, setError] = useState('')

    const pickData = (type, e) => {
        e.preventDefault();
        if(name && amount){
        const Data = {
            id: UniqueId(),
            name: name,
            amount: parseInt(amount),
            type: type
        }
        newAddDataForm(Data)
        setName("")
        setAmount("")
        setError('')
    }else{
        setError('please fill all inputs')
    }
    }

    return (
        <div>
            <Card border='secondary' style={{minHeight:303}}>
        <Card.Header style={{height:80}} >
                <h3>Add New Transactions</h3>
                </Card.Header>
                <Card.Body>
                    <span style={{color:'red'}}>{error && error}</span>
                <form className='transaction-form'>
                <label>
                    Name
                    <div>
                        <input type="text" name={"name"} value={name}
                            onChange={(e) => setName(e.target.value)} onBlur={()=>{setError('')}} />
                    </div>
                </label>
                <label>
                    Amount
                    <div>
                        <input type="number" name={"amount"} value={amount}
                            onChange={(e) => setAmount(e.target.value)} onBlur={()=>{setError('')}}/>
                    </div>
                </label>
                <div>
                    <button className='income-btn' onClick={(e) => pickData('income', e)}>Add Income</button>
                    <button className='expense-btn' onClick={(e) => pickData('expense', e)}>Add Expense</button>
                </div>
            </form>
                </Card.Body>
            </Card>
        </div>
    )
}
