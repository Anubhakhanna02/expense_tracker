import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const COLORS = ["#A28EFF", "#00C49F", "#FFBB28", "#FF8042", "#d62728"];

const ChartView = () => {
  const { expenses } = useContext(ExpenseContext);

  const categoryData = Object.values(
    expenses.reduce((acc, exp) => {
      acc[exp.category] = acc[exp.category] || { category: exp.category, amount: 0 };
      acc[exp.category].amount += exp.amount;
      return acc;
    }, {})
  );

  return (
    <PieChart width={400} height={300}>
      <Pie data={categoryData} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={100}>
        {categoryData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ChartView;
