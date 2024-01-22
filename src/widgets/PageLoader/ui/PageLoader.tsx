import { classNames } from 'shared/lib/classNames';
import './PageLoader.scss';

interface PageLoaderProps {
  className?: string
}
export function PageLoader({ className } : PageLoaderProps) {
  return (
    <div className={classNames({
      cls: 'page__loader',
      additional: [className],
    })}
    >
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>

  );
}
