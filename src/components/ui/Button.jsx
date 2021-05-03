const Button = ({ className = "", primary = true, children, ...props }) => {
  if (primary)
    return (
      <button
        className={`bg-blue-400 border border-blue-400 p-2 rounded text-white cursor-pointer transition transition-all ${className}`}
        {...props}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`bg-white border border-blue-400 p-2 rounded text-gray-500 cursor-pointer transition transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
