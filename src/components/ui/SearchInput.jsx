import SearchIcon from "../../icons/SearchIcon";
import clsx from "clsx";

const SearchInput = ({ value, onChange, className, f, iClassName }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className={clsx(
          "text-white placeholder-white bg-blue-300 rounded pl-10",
          className
        )}
        placeholder={`search for ${f}...`}
        value={value}
        onChange={onChange}
      />
      <SearchIcon
        className={clsx(
          "absolute top-1/2 transform -translate-y-1/2 left-2",
          iClassName
        )}
      />
    </div>
  );
};

export default SearchInput;
