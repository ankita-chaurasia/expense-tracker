import { useState } from "react";
import "./NewExpenseCss/ExpenseForm.css";

//Method 1 - Managing different states for each input/data field

const ExpenseForm = (props) => {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (evt) => {
    setTitle(evt.target.value);
  };

  const amountChangeHandler = (evt) => {
    setAmount(evt.target.value);
  };

  const dateChangeHandler = (evt) => {
    setDate(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    const newExpenseData = {
      id: Math.floor(Math.random() * 1000).toString(),
        title: title,
        amount: +amount,
        date: new Date(date)
    }
    setTitle("");
    setAmount("");
    setDate("");
    props.onAddExpenseData(newExpenseData);
    props.onShowForm(false);
  }

  return (
    
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      
      <div className="new-expense__actions">
        <button type="button" onClick={props.onShowForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//Method 2 - Managing single state for all inputs/data fields + current state

// const ExpenseForm = () => {
//   const [newExpense, setNewExpense] = useState({
//     title: "",
//     amount: "",
//     date: "",
//   });

//   const titleChangeHandler = (evt) => {
//     setNewExpense({
//       ...newExpense,
//       title: evt.target.value,
//     });
//   };

//   const amountChangeHandler = (evt) => {
//     setNewExpense({
//       ...newExpense,
//       amount: evt.target.value,
//     });
//   };

//   const dateChangeHandler = (evt) => {
//     setNewExpense({
//       ...newExpense,
//       date: evt.target.value,
//     });
//   };

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label htmlFor="">Title</label>
//           <input
//             type="text"
//             onChange={titleChangeHandler}
//             value={newExpense.title}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label htmlFor="">Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//             value={newExpense.amount}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label htmlFor="">Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2023-12-31"
//             onChange={dateChangeHandler}
//             value={newExpense.date}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

//Method 3 - Managing single state for all inputs/data fields + previous state

// const ExpenseForm = () => {
//   const [newExpense, setNewExpense] = useState({
//     title: "",
//     amount: "",
//     date: "",
//   });

//   const titleChangeHandler = (evt) => {
//     setNewExpense((prevState) => {
//       return { ...prevState, title: evt.target.value };
//     });
//   };

//   const amountChangeHandler = (evt) => {
//     setNewExpense((prevState) => {
//       return { ...prevState, amount: evt.target.value };
//     });
//   };

//   const dateChangeHandler = (evt) => {
//     setNewExpense((prevState) => {
//       return { ...prevState, date: evt.target.value };
//     });
//   };

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label htmlFor="">Title</label>
//           <input
//             type="text"
//             onChange={titleChangeHandler}
//             value={newExpense.title}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label htmlFor="">Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//             value={newExpense.amount}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label htmlFor="">Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2023-12-31"
//             onChange={dateChangeHandler}
//             value={newExpense.date}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

//Method 1 & 3 are most efficient, Method 2 is error-prone
