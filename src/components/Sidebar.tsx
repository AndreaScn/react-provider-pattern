import React, { useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import {
  faBars,
  faCloud,
  faCogs,
  faCompass,
  faServer,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppModule, useAppPageState } from '../context/app-page-state';

const menuItems: {
  moduleId: AppModule;
  title: string;
  icon: IconDefinition;
}[] = [
  { title: 'Dashboard', icon: faCompass, moduleId: AppModule.dashboard },
  { title: 'Users Group', icon: faUsers, moduleId: AppModule.usersGroup },
  { title: 'Cloud Service', icon: faCloud, moduleId: AppModule.cloudService },
  { title: 'Usage Data', icon: faCogs, moduleId: AppModule.usageData },
  { title: 'Server', icon: faServer, moduleId: AppModule.server },
];

export const Sidebar = () => {
  const { dispatch } = useAppPageState();
  const [isOpen, setIsOpen] = useState(true);

  const onMenuItemSelect = useCallback(
    (module: AppModule, title: string) => {
      dispatch({ type: 'change_selected_module', module, title });
    },
    [dispatch],
  );

  return (
    <div className={cx('sidebar', { 'sidebar-closed': !isOpen })}>
      <button className={'sidebar__button'} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        {menuItems.map((item) => (
          <li key={item.title}>
            <div
              className={'sidebar__listItem'}
              onClick={() => onMenuItemSelect(item.moduleId, item.title)}>
              <FontAwesomeIcon className={'sidebar__icon'} icon={item.icon} />
              <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={'fade'}
                unmountOnExit>
                <span>{item.title}</span>
              </CSSTransition>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
