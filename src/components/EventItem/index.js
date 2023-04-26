import './index.css'

const EventItem = props => {
  const {send, selectedBtn} = props
  const {registrationStatus, id, name, location, imageUrl} = send

  const btnClick = () => {
    selectedBtn(id)
  }
  return (
    <li className="li">
      <button className="btn" onClick={btnClick} type="button">
        <img className="img" src={imageUrl} alt="event" />
        <p>{name}</p>
        <p>{location}</p>
      </button>
    </li>
  )
}

export default EventItem
