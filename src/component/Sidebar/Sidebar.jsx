import { useProductData } from "../../context/CardContext";
import { useFilter } from "../../context/sortContext";

export const Sidebar = () => {
  const { productState } = useProductData();
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className="flex h-auto w-full flex-col px-3 pb-6 pt-14 font-sans text-brand lg:ml-6 lg:mt-8 lg:h-full lg:w-[250px] lg:rounded-3xl lg:border-2 lg:border-gray-500 lg:px-0 lg:pb-4 lg:pt-0 xl:ml-12">
      <div className="flex flex-row items-center justify-between p-2.5">
        <h3 className="text-lg font-semibold">Filter</h3>
        <button
          className="mt-2 h-10 w-[100px] rounded-3xl border-none bg-brand text-[13px] font-bold text-white hover:font-extrabold hover:shadow-[5px_5px_5px_#5a4fef]"
          onClick={() => {
            filterDispatch({
              type: "clear_filters",
            });
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="m-1 flex flex-col items-start justify-start p-2.5">
        <h2 className="mb-2 text-xl font-semibold">Category</h2>
        <div className="flex flex-col gap-2">
          {productState?.categoryData.map(({ categoryName }) => (
            <div key={categoryName}>
              <label className="flex items-center gap-2 capitalize">
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
        <div className="m-1 mt-4 w-full">
          <h4 className="mb-2 font-semibold">Rating</h4>
          <input
            type="range"
            className="w-full max-w-[200px] accent-[#5a4fef]"
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
          <div className="flex max-w-[200px] justify-between px-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
        <div className="m-1 mt-2 flex flex-col items-start justify-start p-2.5">
          <h4 className="mb-2 font-semibold">Sort by Price</h4>
          <label className="flex items-center gap-2">
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
          <label className="flex items-center gap-2">
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
          <label className="flex items-center gap-2">
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
