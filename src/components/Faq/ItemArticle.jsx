import React from "react";

export class ItemArticle extends React.Component {
  // state = {
  //   isShowAbout: false,
  // };

  onToggleShowingAbout = () => {
    //this.setState({ isShowAbout: !this.state.isShowAbout });

    console.log(
      `Текущая статья: ${this.props.currentArticleId}, Новая статья: ${this.props.article.id}`
    );
    if (this.props.currentArticleId === this.props.article.id) {
      //вызываем переданную функцию. Если клик на той же статье то передаем null в качестве активной статьи, чтобы все статьи были закрыты
      this.props.setCurrentArticleId({ articleId: null });
    } else {
      //вызываем переданную функцию. Если клик на другой статье, то передаем id новой статьи
      this.props.setCurrentArticleId({ articleId: this.props.article.id });
    }

  };

  render() {
    const isActive = this.props.currentArticleId === this.props.article.id;
    return (
      <div>
        <h2 onClick={this.onToggleShowingAbout}>{this.props.article.title}</h2>
        {isActive && <p>{this.props.article.about}</p>}
      </div>
    );
  }
}

export default ItemArticle;