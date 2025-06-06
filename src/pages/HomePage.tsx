import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Homeページです</h1>
      <button onClick={() => navigate("/about")}>Aboutへ移動</button>
    </div>
  );
};

export default HomePage;
