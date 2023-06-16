import { useContext, useState } from "react";
import { ContenidoContext } from "../context/ContenidoContext";
import { useDispatch } from "react-redux";
import { setSaving } from "../store/counts/countsSlice";

export const AñadirMov = () => {

    const { movements, setMovements } = useContext(ContenidoContext);
    const dispatch = useDispatch();
   
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
        dispatch(setSaving(inputValue.value));
        
        const newMovement = { person: personSelected, description: e.target.description.value, value: e.target.value.value, date: e.target.date.value };
        
        console.log(newMovement)
        setMovements([...movements, newMovement]);
        console.log(movements)
    }

    const onInputChange = (e) => {
        setInputValue(
            {
                ...inputValue,
                [e.target.id]: e.target.value
            }
        )
    }

    const formularioHTML = <div className="form__mov open__form">
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

  return (
    <div>
        {formularioHTML}
    </div>
    
    
  )
}
