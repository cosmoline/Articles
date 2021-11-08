
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
    if (title && about) {
      this.props.addArticle({ title, about }); //запустим callback, переданный из Faq
      this.setState({
        title: '',
        about: '',
      })
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