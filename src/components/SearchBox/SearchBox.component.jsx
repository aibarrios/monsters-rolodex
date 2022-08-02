const SearchBox = ({ className, placeholder, searchField, onSearchChange }) => {
  return (
    <div>
      <input
        className={className}
        placeholder={placeholder}
        type='search'
        value={searchField}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
