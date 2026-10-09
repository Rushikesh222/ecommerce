import { useState } from "react";
import { useProductData } from "../../context/CardContext";
import { useFilter } from "../../context/sortContext";
import { ProductCard } from "../../component/product-Card/productCard";
import { Sidebar } from "../../component/Sidebar/Sidebar";

export const Product = () => {
  const { productState } = useProductData();
  const { filteredData } = useFilter();
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-stretch lg:flex-row lg:items-start">
      <button
        type="button"
        className="btn-brand mx-4 mt-4 lg:hidden"
        onClick={() => setFiltersOpen(true)}
        aria-label="Open filters"
      >
        <i className="fa-solid fa-filter"></i>
        <span>Filters</span>
      </button>
      {filtersOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/45 lg:hidden"
          onClick={() => setFiltersOpen(false)}
        />
      )}
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-[min(320px,88vw)] overflow-y-auto bg-white shadow-[4px_0_18px_rgba(0,0,0,0.18)] transition-transform duration-300 lg:static lg:z-auto lg:h-auto lg:w-auto lg:shrink-0 lg:overflow-visible lg:bg-transparent lg:shadow-none ${
          filtersOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-[2] flex h-9 w-9 items-center justify-center rounded-full bg-brand text-base text-white lg:hidden"
          onClick={() => setFiltersOpen(false)}
          aria-label="Close filters"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <Sidebar />
      </div>
      {productState.isProductLoading ? (
        <h1 className="w-full py-10 text-center text-xl">loading</h1>
      ) : (
        <div className="grid w-full min-w-0 flex-1 grid-cols-1 justify-items-center gap-2 px-3 py-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredData.length === 0 ? (
            <h1 className="col-span-full py-10 text-center text-xl">
              no Product
            </h1>
          ) : (
            filteredData.map((products) => {
              return (
                <ProductCard key={products._id} data={products} />
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
