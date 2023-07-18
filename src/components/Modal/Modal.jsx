import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }
  render() {
    return (
      <div onClick={this.props.onClose} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.selectedImage} alt="dog" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  selectedImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
