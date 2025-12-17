import Expense from "../models/Expense.js";

// Get all expenses of logged-in user
export const getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user._id });
  res.json(expenses);
};

// Add a new expense
export const addExpense = async (req, res) => {
  const { title, amount, category, date } = req.body;
  const expense = await Expense.create({
    user: req.user._id,
    title,
    amount,
    category,
    date,
  });
  res.status(201).json(expense);
};

// Delete expense
export const deleteExpense = async (req, res) => {
  const expense = await Expense.findById(req.params.id);
  if (!expense) return res.status(404).json({ message: "Expense not found" });
  if (expense.user.toString() !== req.user._id.toString())
    return res.status(401).json({ message: "Not authorized" });

  await expense.deleteOne();
  res.json({ message: "Expense removed" });
};
