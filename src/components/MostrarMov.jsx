import { useSelector } from "react-redux"

export const MostrarMov = () => {

  const { movements } = useSelector(state => state.counts);

  return (
    <div className="movements__row">
        <div className={`movements__person movements__person--${mov.person}`}>
        {mov.person}
        </div>
        <div className="movements__description">{mov.description}</div>
        <div className="movements__date">{mov.date}</div>
        <div className="movements__value">{mov.value}€</div>
    </div>
   )
}
