import { ReactNode, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { icons } from '../../utils/icons';
import Header from '../Header';
import { SideBar } from '../Sidebar';

import { CollapseSideBar, PageContent } from './Layout.styles';
import { items } from './sidebarItems';

type LayoutProps = {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps){
  const location = useLocation();
  const [ isOpen, setIsOpen ] = useState(true);

  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header />
      <SideBar.Root isOpen={isOpen}>
        {
          items.map(({ label, path, icon }) => (
            <SideBar.Item key={label} label={label} path={path} icon={icon} active={!!matchPath(
              location.pathname.split('/')[1], 
              path
            )} />
          ))
        }
        <CollapseSideBar isOpen={isOpen} onClick={handleCollapse}>
          <img src={icons.arrowcollapse} alt="" />
        </CollapseSideBar>
      </SideBar.Root>
      <PageContent isOpen={isOpen}>
        {children}
      </PageContent>
    </>
  );
}