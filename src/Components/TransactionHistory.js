import React from 'react'

export default function TransactionHistory({ historyData, deleteValue }) {
  return (
    <div>

      <h2>Transaction History</h2>

      <ul className='transactions'>
        {historyData.map((data) =>
          <li key={data.id}>
            <div>{data.name}</div>
            <div>
              <span>Rs{data.amount}</span>
              <button onClick={() => deleteValue(data.id)}>x</button>
            </div>
          </li>
        )}
      </ul>

    </div>
  )
}
