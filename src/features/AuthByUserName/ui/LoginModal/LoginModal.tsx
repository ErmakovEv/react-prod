import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string
  isOpen?: boolean;
  onClose?: () => void
}
export function LoginModal({ className, isOpen, onClose } : LoginModalProps) {
  return (
    <Modal
      className={classNames({
        cls: classes.LoginModal,
        additional: [className],
      })}
      onClose={onClose}
      isOpen={isOpen}
      lazy
    >
      <LoginForm />
    </Modal>
  );
}
