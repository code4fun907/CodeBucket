const Input = ({ type, text, ...props }) => (
  <>
    <label className="text-gray-600">{text}</label>
    <input
      className="p-2 border border-gray-200 rounded shadow"
      type={type}
      placeholder={text.toLowerCase()}
      {...props}
    />
  </>
);

export default Input;
