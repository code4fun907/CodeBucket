import SmallQuestionPreview from "./SmallQuestionPreview";
import Card from "../ui/Card";
import TextInfo from "../ui/TextInfo";
import uuid from "react-uuid";
import { useQuestions } from "../../contexts/Questions";

const YourQuestions = () => {
  const questions = [];

  const renderQuestions = () => {
    if (questions.length === 0)
      return (
        <div>
          <p className="text-sm text-gray-400">Ask a question</p>
          <button className="bg-blue-400 p-2 rounded text-white text-xs mt-2 hover:bg-blue-500 transition-all cursor-pointer">
            Ask a question
          </button>
        </div>
      );

    return questions.map((question) => (
      <div key={uuid()} className="mb-4">
        <SmallQuestionPreview
          title={question.title}
          contentPreview={question.contentPreview}
        />
      </div>
    ));
  };

  return (
    <div className="h-full overflow-scroll scrollbar scrollbar-none">
      <h1 className="text-xl">Your questions</h1>
      <TextInfo className="mb-4">veiw or edit your previous questions</TextInfo>
      <Card className="min-h-full p-2 bg-white">{renderQuestions()}</Card>
    </div>
  );
};

export default YourQuestions;
