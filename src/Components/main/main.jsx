import './main.scss'
import pict2 from '../assets/plus.png'
import pict3 from '../assets/image 6.png'
import pict4 from '../assets/casual-life-3d-boy-sitting-at-the-desk-with-open-book 9.png'
import pict5 from '../assets/image 12.png'
import pict6 from '../assets/image 8.png'
import pict7 from '../assets/image 2.png'
import pict8 from '../assets/image 1.png'

const Main = () => {
  return (
    <div className='main_container'>
      <div className="container">
        <div className="flex-wrapper course ">
          <div className="text">
            <h3>E-COURSE PLATFORM</h3>
            <h2>Learning and
              teaching online,
              made easy.</h2>
            <p className="platform">Practice your English and learn new things <br /> with the platform.</p>
            <button>About platform</button>
            <div className="word-game">
              <div className="words">
                <p className="number">600 <img src={pict2} alt="" /></p>
                <p className="t">Popular words</p>
              </div>
              <div className="games">
                <p className="number">2 <img src={pict2} alt="" /></p>
                <p className="t">Mini-games</p>
              </div>
            </div>
          </div>
          <div className="img">
            <div className="back"><img src={pict3} alt="" /></div>
            <div className="relative"><img src={pict4} alt="" /></div>
            <div className="before"><img src={pict5} alt="" /></div>
          </div>
        </div>
        <div className="learn-words flex-wrapper ">
          <div className="img">
            <img src={pict6} alt="" />
          </div>
          <div className="text">
            <h2>Learn a language in a playful way</h2>
            <p>Make learning words more fun with mini-games</p>

          </div>
        </div>
        <div className="textbook flex-wrapper ">
          <div className="text ">
            <h2>Increase your vocabulary</h2>
            <p>Traditional and new effective approaches to word study</p>
            <button>Textbook</button>
          </div>
          <div className="img">
            <img src={pict7} alt="" />
          </div>
        </div>
        <div className="statistics  flex-wrapper">
          <div className="img">
            <img src={pict8} alt="" />
          </div>
          <div className="text ">
            <h2>Watch your progress every day</h2>
            <p>Save statistics on your achievements, words learned, and mistakes</p>
            <button>Statistics</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main