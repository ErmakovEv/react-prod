import { classNames } from 'shared/lib/classNames';
import classes from './Text.module.scss';

export enum TextThema {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  content?: string;
  thema?: TextThema;
}
export function Text({
  className, title, content, thema = TextThema.PRIMARY,
} : TextProps) {
  return (
    <div className={classNames({
      cls: classes.Text,
      additional: [className, classes[thema]],
    })}
    >
      {title && <p className={classes.title}>{title}</p>}
      {content && <p className={classes.content}>{content}</p>}
    </div>

  );
}
