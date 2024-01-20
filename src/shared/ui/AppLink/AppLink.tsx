import { classNames } from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { Theme } from 'app/providers/theme';
import classes from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: Theme
}
export function AppLink(props: AppLinkProps) {
  const {
    to,
    children,
    theme = Theme.LIGHT,
    className,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames({ cls: classes.AppLink, additional: [className, classes[theme]] })}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
