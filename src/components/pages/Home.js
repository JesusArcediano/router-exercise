import { useContext, useEffect } from "react";
import { ContenidoContext } from "../../context/ContenidoContext";
import { AñadirMov } from "../AñadirMov";


export const Home = () => {

  const { movements, setMovements, content, setContent } = useContext(ContenidoContext);

  // const movements = [
  //   {pagadora: "Leila", descripcion: "Montevideo", fecha: "Yesterday", cantidad: 29.50},
  //   {pagadora: "Jesus", descripcion: "Dia amazon", fecha: "14/06/2023", cantidad: 52.02},
  //   {pagadora: "Jesus", descripcion: "Bar patata", fecha: "13/06/2023", cantidad: 22.18},
  // ];
  

  useEffect(() => {
    const newContent = 
    <div className="movements">
      <div className="movements__menu">
          <div className="movements__menu__person">PAGADORA</div>
          <div className="movements__menu__description">DESCRIPCIÓN</div>
          <div className="movements__menu__date">FECHA</div>
          <div className="movements__menu__value">CANTIDAD</div>
      </div>
      {movements.map((mov,index) => (
        <div key={index} className="movements__row">
          <div className={`movements__person movements__person--${mov.person}`}>
            {mov.person}
          </div>
          <div className="movements__description">{mov.description}</div>
          <div className="movements__date">{mov.date}</div>
          <div className="movements__value">{mov.value}€</div>
        </div>
      ))}
    </div>;

  setMovements(movements);
  setContent(newContent);
  }, [movements]);
  

  



  return (
    <>
      <AñadirMov />
      <div>{content}</div>
    </>
  )
}