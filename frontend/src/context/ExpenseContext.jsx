import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const fetchExpenses = async () => {
    if (!token) return;
    const { data } = await axios.get("http://localhost:5000/api/expenses", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setExpenses(data);
  };

  const addExpense = async (expense) => {
    const { data } = await axios.post("http://localhost:5000/api/expenses", expense, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setExpenses([...expenses, data]);
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setExpenses(expenses.filter((e) => e._id !== id));
  };

  useEffect(() => {
    fetchExpenses();
  }, [token]);

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, setToken }}>
      {children}
    </ExpenseContext.Provider>
  );
};
