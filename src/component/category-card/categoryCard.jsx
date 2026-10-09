import { useNavigate } from "react-router-dom";
import { useProductData } from "../../context/CardContext";
import { useFilter } from "../../context/sortContext";

export const CategoryCard = () => {
  const { productState } = useProductData();
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-center text-lg md:text-xl">
      {productState?.categoryData?.length !== 0 &&
        productState?.categoryData?.map((category) => (
          <div
            key={category.categoryName}
            className="m-4 flex h-auto w-[min(330px,calc(100%-2rem))] cursor-pointer flex-col items-center justify-center rounded-[35px] border border-[#bfbfbf] px-3 py-4 shadow-[5px_5px_5px_#aaaaaa] transition duration-200 hover:-translate-y-1 hover:font-bold hover:shadow-[16px_16px_16px_#aaaaaa] md:m-8 md:h-[270px] md:w-[330px]"
            onClick={() => {
              filterDispatch({ type: "clear_filter" });
              filterDispatch({
                type: "FILTER_CATEGORY",
                payload: category.categoryName,
              });
              navigate("/products");
            }}
          >
            <img
              className="h-auto max-h-[200px] w-full max-w-[250px] object-contain transition-transform hover:scale-105 md:h-[200px] md:w-[250px]"
              src={category.image}
              alt={category.categoryName}
            />
            <p className="mt-2 text-center">{category.categoryName}</p>
          </div>
        ))}
    </div>
  );
};
