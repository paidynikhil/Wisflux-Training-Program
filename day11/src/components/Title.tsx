import { FC } from "react";
import "../styles/Title.style.css";

const Title: FC = (): JSX.Element => {
  return (
    <>
      <div className="titleContainer">
        <div className="mainTitle">Git Peek Clone</div>
        <div className="subTitle">Check out GitHub users!🫣 </div>
      </div>
    </>
  );
};

export default Title;
