import React, {useState, useContext}  from "react";
import ItemArticle from "./ItemArticle";
import {ArticleContext} from './index'; 

function Articles() {

    const [currentArticleId, setStateCurrentArticleId] = useState('');
    //хук для работы со state
    const setCurrentArticleId = (props) => {
    console.log(
        "Переданную функцию вызвал объект ItemArticle с id = " + props.articleId
    );
    setStateCurrentArticleId(props.articleId);
    };

    const [articles] = useContext(ArticleContext);
    //принудительно ставлю статьям id, по другому не разобрался - уж очень сложная струкутра проекта, очень запутанно
    for (var i = 0; i < articles.length; i++) {
        articles[i].id = i + 1;
    }
    return articles.map((article) => (
        <ItemArticle
            key={article.id}
            article={article}
            currentArticleId={currentArticleId} //это свойство прилетит абсолютно всем объектам ItemArticle
            setCurrentArticleId={setCurrentArticleId} //тело функции для запуска в объекте ItemArticle, на котором будет клик
        />
    ));
}

export default Articles;
