import { useContext, useEffect } from "react";
import { ContenidoContext } from "../../context/ContenidoContext";
import { AñadirMov } from "../AñadirMov";
import { MenuMov } from "../MenuMov";


export const Home = () => {

  const formMov = document.querySelector(".form__mov");

  const { movements, setMovements, content, setContent } = useContext(ContenidoContext);

  // const movements = [
  //   {pagadora: "Leila", descripcion: "Montevideo", fecha: "Yesterday", cantidad: 29.50},
  //   {pagadora: "Jesus", descripcion: "Dia amazon", fecha: "14/06/2023", cantidad: 52.02},
  //   {pagadora: "Jesus", descripcion: "Bar patata", fecha: "13/06/2023", cantidad: 22.18},
  // ];

  useEffect(() => {
    const newContent = (
      movements.map((mov,index) => (
        <div key={index} className="movements__row">
          <div className={`movements__person movements__person--${mov.person}`}>
            {mov.person}
          </div>
          <div className="movements__description">{mov.description}</div>
          <div className="movements__date">{mov.date}</div>
          <div className="movements__value">{mov.value}€</div>
        </div>
      ))
    );
  setMovements(movements);
  setContent(newContent);
  }, [movements]);
  



  return (
    <>
      <button
        className="openForm__button"
        onClick={() => {formMov.classList.toggle("open__form")}}
      >
        Añadir gasto
      </button>
      <AñadirMov  />
      <MenuMov newContent={content} />
      <div>{content}</div>
    </>
  )
}