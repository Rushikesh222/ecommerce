import { useNavigate } from "react-router-dom";
import { backgroundImage, logo } from "../../assets";
import { CategoryCard } from "../../component/category-card/categoryCard";
import { useProductData } from "../../context/CardContext";

export function Landing() {
  const { productState } = useProductData();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full flex-col items-center pb-3">
        <div className="my-3 w-[min(1200px,calc(100%-1.5rem))] overflow-hidden rounded-3xl border border-[#bfbfbf] shadow-[10px_10px_10px_#aaaaaa] md:my-5 md:w-[min(1200px,calc(100%-2.5rem))]">
          <img
            className="block h-[clamp(180px,48vw,600px)] w-full rounded-3xl object-cover"
            src={backgroundImage}
            alt="bg"
          />
        </div>
        {productState?.isCategoryLoading ? (
          <h1 className="py-8 text-xl">some thing went worng</h1>
        ) : (
          <CategoryCard />
        )}
      </div>
      <footer className="bg-[#aaaaaa] px-4 pb-2 pt-4 text-xs text-black md:px-16">
        <div className="flex flex-col items-center justify-around gap-6 md:flex-row md:items-start">
          <div className="w-full max-w-xs text-center md:w-48 md:text-left">
            <img
              className="mx-auto mb-2 w-16 rounded-[30%] bg-white px-4 py-2 md:ml-12"
              src={logo}
              alt=""
            />
            <p>Specializes in providing high-quality</p>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-6 text-base sm:w-auto sm:flex-row sm:items-start sm:gap-16">
            <div className="cursor-pointer text-center sm:text-left">
              <h3 className="mb-2 text-sm font-bold">COMPANY</h3>
              <p className="my-1" onClick={() => navigate("/")}>
                About
              </p>
              <p className="my-1" onClick={() => navigate("/")}>
                Terms of Use
              </p>
              <p className="my-1" onClick={() => navigate("/")}>
                Policies
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="mb-2 text-sm font-bold">CONTACTS </h3>
              <a
                className="my-1 text-black transition-transform hover:scale-110 hover:text-gray-700"
                href="https://github.com/Rushikesh222"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github fa-lg"></i> Github
              </a>
              <a
                className="my-1 text-black transition-transform hover:scale-110 hover:text-gray-700"
                href="https://twitter.com/Rushike82547286"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter fa-lg"></i> Twitter
              </a>
              <a
                className="my-1 text-black transition-transform hover:scale-110 hover:text-gray-700"
                href="https://www.linkedin.com/in/rushikesh-shirsat-42459a229/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin fa-lg"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-black/20" />
        <p className="pb-2 text-center text-black">
          Copyright <i className="fa-regular fa-copyright"></i>2023 PERFUMA. All
          rights reserved.
        </p>
      </footer>
    </>
  );
}
