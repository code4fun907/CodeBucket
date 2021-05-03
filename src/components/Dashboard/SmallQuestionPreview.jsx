import Card from "../ui/Card";
import Button from "../ui/Button";

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
        <Button className="text-sm mr-2 hover:bg-white hover:text-gray-600">
          veiw
        </Button>
        <Button
          className="text-sm hover:text-white hover:bg-blue-400"
          primary={false}
        >
          edit
        </Button>
      </div>
    </Card>
  );
};

export default SmallQuestionPreview;
