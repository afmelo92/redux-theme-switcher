/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import produce from 'immer';
import { DefaultTheme } from 'styled-components';

const INITIAL_STATE: DefaultTheme = {
  title: 'dark',

  color: {
    primary: '#121214',
    secondary: '#f4cf00',

    background: '#212121',
    text: '#eeeeee',
  },
};

const themeReducer: Reducer<DefaultTheme> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'CHANGE_THEME': {
        const { theme } = action.payload;

        draft.title = theme.title;
        draft.color = theme.color;

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default themeReducer;
