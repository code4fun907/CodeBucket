import clsx from "clsx";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx("border border-gray-200 shadow rounded-md", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
