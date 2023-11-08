import './header.scss'
import pict1 from '../assets/Frame 2.png'
const Header = () => {
  return (
    <div className='header_container'>
      <div className="container flex-wrapper header">
        <div className="nav">
          <h1>GlobalTalk</h1>
          <nav>
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">Textbook</a></li>
              <li><a href="#">Statistics</a></li>
              <li><a href="#" className="game">Games</a></li>
            </ul>
          </nav>
        </div>
        <div className="user">
          <img src={pict1} alt="" />
          <p className="name">Alex</p>
          <a href="#" className="out">Sign Out</a>
        </div>
      </div>
    </div>
  )
}

export default Header