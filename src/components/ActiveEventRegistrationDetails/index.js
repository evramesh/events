import './index.css'

const ActiveStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClose: 'REGISTRATIONS_CLOSED',
}

const ActiveEvent = props => {
  const {ways} = props
  const renderYetToRegister = () => (
    <div className="yet">
      <img
        className="icon"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button"> Register Here</button>
    </div>
  )
  const renderRegister = () => (
    <div>
      <img
        className="icon"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )
  const renderClose = () => (
    <div>
      <img
        className="icon"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )
  const renderNo = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )
  const renderActiveDate = () => {
    switch (ways) {
      case ActiveStatus.yetToRegister:
        return renderYetToRegister()
      case ActiveStatus.registered:
        return renderRegister()
      case ActiveStatus.registrationClose:
        return renderClose()
      default:
        return renderNo()
    }
  }
  return <div>{renderActiveDate()}</div>
}

export default ActiveEvent
