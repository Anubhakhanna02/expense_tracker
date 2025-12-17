import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { CSVLink } from "react-csv";

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(ExpenseContext);
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="bg-gray-800 p-6 mt-8 rounded-2xl shadow-lg max-w-2xl mx-auto text-white border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg text-blue-400 font-semibold">
          Total Spent: ₹{total}
        </h3>
        <CSVLink
          data={expenses}
          filename="expenses.csv"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-medium"
        >
          Export CSV
        </CSVLink>
      </div>

      <ul className="space-y-3">
        {expenses.map((e) => (
          <li
            key={e._id}
            className="flex justify-between items-center bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition"
          >
            <div>
              <p className="font-medium">{e.title}</p>
              <p className="text-sm text-gray-300">
                ₹{e.amount} — {e.category}
              </p>
            </div>
            <button
              onClick={() => deleteExpense(e._id)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
