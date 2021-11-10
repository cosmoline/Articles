import React from "react";

function ItemArticle (props) {

  const onToggleShowingAbout = () => {

    console.log(
      `Текущая статья: ${props.currentArticleId}, Новая статья: ${props.article.id}`
    );
    if (props.currentArticleId === props.article.id) {
      //вызываем переданную функцию. Если клик на той же статье то передаем null в качестве активной статьи, чтобы все статьи были закрыты
      props.setCurrentArticleId({ articleId: null });
    } else {
      //вызываем переданную функцию. Если клик на другой статье, то передаем id новой статьи
      props.setCurrentArticleId({ articleId: props.article.id });
    }

  };

    const isActive = props.currentArticleId === props.article.id;
    return (
      <div>
        <h2 onClick={onToggleShowingAbout}>{props.article.title}</h2>
        {isActive && <p>{props.article.about}</p>}
      </div>
    );

}

export default ItemArticle;