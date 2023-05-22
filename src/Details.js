import { useNavigate, useParams } from "react-router-dom";
import { pets } from "./data";
const Details = () => {
//   const { id } = useParams();
  const { id } = useParams();
  const navigate = useNavigate();
  const onePet = pets.find((e) => e.id === Number(id));
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>{onePet.name}</h1>
        <h2>{onePet.description}</h2>
        <img src={onePet.image} alt={onePet.name} width={100} />
      </div>
      <button onClick={() => navigate(-1)}>← Back</button>
    </>
 );
};
export default Details;