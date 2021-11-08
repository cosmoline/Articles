import React from "react";
import ItemArticle from "./ItemArticle";
import Form from "./Form";

const defaultState = [
    {
      id: 1,
      title: "First article title",
      about: "First article about",
    },
    {
      id: 2,
      title: "Second article title",
      about: "Second article about",
    },
]

export class Faq extends React.Component {
  state = {
    articles: defaultState,
  };

  //этот метод надо передать в компонент Form, чтобы оттуда запускать с новыми параметрами title и about
  addArticle = ({ title, about }) => {
    if (title && about) {
      const id = this.state.articles.length + 1; //id новой статьи
      this.setState({articles: this.state.articles.concat([{id, title, about}]) });
      //this.setState({articles: [...this.state.articles, {title, about}]})
    }
  }

  render() {
    return (
      <div>
        {this.state.articles.map((article) => (
          <ItemArticle id={article.id} article={article} />
        ))}
        <Form addArticle={ this.addArticle } />
      </div>
    );
  }
}

export default Faq;