import {useState} from 'react'
import Media from "../utils/social-media";
import share from '../assets/icon-share.svg';
import shareWhite from '../assets/Path.png'
import '../style/PostHiddenBtn.css'



export function HiddenPost() {
  const [hidden, setHidden] = useState(true)
  return (
    <>
      <button className={hidden ? "footer__button" : "footer__button hidden"}onClick={(e) => {
        setHidden(!hidden)
        console.log(e)}}>
          {hidden? <img src={share} alt="share"/>:        <img src={shareWhite} alt="share"/>}

      </button>
      {
        hidden ? null : <>
        <div className="hidden-post">
          <p className='hidden-post__p'>SHARE</p>
          <img className='hidden-post__img' src={Media[0].img} alt="fb" />
          <img className='hidden-post__img' src={Media[1].img} alt="twt" />
          <img className='hidden-post__img' src={Media[2].img} alt="pinr" />
        </div>
        <div class="arrow-down"></div>
        </>

      }
    </>
  );
}
