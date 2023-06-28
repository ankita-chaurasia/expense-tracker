import "./NewExpenseCss/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(prevState => !prevState);
  }

  return (
    <div className="new-expense">
    {showForm ? <ExpenseForm onAddExpenseData={props.onAddExpenseData} onShowForm={showFormHandler} /> : <button onClick={showFormHandler}>Add Expense</button>}
    </div>
  );
};

export default NewExpense;
