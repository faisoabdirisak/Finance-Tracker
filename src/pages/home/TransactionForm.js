import React from "react";
import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });

    setName('');
    setAmount('');
    // console.log(name, amount, uid)
  };

  //reset the form
  // useEffect(() => {
  //   if (response.success) {
  //     setName('');
  //     setAmount('');
  //   }
  // }, [response.success]);

  return (
    <div>
      <>
        <h3>Add a Transaction</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Transaction name:</span>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            <span>Amount ($):</span>
            <input
              type="number"
              required
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </label>
          <button>Add Transaction</button>
        </form>
      </>
    </div>
  );
}
