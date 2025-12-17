import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ChartView from "../components/ChartView";

const Dashboard = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-400 mt-6">Dashboard</h1>
      <ExpenseForm />
      <ExpenseList />
      <div className="flex justify-center mt-10">
        <ChartView />
      </div>
    </div>
  );
};

export default Dashboard;
