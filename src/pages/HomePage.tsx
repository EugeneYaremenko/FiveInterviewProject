import TextLoop from "react-text-loop";

export const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <div className="homePageSlogan">
        Goal{" "}
        <TextLoop>
          <span>Set</span>
          <span>Write</span>
          <span>Complete</span>
        </TextLoop>{" "}
        Goal
      </div>
      <div className="homePageDescription">
        <blockquote>
          <p>Nothing is particularly hard if you divide it into small jobs.</p>—{" "}
          <cite>Henry Ford</cite>
        </blockquote>
      </div>
    </div>
  );
};
