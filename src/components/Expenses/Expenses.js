import ExpenseItem from "./ExpenseItem";
import "./ExpenseCss/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2023");
  const expenseItems = props.expenseItems;
  const filteredExpenseItems = expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  const filterChangeHandler = (filterYear) => {
    setFilterYear(filterYear);
  };

  return (
    <Card class="expenses">
      <ExpenseFilter onFilterChange={filterChangeHandler} value={filterYear} />
      <ExpenseChart expenses={filteredExpenseItems} />

      {filteredExpenseItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
