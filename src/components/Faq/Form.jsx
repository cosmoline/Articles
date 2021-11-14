
import React, {useState, useEffect} from "react";
import styles from './faq.module.scss'

function Form (props) {

  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  
  //const [values, setValues] = useState({});

  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.querySelector("legend").innerText = 'Введите параметры новой статьи';
  });

  const handleSubmitForm = (e) => {
    e.preventDefault(); //отменить действие по умолчанию, чтобы страница не перезагружалась

    //const { title, about } = this.state;
    if ( title && about) { //валидация - поля заполнены?
      alert(`Создаем новую статью. Здесь нужно отправлять форму на сервер, но мы просто добавим ее в state компонента Faq.\n
      ${title}\n${about}` )

      props.addArticle({ title, about }); //запустим callback, переданный из Faq
      setTitle('');
      setAbout('');

    } else {
      alert("Введите заголовок и текст новой статьи");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <fieldset>
          <legend>Форма</legend>
          <label className={styles.label}>
            <input
              onChange={e => setTitle(e.target.value)}
              value={title}
              type="text"
              name="title"
              placeholder="Добавьте заголовок"
            />
          </label>
          <label className={styles.label}>
            <textarea
              onChange={e => setAbout(e.target.value)}
              value={about}
              type="text"
              name="about"
              placeholder="Добавьте текст"
            />
          </label>
          <button type="submit">Добавить</button>
        </fieldset>
      </form>
    </div>
  );

}

export default Form;