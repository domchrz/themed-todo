import { createContext, useReducer } from 'react';
import {
  THEME_BASICS,
  THEME_PRIMARY,
  THEME_SECONDARY,
  THEME_TERTIARY,
} from '../../constants/themes';

const initialState = {
  todos: [],
  theme: {
    ...THEME_BASICS,
    ...THEME_PRIMARY,
  },
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { name: payload, id: Math.random().toString(), isDone: false }],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== payload) };
    case 'SET_PRIMARY_THEME':
      return {
        ...state,
        theme: {
          ...THEME_BASICS,
          ...THEME_PRIMARY,
        },
      };
    case 'SET_SECONDARY_THEME':
      return {
        ...state,
        theme: {
          ...THEME_BASICS,
          ...THEME_SECONDARY,
        },
      };
    case 'SET_TERTIARY_THEME':
      return {
        ...state,
        theme: {
          ...THEME_BASICS,
          ...THEME_TERTIARY,
        },
      };
    default:
      return state;
  }
};

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};