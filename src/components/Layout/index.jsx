import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./style.scss";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="main">{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Layout;