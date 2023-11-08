import './footer.scss'
import pict9 from '../assets/Vector.png'
import pict10 from '../assets/GT.png'
import pict11 from '../assets/youtube.png'
const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="container">
        <div className="flex-wrapper top">
          <div className="text1">
            <a href="#">Home</a>
            <a href="#">Textbook</a>
            <a href="#">Statistics</a>
            <a href="#">Sprint</a>
            <a href="#">Audio-call</a>
          </div>
          <div className="text2">
            <p>Alex</p>
            <p>Gabriel</p>
            <p>Marcus</p>
          </div>
        </div>
        <div className="flex-wrapper under">
          <div className="img">
            <a href="#"><img src={pict9} alt="" /></a>
            <a href="#"><img src={pict10} alt="" /></a>
            <a href="#"><img src={pict11} alt="" /></a>
          </div>
          <div className="text3">
            <p>©2021 GlobalTalk. Project for GlobalTalk.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer