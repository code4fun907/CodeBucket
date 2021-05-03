import Card from "../ui/Card";

const SmallQuestionPreview = ({ title, contentPreview }) => {
  return (
    <Card className="flex flex-col p-2 break-words">
      <h1 className="text-blue-600">{title}</h1>
      <p className="text-gray-400">
        {contentPreview
          ? contentPreview.length > 50
            ? contentPreview.slice(0, 50)
            : contentPreview
          : contentPreview}
      </p>
      <div className="mt-2">
        <button className="bg-blue-400 p-2 text-white rounded text-sm mr-2 hover:bg-white hover:text-gray-600 transition-all transition border border-blue-400">
          veiw
        </button>
        <button className="p-2 text-sm text-gray-600 border border-blue-400 rounded hover:text-white hover:bg-blue-400 transition transition-all">
          edit
        </button>
      </div>
    </Card>
  );
};

export default SmallQuestionPreview;
