import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === `Escape`) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
  const handleClose = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <div onClick={handleClose} className={css.Overlay}>
      <div className={css.Modal}>{children}</div>
    </div>
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.keyDown);
//   }

//   keyDown = evt => {
//     if (evt.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.keyDown);
//   }

//   handleClose = evt => {
//     if (evt.currentTarget === evt.target) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     return (
//       <div onClick={this.handleClose} className={css.Overlay}>
//         <div className={css.Modal}>{this.props.children}</div>
//       </div>
//     );
//   }
// }
