import { classNames } from 'shared/lib/classNames';
import React, { useState } from 'react';
import { ThemeSwitch } from 'shared/ui/ThemeSwitch/';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}
export function Sidebar({ className } : SidebarProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => setCollapsed((newCollapsed) => !newCollapsed);

  return (
    <div className={classNames({
      cls: classes.Sidebar,
      additional: [className],
      mods: { [classes.collapsed]: collapsed },
    })}
    >
      <button type="button" onClick={onToggle}>Toggle</button>
      <div className={classes.switchers}>
        <LangSwitcher className={classes.lang} />
        <ThemeSwitch />
      </div>
    </div>

  );
}
