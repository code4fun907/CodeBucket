import { useState, useEffect } from "react";

const useMediaQuery = (mediaQuery) => {
  const [match, setMatch] = useState(!!window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setMatch(!!mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);

    documentChangeHandler();
    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [mediaQuery]);

  return match;
};

export default useMediaQuery;
