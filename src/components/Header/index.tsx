import React, { useCallback } from 'react';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultTheme } from 'styled-components';
import { IState } from '../../store';

import { Container, Navbar, NavLogo, NavItems } from './styles';
import { changeTheme } from '../../store/modules/theme/actions';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

const Header: React.FC = () => {
  const themeReducer = useSelector<IState, DefaultTheme>(
    state => state.themeReducer,
  );
  const dispatch = useDispatch();

  const handleChangeTheme = useCallback(() => {
    const newTheme = themeReducer.title === 'light' ? dark : light;

    dispatch(changeTheme(newTheme));
  }, [dispatch, themeReducer.title]);

  return (
    <Container>
      <Navbar>
        <NavLogo>
          <h1>Ninja Store</h1>
        </NavLogo>
        <NavItems>
          <a href="/">Products</a>
          <a href="/">Developers</a>
          <a href="/">Company</a>
          <a href="/">Contact</a>
          <Switch
            onChange={handleChangeTheme}
            checked={themeReducer.title === 'dark'}
            uncheckedIcon={false}
            checkedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor="#f4cf00"
          />
        </NavItems>
      </Navbar>
    </Container>
  );
};

export default Header;
