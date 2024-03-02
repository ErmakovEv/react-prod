import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
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
      <Suspense fallback={<PageLoader />}>
        <LoginForm />
      </Suspense>

    </Modal>
  );
}
