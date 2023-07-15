import { useProductData } from "../../context/CardContext";
import { useFilter } from "../../context/sortContext";

export const Sidebar = () => {
  const { productState } = useProductData();
  const { filterState, filterDispatch } = useFilter();

  return (
    <div>
      <div>
        <h1>Filter</h1>
        <button
          onClick={() => {
            filterDispatch({
              type: "clear_filters",
            });
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="filterContainer">
        <h1>Category</h1>
        <div className="Category-filter">
          {productState?.categoryData.map(({ categoryName }) => (
            <div key={categoryName}>
              <label>
                <input
                  type="checkbox"
                  checked={filterState?.filterCategory.includes(categoryName)}
                  onChange={() =>
                    filterDispatch({
                      type: "FILTER_CATEGORY",
                      payload: categoryName,
                    })
                  }
                />
                {categoryName}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-rating">
          <h4>Rating</h4>
          <input
            type="range"
            className="sidebar"
            min="0"
            max="5"
            value={filterState.rating}
            list="numbers"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_RATE",
                payload: e.target.value,
              })
            }
          />
          <datalist id="numbers">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
          </datalist>
        </div>
        <div className="filter-Price">
          <h4>Sort by Price</h4>
          <label>
            <input
              type="radio"
              name="sort"
              checked={filterState.sort === "feature"}
              onChange={() =>
                filterDispatch({
                  type: "FILTER_PRICE",
                  payload: "feature",
                })
              }
            />
            Feature
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              checked={filterState.sort === "high"}
              onChange={() =>
                filterDispatch({
                  type: "FILTER_PRICE",
                  payload: "high",
                })
              }
            />
            High To Low
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              checked={filterState.sort === "low"}
              onChange={() =>
                filterDispatch({
                  type: "FILTER_PRICE",
                  payload: "low",
                })
              }
            />
            Low To High
          </label>
        </div>
      </div>
    </div>
  );
};
