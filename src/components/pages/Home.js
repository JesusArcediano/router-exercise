import { useEffect, useState } from "react";
import { MenuMov } from "../MenuMov";
import { useDispatch, useSelector } from "react-redux";
import { startNewMovement } from "../../store/counts/thunks";


export const Home = () => {
  
  const [gastosJesus, setGastosJesus] = useState(0);
  const [gastosLeila, setGastosLeila] = useState(0);

  const dispatch = useDispatch();
  const { movements } = useSelector(state => state.counts);
  
  const ToggleFormMov = () => {
    const formMov = document.querySelector('.form__mov');
    formMov.classList.toggle('open__form');
  }
   
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const hoy = (month < 10) ? `${day}-0${month}-${year}` : `${day}-${month}-${year}`;

    const [inputValue, setInputValue] = useState({person:'', description:'', value:'', date:hoy})

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectElement = document.querySelector('#person');
        const personSelected = selectElement.options[selectElement.selectedIndex].textContent;
        const newMovement = { person: personSelected, description: e.target.description.value, value: e.target.value.value, date: e.target.date.value };
        dispatch(startNewMovement(newMovement));
        return movements
    }

    const onInputChange = (e) => {
        setInputValue(
            {
                ...inputValue,
                [e.target.id]: e.target.value
            }
        )
    }

    const formularioHTML = 
    <div className="form__mov open__form">
      <form className="form__new" onSubmit={handleSubmit}>
        <div className="form__field form__person">
          <label className="form__field__label" htmlFor="person">PAGADORA</label>
          <select className="form__field__select" id="person">
            <option value="jesus">Jesús</option>
            <option value="leila" selected>Leila</option>
          </select>
        </div>
        <div className="form__field form__description">
          <label className="form__field__label" htmlFor="description">DESCRIPCIÓN</label>
          <input className="form__field__input" type="text" id="description" value={inputValue.description} onChange={onInputChange} />
        </div>
        <div className="form__field form__value">
          <label className="form__field__label" htmlFor="value">CANTIDAD</label>
          <input className="form__field__input" type="number" id="value" value={inputValue.value} onChange={onInputChange} />
        </div>
        <div className="form__field form__date">
          <label className="form__field__label" htmlFor="date">FECHA</label>
          <input className="form__field__input" type="text" id="date" value={inputValue.date} onChange={onInputChange}/>
        </div>
        <button className="form__button" type="submit">Añadir</button>
      </form>
    </div>;



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

    // const summary = movements.reduce((acc, mov) => {}, 0);

    useEffect(() => {
      movements.forEach((mov) => {
        if (mov.person === 'Jesús') {
          const value = parseFloat(mov.value);
          const total = parseFloat(0);
          const totalJesus = total + value;
          setGastosJesus(totalJesus);
        }
        else {
          const value = parseFloat(mov.value);
          const total = parseFloat(0);
          const totalLeila = total + value;
          setGastosLeila(totalLeila);
        }
      })
    }, [movements])
    


    // movements.forEach((mov) => {
    //   if (mov.person === 'Jesus') {
    //     const value = parseFloat(mov.value);
    //     const total = parseFloat(0);
    //     const totalJesus = total + value;
    //     console.log(totalJesus);
    //   }
    // });


    const summary = <div className="summary">
    <div className="summary__general">
      <p className="summary__general__label">Gastos<br />totales</p>
      <p className="summary__general__value">81.52€</p>
    </div>
    <div className="summary--leila">
      <p className="summary__label--leila">Pagado por Leila</p>
      <p className="summary__value--leila">{gastosLeila} €</p>
    </div>
    <div className="summary--jesus">
      <p className="summary__label--jesus">Pagado por Jesús</p>
      <p className="summary__value--jesus">{gastosJesus} €</p>
    </div>
    <div className="summary__maths">
      <p className="summary__label--jesus">Leila debe<br />a Jesús</p>
      <p className="summary__value--jesus">10€</p>
    </div>
  </div>
  



  return (
    <>
      <button
        className="openForm__button"
        onClick={ToggleFormMov}
      >
        Añadir gasto
      </button>
        {formularioHTML}
      <MenuMov  />
      {newContent}
      {summary}
    </>
  )
}