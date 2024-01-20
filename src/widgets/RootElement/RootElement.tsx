import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/SidebarBlock';
import { classNames } from 'shared/lib/classNames';
import classes from './RootElement.module.scss';

function RootElement() {
  return (
    <Suspense>
      <Navbar />
      <div className={classNames({ cls: classes.RootElement })}>
        <Sidebar />
        <div className={classNames({ cls: classes.pageWrapper })}>
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
}

export default RootElement;
