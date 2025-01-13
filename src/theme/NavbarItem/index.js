import React from 'react';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DocSidebarNavbarItem from '@theme/NavbarItem/DocSidebarNavbarItem';
import LocaleDropdownNavbarItem from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import AuthButtons from './AuthButtons';
import BrowserOnly from '@docusaurus/BrowserOnly';

const NavbarItem = (props) => {
  const { type } = props;

  if (type === 'custom-AuthButtons') {
    return (
      <BrowserOnly fallback={<div>...</div>}>
        {() => <AuthButtons />}
      </BrowserOnly>
    );
  }

  if (type === 'docSidebar') {
    return <DocSidebarNavbarItem {...props} />;
  }

  if (type === 'localeDropdown') {
    return <LocaleDropdownNavbarItem {...props} />;
  }

  if (type === 'dropdown') {
    return <DropdownNavbarItem {...props} />;
  }

  return <DefaultNavbarItem {...props} />;
};

export default NavbarItem;
