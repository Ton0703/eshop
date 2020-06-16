import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useTransition, animated } from "react-spring";
import "./index.scss";

function Card(props) {
  const history = useHistory()
 
  //demo 后面都是从服务端获取
  const pic1 = '/image/pro_square29_900x.webp'
  const pic2 = '/image/01200330_A_0096_144c1793-f20a-448f-b187-ef17df29376d_900x.webp'
  const title = 'jearsey active top'
  const price = 5500

  const [toggle, setToggle] = useState(true);
  const handleEnter = () => {
    setToggle(false);
  };
  const handleLeave = () => {
    setToggle(true);
  };
  const trnasition = useTransition(toggle, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const historyJump = (id) => {
     history.push('/products')
  }
  return (
    <div className="card" onClick={historyJump}>
      <div
        className="picture-wrapper"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {trnasition.map(({ item, key, props }) => (
          <animated.img  style={props} src={item ? pic1 : pic2}></animated.img>
        ))}
        <div className="pic-slogan"></div>
      </div>
      <div className="info">
        <div className="info-title">{title}</div>
        <div className="info-price">￥{price}</div>
      </div>
    </div>
  );
}

export default Card;
