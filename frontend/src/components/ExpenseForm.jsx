import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [form, setForm] = useState({ title: "", amount: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.category) return;
    addExpense(form);
    setForm({ title: "", amount: "", category: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg mt-8 flex flex-col gap-4 max-w-md mx-auto border border-gray-700"
    >
      <h2 className="text-xl font-semibold text-center text-blue-400">
        Add New Expense
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="p-3 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="p-3 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Category</option>
        <option value="Personal">Personal</option>
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Travel">Travel</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all duration-300"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
