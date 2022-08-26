const FilteredArticles = ({ setOrder, setSortBy }) => {
  const handleSortBy = (event) => {
    // handling onchange - event.target.value is giving the value on change
    event.preventDefault();
    setSortBy(event.target.value);
  };

  const handleOrderBy = (event) => {
    // handling onchange - event.target.value is giving the value on change
    event.preventDefault();
    setOrder(event.target.value);
  };

  return (
    <div className="sort-by-container">
      <select
        className="sort-by"
        name="sort_by"
        id="sort_by"
        onChange={handleSortBy}
      >
        Sort by:
        <option value="sortby">sort by:</option>
        <option value="author">author</option>
        <option value="title">title</option>
        <option value="created_at">created</option>
        <option value="votes">votes</option>
        <option value="comment_count">comments</option>
      </select>
      <select
        className="order-by"
        name="order_by"
        id="order_by"
        onChange={handleOrderBy}
      >
        Order by:
        <option value="ASC">+</option>
        <option value="DESC">-</option>
      </select>
    </div>
  );
};

export default FilteredArticles;
