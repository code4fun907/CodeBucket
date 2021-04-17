import clsx from "clsx";

const SearchInput = ({ value, onChange, className, f }) => {
  return (
    <input
      type="text"
      className={clsx(
        "text-white placeholder-white bg-blue-300 rounded",
        className
      )}
      placeholder={`search for ${f}...`}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
