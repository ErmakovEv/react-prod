import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import BugIcon from '../assets/bug.svg';
import classes from './BugButton.module.scss';

interface BugButtonProps {
  className?: string
}
export function BugButton({ className } : BugButtonProps) {
  const [counterBug, setCounterBug] = useState(0);

  useEffect(() => {
    if (counterBug === 2) {
      throw new Error('This is bug for educations');
    }
  });
  const createBug = () => {
    setCounterBug((cnt) => cnt + 1);
  };

  return (
    <Button
      className={classNames({
        cls: classes.BugButton,
        additional: [className, 'clear'],
      })}
      onClick={createBug}
    >
      <BugIcon className={classes.bugIcon} fill="red" />
    </Button>

  );
}
