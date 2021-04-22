import Card from "../components/ui/Card";
import useHeight from "../hooks/useHeight";

const DashBoard = () => {
  const dashboardHeight = useHeight();

  return (
    <div className="flex gap-8" style={{ height: dashboardHeight }}>
      <div className="flex flex-col w-1/3">
        <h1 className="text-xl">Your questions</h1>
        <p className="text-gray-400 text-sm mb-4">
          veiw or edit your previous questions
        </p>
        <Card className="h-screen p-2">
          <p className="text-gray-400">...you have no previous questions</p>
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;
