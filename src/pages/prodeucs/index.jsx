import React, { useState } from "react";
import Header from "../../components/header";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./index.scss";

function Products(props) {
  //以后用formik重构
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState("");
  const [number, setNumber] = useState(1);
  //测试数据
  const pic = [
    "/image/pro_square29_900x.webp",
    "/image/01200330_A_0096_144c1793-f20a-448f-b187-ef17df29376d_900x.webp",
  ];
  const title = "jersey boat neck t";
  const price = "7000";
  const colorList = ["black", "white"];
  const sizeList = ["s", "m", "l"];

  const tips = [{
      size:'S',
      tip:'身丈 65.0 身巾 51.0 肩巾 47.0 袖丈 22.0 裄丈 45.5 袖巾 23.5 袖口巾 18.5 天巾 26.0 前下り 6.0 後下り 2.0 裾幅 45.0 ',
  },{
      size:'M',
      tip:'身丈 67.0 身巾 54.0 肩巾 49.0 袖丈 23.0 裄丈 47.5 袖巾 24.5 袖口巾 19.5 天巾 27.0 前下り 6.0 後下り 2.0 裾幅 48.0 '
  },{
      size:'L',
      tip: '身丈 69.0 身巾 57.0 肩巾 51.0 袖丈 24.0 裄丈 49.5 袖巾 25.5 袖口巾 20.5 天巾 28.0 前下り 6.0 後下り 2.0 裾幅 51.0 '
  }]

  const handlePointClick = (n) => {
    setCount(n);
  };

  const handleMinusClick = () => {
    number === 1 ? setNumber(number) : setNumber(number - 1);
  };

  const handleAddClick = () => {
    setNumber(number + 1);
  };

  const arr = new Array(pic.length).fill(0);

  return (
    <div className="product">
      <Header />
      <div className="product-info">
        <div className="product-left">
          <div className="img-wrapper">
            <img src={pic[count]} alt="" />
            <div className="points">
              {arr.map((item, index) => (
                <div
                  className={`point ${count === index ? "active" : ""}`}
                  key={index}
                  onClick={() => handlePointClick(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="product-right">
          <div className="product-title">{title}</div>
          <div className="product-price">￥{price}</div>
          <div className="product-color">
            <label htmlFor="color">Color :</label>
            <div className="color-list">
              {colorList.map((item, index) => (
                <div className='border-out' style={{ borderColor: color === item ? "black" : "#e7e7e7"}}>
                  <div
                  className="color-item"
                  key={index}
                  style={{
                    backgroundColor: item,
                  }}
                  data-color={item}
                  onClick={() => setColor(item)}
                ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="product-size">
            <label htmlFor="size">Size :</label>
            <div className="size-list">
              {sizeList.map((item, index) => (
                <div
                  className="size-item"
                  key={index}
                  onClick={() => setSize(item)}
                  style={{ borderColor: size === item ? "#000" : "#e7e7e7" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="product-number">
            <div className="number-reduce" onClick={handleMinusClick}>
              <AiOutlineMinus />
            </div>
            <div className="number">{number}</div>
            <div className="number-add" onClick={handleAddClick}>
              <AiOutlinePlus />
            </div>
          </div>
          <div className="product-button">
            <div className="addCart-btn btn ">加入购物车！</div>
            <div className="buyNow-btn btn">立刻购买！</div>
          </div>
          <div className="tips">
              <div className="tips-title">
                  各尺寸详情 （单位：cm）
              </div>
              <div className="tips-list">
                 {tips.map((item, idnex) => (
                     <div className="tip">
                         <div className="tip-size">
                             {item.size}
                         </div>
                         <div className="tip-content">
                             {item.tip}
                         </div>
                     </div>
                 ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
