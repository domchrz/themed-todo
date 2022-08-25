import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { StoreContext } from '../Store';

export default function Theme({children}) {
  const { state: { theme } } = useContext(StoreContext);

 return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}