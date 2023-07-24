import { useNavigate } from "react-router-dom";
import { backgroundImage, logo } from "../../assets";
import { CategoryCard } from "../../component/category-card/categoryCard";
import { useProductData } from "../../context/CardContext";
import "./Landing.css";

export function Landing() {
  const { productState } = useProductData();
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="Cart">
        <div className="image-card">
          <img className="bg-image" src={backgroundImage} alt="bg" />
        </div>
        {productState?.isCategoryLoading ? (
          <h1>some thing went worng</h1>
        ) : (
          <CategoryCard />
        )}
      </div>
      <footer>
        <div className="footer-div">
          <div className="logo-footer">
            <img src={logo} alt="" />
            <p>Specializes in providing high-quality</p>
          </div>
          <div className="contacts">
            <div className="companies">
              <h3>COMPANY</h3>
              <p onClick={() => navigate("/")}>About</p>
              <p onClick={() => navigate("/")}>Terms of Use</p>
              <p onClick={() => navigate("/")}>Policies</p>
            </div>

            <div className="socials">
              <h3>CONTACTS: </h3>
              <a
                href="https://github.com/sweta1308"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github fa-lg"></i> Github
              </a>
              <a
                href="https://twitter.com/AgarwallaSweta"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-twitter fa-lg"></i> Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/sweta-agarwalla-45aa2324a/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin fa-lg"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p>
          Copyright <i class="fa-regular fa-copyright"></i>2023 PERFUMA. All
          rights reserved.
        </p>
      </footer>
    </>
  );
}
