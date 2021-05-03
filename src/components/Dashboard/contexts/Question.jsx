import { useState, createContext, useContext } from "react";

/**
  This context will be used only to provide the dashboard component
  access to the current question the user is asking and the current
  question the user is editing
**/
const QuestionContext = createContext();

export const useQuestion = () => useContext(QuestionContext);

export const QuestionContextProvider = ({ children }) => {
  const [currentAskingQuestionTitle, setCurrentAskingQuestionTitle] = useState(
    ""
  );

  const [currentAskingQuestionBody, setCurrentAskingQuestionBody] = useState(
    ""
  );

  const [currentAskingQuestionTags, setCurrentAskingQuestionTags] = useState(
    []
  );

  console.log("QustionContext: ", currentAskingQuestionTitle);
  console.log("QustionContext: ", currentAskingQuestionBody);
  console.log("QustionContext: ", currentAskingQuestionTags);

  const values = {
    currentAskingQuestionTitle,
    setCurrentAskingQuestionTitle,
    currentAskingQuestionBody,
    setCurrentAskingQuestionBody,
    currentAskingQuestionTags,
    setCurrentAskingQuestionTags,
  };

  return (
    <QuestionContext.Provider value={values}>
      {children}
    </QuestionContext.Provider>
  );
};
