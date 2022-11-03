import React, { useEffect } from "react";
import Header from "../../common/Header";
import "../Home/index.css";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link, useNavigate } from "react-router-dom";
import { Card, Avatar, Col, Row, Image } from "antd";

import { selectLoading, selectHomeNewContent } from "./store/selector";
import { getHomeNewContent } from "./store/action";

const Home = (props) => {
  // action
  const { showHome } = props;
  //data
  const { HomeContent, isLoading } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      window.localStorage.removeItem("user");
      navigate("/login");
    } else {
      navigate("/");
      showHome();
    }
  }, []);

  const showData = HomeContent.filter((item) => item.isShow === true);
  const data1 = showData.filter((item) => item.type === 1);
  const data2 = showData.filter((item) => item.type === 2);
  const data3 = showData.filter((item) => item.type === 3);
  return (
    <>
      <Header />
      <div className="main">
        {/* -------------------------Widget------------------------- */}
        <div className="widget">
          <div className="widget-ticker">
            <div className="widget-left">
              <div className="widget-chart">
                <Link to="/">
                  <img
                    style={{ width: "100%", height: "29px" }}
                    className="avatar"
                    src="https://static-znews.zadn.vn/images/stat.svg"
                  />
                </Link>
              </div>
              <div className="tag">
                <Link to="/" className="tit-tag">
                  #Zing từ Ukraine
                </Link>
              </div>
              <div className="tag">
                <Link to="/" className="tit-tag">
                  #Số liệu Covid-19
                </Link>
              </div>
              <div className="tag">
                <Link to="/" className="tit-tag">
                  #Master of Living Show
                </Link>
              </div>
              <div className="tag">
                <Link to="/" className="tit-tag">
                  #Super Idol 1
                </Link>
              </div>
              <div className="tag">
                <Link to="/" className="tit-tag">
                  #Super Idol 2
                </Link>
              </div>
              <div className="tag">
                <Link to="/" className="tit-tag">
                  #Super Idol 3
                </Link>
              </div>
            </div>
            {/* Right */}
            <div className="widget-right">
              <div style={{ fontWeight: "bold" }}>TP.Hồ Chí Minh</div>
              <div>28°C / 26-34°C</div>
              <img
                style={{ width: "auto", height: "30px" }}
                className="avatar"
                src="https://static-znews.zingcdn.me/images/icons/weather/v2/hazy.png"
              />
            </div>

            <div></div>
          </div>
        </div>

        {/* --------------------------Content------------------------ */}
        <div className="main-content">
          <div className="content-zingHome" loading={isLoading}>
            {/* LEFTTTTTTTTTTTTT */}
            <div className="content-left">
              {/* Data1 */}
              {data1.map((item, index) => (
                <div className="item-left" key={index}>
                  <img
                    style={{ width: "120px", height: "80px" }}
                    className="img-left"
                    src={item.image}
                    alt="/"
                  />
                  <Link to="/details">
                    <h4
                      className="title-left"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </h4>
                  </Link>
                </div>
              ))}
            </div>
            {/* RIGHTTTTTTTTTTTT */}
            <div className="content-mid mid-mid">
              {/* Data2 */}
              {data2.map((item, index) => (
                <div className="item-mid" key={index}>
                  <img
                    style={{ width: "100%", height: "328px" }}
                    src={item.image}
                    alt=""
                  />
                  <h2 style={{ marginTop: "10px" }}>{item.title}</h2>
                  <p>{item.description}</p>
                  <h3
                    className="title-mid"
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {item.content}
                  </h3>
                </div>
              ))}
            </div>
            <div className="content-right right-right">
              {/* Data3 */}
              {data3.map((item, index) => (
                <div className="item-right" key={index}>
                  <img
                    style={{ width: "258px", height: "172px" }}
                    src={item.image}
                    alt="/"
                  />
                  <Link to="/titleId">
                    <h4
                      className="title-right"
                      style={{
                        marginTop: "10px",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {item.title}
                    </h4>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// data State to Props
const mapStateToProps = createStructuredSelector({
  HomeContent: selectHomeNewContent,
  isLoading: selectLoading,
});
//action contact with API
const mapDispatchToProps = (dispatch) => ({
  showHome: (payload) => dispatch(getHomeNewContent(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Home);
