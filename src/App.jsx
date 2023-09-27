import './App.scss'
import qrCode from './assets/images/image-qr-code.png'

function App() {
  return (
    <div className="main">
      <div className="main__content">
        <div className="card">
          <div className="card__image">
            <figure>
              <img src={qrCode} alt="QR CODE" />
            </figure>
          </div>
          <div className="card__content">
            <h4>Improve your front-end skills by building projects</h4>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
