import * as React from "react";
import Card from "../ui/Card";

const OAuthButton = ({ icon, text, ...props }) => {
  return (
    <Card
      className="w-full p-2 flex items-center hover:shadow-sm transition-all cursor-pointer"
      {...props}
    >
      {icon}
      <p className="flex-1 text-center">{text}</p>
      {/** TODO: this is to hacky lol **/}
      <div style={{ width: "24px", height: "24px" }}></div>
    </Card>
  );
};

export default OAuthButton;
