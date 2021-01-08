import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { mainNav, subNav, IObj } from 'constants/menu';
import { TopContainer, SubNavContainer } from './style';

const Home = (props: RouteConfigComponentProps) => {
  const {
    route,
    location: { pathname },
  } = props;

  return (
    <div>
      <TopContainer>
        <div className="logo">
          <a href="/#">云音乐</a>
        </div>
        <ul className="nav">
          {mainNav.map((item) => (
            <li
              key={item.key}
              className={pathname.startsWith(item.key) ? 'active' : ''}
            >
              <Link to={item.key}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="search"></div>
        <div className="me"></div>
      </TopContainer>
      <SubNavContainer>
        {subNav.map((sn) => (
          <ul
            key={`${sn.key}-sub`}
            className={pathname.startsWith(sn.key) ? 'show' : ''}
          >
            {sn.children.map((item: IObj) => (
              <li
                key={item.key}
                className={pathname === item.key ? 'active' : ''}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            ))}
          </ul>
        ))}
      </SubNavContainer>
      {renderRoutes(route?.routes)}
    </div>
  );
};

export default React.memo(Home);
