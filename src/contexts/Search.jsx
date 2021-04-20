import Fuse from "fuse.js";
import { createContext, useContext, useState, useEffect } from "react";
import { useQuestions } from "./Questions";

export const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchContextProvider = ({ children }) => {
  const { questions } = useQuestions();
  const [filteredQuestions, setFilterdQuestions] = useState([]);
  const [questionsQuery, setQuestionsQuery] = useState("");

  useEffect(() => {
    const options = {
      keys: ["title"],
    };

    const fuse = new Fuse(questions, options);
    const newQuestions = fuse.search(questionsQuery);

    if (newQuestions.length > 0) {
      setFilterdQuestions(newQuestions);
    } else {
      setFilterdQuestions(questions);
    }
  }, [questionsQuery, questions]);

  const values = {
    filteredQuestions,
    questionsQuery,
    setQuestionsQuery,
  };

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};
