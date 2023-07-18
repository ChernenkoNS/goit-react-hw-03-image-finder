import PropTypes from "prop-types";
import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css'

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button className={css.SearchFormButton} type="submit">
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input 
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}



Searchbar.propTypes = {
  value:  PropTypes.string,
  onSubmit:PropTypes.func.isRequired
};

