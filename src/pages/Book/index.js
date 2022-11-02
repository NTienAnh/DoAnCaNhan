import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../common/Header";
import "../Book/index.css";
import { selectLoading, selectBook } from "../Books/store/selector";
import { getAllBook } from "../Books/store/action";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from "antd";
import Books from "../Books";
const Book = (props) => {
  let { id } = useParams();
  console.log("ihihih" + id);
  // action
  const { showListBook } = props;
  // data
  const { listBook, isLoading } = props;

  // const data = listBook.filter(item);
  const findId = listBook.find((item) => item.id === id);

  // listboook.title ... là ra rồiiii
  // lấy 1 cái detailsBoook
  // UserEffect
  const current = new Date();
  const weekday = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];
  const day = weekday[current.getDay()];
  const date = `${day}, ${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}  ${current.getHours()}:${current.getMinutes()}(GMT+7)`;
  return (
    <div>
      <Header />
      <div
        className="title container"
        style={{ width: "1100px", margin: "0 auto" }}
      >
        <h2 className="h2-title">GIẢI TRÍ</h2>
        <h1>{id}</h1>
        <p className="time">{date}</p>

        <h3>
          Sau 2 năm chịu ảnh hưởng bởi dịch bệnh, lần đầu tiên Apple đón khách
          mời đến trụ sở để theo dõi sự kiện quan trọng dù hình thức hoàn toàn
          khác so với trước đây.
        </h3>
        <img
          src="https://znews-photo.zingcdn.me/w1200/Uploaded/yqdlcqrwq/2022_06_06/04106062022.jpg"
          alt=""
        />
        <p className="p-title">
          Hội nghị WWDC 2022 được tổ chức online, tuy nhiên một số lập trình
          viên được mời đến trụ sở Apple để tham quan và theo dõi sự kiện chính.
          Ảnh: Paul Hudson.
        </p>
        <p className="p-title">
          Giải thưởng thiết kế Apple Design Award cũng sẽ diễn ra tại WWDC 2022.
          So với 2 năm trước, hội nghị lần này mang đến nhiều bài phát biểu,
          không gian trải nghiệm và nội dung bản địa hóa để thu hút nhiều người
          tham gia, giúp WWDC trở thành sự kiện toàn cầu thực sự.
        </p>
        <p className="p-title">
          Dù các chương trình được phát online, Apple xác nhận WWDC 2022 sẽ bao
          gồm buổi gặp mặt trực tiếp tại trụ sở dành cho các lập trình viên và
          sinh viên. Họ sẽ đến Apple Park trong một ngày để theo dõi video khai
          mạc và Platforms S te of the Union (đã được ghi hình trước), có thể
          trao đổi kinh nghiệm, tham quan khu vực hoàn toàn mới tại trụ sở dành
          cho lập trình viên.
        </p>
        <img
          src="https://znews-photo.zingcdn.me/w480/Uploaded/yqdlcqrwq/2022_06_06/04206062022.jpg"
          alt=""
        />
        <p>
          Thư mời lập trình viên đến trụ sở Apple để theo dõi WWDC 2022. Ảnh:
          Ashwin.
        </p>
        <p className="p-title">
          Do tổ chức trực tiếp trong bối cảnh dịch bệnh vẫn bùng phát, Apple áp
          dụng một số biện pháp chống dịch cho khách mời. Khẩu trang không bắt
          buộc, nhưng người tham gia phải chứng minh kết quả xét nghiệm âm tính
          với Covid-19 trong 3 ngày trước khi sự kiện bắt đầu.
        </p>
        <p className="p-title">
          Từ giữa tháng 5, Apple đã gửi thư mời cho các lập trình viên tham gia
          sự kiện trực tiếp. Tương tự năm 2019 trở về trước, họ cần đăng ký trên
          website Apple Developer nhưng không mất phí mua vé. Dù vậy, Apple chỉ
          mời ngẫu nhiên lượng nhỏ lập trình viên để tham gia.
        </p>
        <p className="p-title">
          Theo New York Post, lối sống xa hoa với đam mê hàng hiệu cũng là một
          trong số những nguyên nhân khiến Heard đối mặt với bài toán khó khăn
          tài chính. Cô thường xuyên chi số tiền lớn cho các chuyến du lịch sang
          trọng, quần áo, túi xách của các thương hiệu lớn, quà tặng và rượu.
        </p>
        <Button style={{ backgroundColor: "orange" }}>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

// data State to Props
const mapStateToProps = createStructuredSelector({
  listBook: selectBook,
  isLoading: selectLoading,
});

//action contact with API
const mapDispatchToProps = (dispatch) => ({
  showListBook: (payload) => dispatch(getAllBook(payload)),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Book);
