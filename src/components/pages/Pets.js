import { Link } from "react-router-dom";
import { pets } from "../../data";

export const Pets = () => {  

  return (
    <>
    
      <div style={{ textAlign: "center" }}>
        <h2>Pets</h2>
        {pets.map((e) => (
          <p key={e.id}>
            <Link to={`${e.id}`}>{e.name}</Link>
          </p>
        ))}
      </div>
    </>
  );
};
