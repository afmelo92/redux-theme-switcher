import { DefaultTheme } from 'styled-components';
import { IAction } from './types';

export function changeTheme(theme: DefaultTheme): IAction {
  return {
    type: 'CHANGE_THEME',
    payload: {
      theme,
    },
  };
}
