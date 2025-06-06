import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Aboutページです</h1>
      <button onClick={() => navigate("/")}>Homeへ戻る</button>
    </div>
  );
};

export default AboutPage;
