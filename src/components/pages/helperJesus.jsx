export const helperJesus = () => {




    const htmlInicial = `
    <main className="app">
          
    {/* <!-- NEW MOVEMENT --> */}
    <div className="open__form">
      <form className="form__new" onSubmit={handleSubmit}>
        <div className="form__field form__person">
          <label className="form__field__label" htmlFor="person">PAGADORA</label>
          <select className="form__field__select" name="person" id="person">
            <option value="jesus">Jesús</option>
            <option value="leila" selected>Leila</option>
          </select>
        </div>
        <div className="form__field form__description">
          <label className="form__field__label" htmlFor="description">DESCRIPCIÓN</label>
          <input className="form__field__input" type="text" name="description" id="description" />
        </div>
        <div className="form__field form__value">
          <label className="form__field__label" htmlFor="value">CANTIDAD</label>
          <input className="form__field__input" type="number" name="value" id="value" />
        </div>
        <div className="form__field form__date">
          <label className="form__field__label" htmlFor="date">FECHA</label>
          <input className="form__field__input" type="text" name="date" id="date" value={hoy}/>
        </div>
        <button className="form__button" type="submit">Añadir</button>
      </form>
    </div>
  
    {/* <!-- MOVEMENTS --> */}
    <div className="movements">
      <div className="movements__menu">
        <div className="movements__menu__person">PAGADORA</div>
        <div className="movements__menu__description">DESCRIPCIÓN</div>
        <div className="movements__menu__date">FECHA</div>
        <div className="movements__menu__value">CANTIDAD</div>
      </div>
      <div className="movements__row">
        <div className="movements__person movements__person--Leila">Leila</div>
        <div className="movements__description">Montevideo</div>
        <div className="movements__date">Yesterday</div>
        <div className="movements__value">29.50€</div>
      </div>
      <div className="movements__row">
        <div className="movements__person movements__person--Jesus">Jesús</div>
        <div className="movements__description">Dia amazon</div>
        <div className="movements__date">14/06/2023</div>
        <div className="movements__value">52.02€</div>
      </div>
      <div className="movements__row">
        <div className="movements__person movements__person--Jesus">Jesús</div>
        <div className="movements__description">Bar patata</div>
        <div className="movements__date">13/06/2023</div>
        <div className="movements__value">22.18€</div>
      </div>
    </div>
  
    {/* <!-- SUMMARY --> */}
    <div className="summary">
      <div className="summary__general">
        <p className="summary__general__label">Gastos<br />totales</p>
        <p className="summary__general__value">81.52€</p>
      </div>
      <div className="summary--leila">
        <p className="summary__label--leila">Pagado por Leila</p>
        <p className="summary__value--leila">29.50€</p>
      </div>
      <div className="summary--jesus">
        <p className="summary__label--jesus">Pagado por Jesús</p>
        <p className="summary__value--jesus">52.02€</p>
      </div>
      <div className="summary__maths">
        <p className="summary__label--jesus">Leila debe<br />a Jesús</p>
        <p className="summary__value--jesus">10€</p>
      </div>
    </div>
  
    </main>`;




      // const containerMovements = document.querySelector(".movements");
  
  // let date = new Date();
  // let day = date.getDate();
  // let month = date.getMonth() + 1;
  // let year = date.getFullYear();
  // const hoy = (month < 10) ? `${day}-0${month}-${year}` : `${day}-${month}-${year}`;

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  // }





  const accountLeisus = {
    owner: "Leila",
    pin: 1111,
    movements: {
      pagadora: ["Leila", "Jesús", "Jesús"],
      descripcion: ["Montevideo", "Dia amazon", "Bar patata"],
      fecha: ["Yesterday", "14/06/2023", "13/06/2023"],
      cantidad: [29.50, 52.02, 22.18],
    },
    currency: "EUR",
    locale: "es-ES"
  };
















  return (
    <div>helperJesus</div>
  )
}
