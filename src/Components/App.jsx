import '../style/App.scss '
import pict1 from '../assets/Frame 2.png'
import pict2 from '../assets/plus.png'
import pict3 from '../assets/image 6.png'
import pict4 from '../assets/casual-life-3d-boy-sitting-at-the-desk-with-open-book 9.png'
import pict5 from '../assets/image 12.png'
import pict6 from '../assets/image 8.png'
import pict7 from '../assets/image 2.png'
import pict8 from '../assets/image 1.png'
import pict9 from '../assets/Vector.png'
import pict10 from '../assets/GT.png'
import pict11 from '../assets/youtube.png'



function App() {


  return (
    <>
      <body>
        <header>
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
        </header>
        <main>
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
        </main>
        <footer>
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
        </footer>
      </body>
    </>
  )
}

export default App
