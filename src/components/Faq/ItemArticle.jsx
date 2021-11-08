import React from "react";

export class ItemArticle extends React.Component {
  state = {
    isShowAbout: false,
  };

  handleTitleClick = () => {
    this.setState({ isShowAbout: !this.state.isShowAbout });
  };

  render() {
    return (
      <div>
        <h2 onClick={this.handleTitleClick}>{ this.props.article.title}</h2>
        {this.state.isShowAbout && <p>{ this.props.article.about}</p>}
      </div>
    );
  }
}

export default ItemArticle;