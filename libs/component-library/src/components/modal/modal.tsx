import styles from './modal.module.scss';

/* eslint-disable-next-line */
export interface ModalProps {}

export function Modal(props: ModalProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Modal!</h1>
    </div>
  );
}

export default Modal;
