import QuestionsList from "../components/QuestionsList";
import SortFilterOptions from "../components/SortFilterOptions";
import { useSearch } from "../contexts/Search";
import { useEffect, useState } from "react";

const Home = () => {
  const { filteredQuestions } = useSearch();

  return (
    <div className="flex">
      <QuestionsList questions={filteredQuestions} />
      <SortFilterOptions />
    </div>
  );
};

export default Home;
