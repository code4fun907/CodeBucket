import { useState, useEffect } from "react";

const useHeight = () => {
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    // TODO: There has got to be a better way
    const navBarHeight = window
      .getComputedStyle(document.getElementById("navheader", null))
      .getPropertyValue("height");

    setHeight(`calc((100vh - ${navBarHeight}) - 1rem)`);
  }, []);

  return height;
};

export default useHeight;
