
import React from "react";
import styles from './faq.module.scss'

export class Form extends React.Component {
  state = {
    title: null,
    about: null,
  };

  handleChange = (e) => {
    if (e.target.value) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmitForm = (e) => {
    e.preventDefault(); //отменить действие по умолчанию, чтобы страница не перезагружалась

    const { title, about } = this.state;
    if (title && about) { //валидация - поля заполнены?
      alert(`Создаем новую статью. Здесь нужно отправлять форму на сервер, но мы просто добавим ее в state компонента Faq.\n
      ${title}\n${about}` )

      this.props.addArticle({ title, about }); //запустим callback, переданный из Faq
      this.setState({
        title: '',
        about: '',
      })
    } else {
      alert("Введите заголовок и текст новой статьи");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <fieldset>
            <legend>Форма</legend>
            <label className={styles.label}>
              <input
                onChange={this.handleChange}
                value={this.state.title}
                type="text"
                name="title"
                placeholder="Добавьте заголовок"
              />
            </label>
            <label className={styles.label}>
              <textarea
                onChange={this.handleChange}
                value={this.state.about}
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
}

export default Form;