import React, {useState} from "react";
import ItemArticle from "./ItemArticle";
import Form from "./Form";

const defaultState = [
  {
    id: 1,
    title: "В какой версии React появились хуки?",
    about:
      "Начиная с релиза 16.8.0, React включает в себя стабильную реализацию хуков"
  },
  {
    id: 2,
    title: "Надо ли переписать все мои классовые компоненты?",
    about:
      "Нет, мы не собираемся удалять классы из React, поскольку никто не может позволить себе такой глобальный рефакторинг. Мы советуем пробовать хуки только в новом коде."
  },
  {
    id: 3,
    title:
      "Что можно сделать с помощью хуков, чего невозможно добиться, используя классы?",
    about:
      "Хуки дают новый мощный способ повторного использования кода в компонентах."
  },
  {
    id: 4,
    title: "Какая часть моих знаний о React всё ещё актуальна?",
    about:
      "Хуки не изменили фундаментальную логику React, поэтому ваши знания компонентов, пропсов и нисходящего потока данных остаются актуальными."
  },
  {
    id: 5,
    title: "Что мне использовать: хуки, классы или оба подхода?",
    about:
      "Вы не можете использовать хуки внутри классового компонента, но вы можете комбинировать классы и функциональные компоненты с хуками в одном дереве."
  },
  {
    id: 6,
    title: "Дают ли хуки все возможности классов?",
    about:
      "Хуки появились совсем недавно, и некоторые сторонние библиотеки могут быть ещё не совместимы с ними."
  }
];

function Faq (props) {

  const [articles, setArticles] = useState(defaultState);
  const [currentArticleId, setStateCurrentArticleId] = useState('');

  const ArticleContext = React.createContext();

  //эту функцию буду передавать через props компоненту ItemArticle
  const setCurrentArticleId = (props) => {
    console.log(
      "Переданную функцию вызвал объект ItemArticle с id = " + props.articleId
    );
    setStateCurrentArticleId(props.articleId);
  };

  //этот функцию надо передать в компонент Form, чтобы оттуда запускать с новыми параметрами title и about
  const addArticle = ({ title, about }) => {
    if (title && about) {
      const id = articles.length + 1; //id новой статьи
      setArticles(prev => [...prev, {title, about, id}] );
      // setArticles((prev) => {
      //   return [...prev, {title, about}] }
      // );
    }
  }

  return (
    <ArticleContext.Provider>
    <div>
      {articles.map((article) => (
        <ItemArticle 
          key={article.id} 
          article={article} 
          currentArticleId={currentArticleId} //это свойство прилетит абсолютно всем объектам ItemArticle
          setCurrentArticleId={setCurrentArticleId} //тело функции для запуска в объекте ItemArticle, на котором будет клик    
        />
      ))}
      <Form addArticle={ addArticle } />
    </div>
    </ArticleContext.Provider>
  );
}

export default Faq;