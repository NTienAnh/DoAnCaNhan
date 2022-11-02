import React, { useEffect, useState } from "react";
import "../Books/index.css";
import { selectLoading, selectBook } from "../Books/store/selector";
import { getAllBook } from "../Books/store/action";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Image, Table } from "antd";
import Header from "../../common/Header";
import { NavLink, useNavigate } from "react-router-dom";
const Books = (props) => {
  // action
  const { showListBook } = props;
  // data
  const { listBook, isLoading } = props;
  // Columns of table
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "Image",
      key: "Image",
      className: "img-Home",
      render: (text, record) => (
        <>
          <Image src={text} alt="" />
        </>
      ),
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "Title",
      render: (text, record) => {
        return <NavLink to={`/books/${text}`}>{text}</NavLink>; // just for decoration
      },
      // render: (text, record) => (
      //     <div>
      //         {text.length > 5 ? text.slice(0, 20) + "..." : "Empty"}
      //     </div>
      // ),
    },

    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
      render: (text, record) => (
        <div>{text.length > 5 ? text.slice(0, 20) + "..." : "Empty"}</div>
      ),
    },
    {
      title: "Content",
      dataIndex: "Content",
      key: "Content",
      render: (text, record) => (
        <div>{text.length > 5 ? text.slice(0, 20) + "..." : "Empty"}</div>
      ),
    },
  ];
  // Data form
  const [data, setdata] = useState([]);
  useEffect(() => {
    showListBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();
  const goBack = () => {
    navigate.goBack();
  };
  return (
    <>
      <Header />
      <div className="table-books">
        <button onClick={() => navigate(-1)}>go back</button>
        <Table dataSource={listBook} columns={columns} />
      </div>
    </>
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
export default compose(withConnect)(Books);
