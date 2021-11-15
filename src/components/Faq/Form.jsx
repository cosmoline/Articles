
import React, {useEffect, useContext} from "react";
import styles from './faq.module.scss'
import {ArticleContext} from './index'; 
import useForm from './useForm';

function validator(values) {
  let errors = {};

  if (!values.title){
    errors.title = "Title is require";
  }
  if (!values.about){
    errors.about = "About is require";
  }
  return errors;
}

function Form (props) {

  const [articles, setArticles] = useContext(ArticleContext);

  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = useForm(() => setArticles(prev => [...prev, values]), validator);



  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера (просто попробовал)
    document.querySelector("legend").innerText = 'Введите параметры новой статьи';
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Форма</legend>
          <label className={styles.label}>
            <input
              onChange={ handleChange }
              value={values.title}
              type="text"
              name="title"
              placeholder="Добавьте заголовок"
            />
            {errors.title && <p style={{color: 'red'}}>{errors.title}</p>}
          </label>
          <label className={styles.label}>
            <textarea
              onChange={ handleChange }
              value={values.about}
              type="text"
              name="about"
              placeholder="Добавьте текст"
            />
          </label>
          {errors.about && <p style={{color: 'red'}}>{errors.about}</p>}
          <button type="submit">Добавить</button>
        </fieldset>
      </form>
    </div>
  );

}

export default Form;