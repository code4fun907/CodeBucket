import QuestionsList from "../components/QuestionsList";
import Card from "../components/ui/Card";
import { useQuestions } from "../contexts/Questions";
import { useEffect, useState } from "react";

const Home = () => {
  const { questions } = useQuestions();

  return (
    <div className="flex">
      <QuestionsList questions={questions} />
      <Card className="hidden w-1/3 h-full p-4 ml-8 bg-white md:block">
        Side Controlls
      </Card>
    </div>
  );
};

export default Home;
