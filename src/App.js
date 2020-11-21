import React, { useState } from 'react'
import Router from './router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/Theme';
import MenuContext from './contexts/MenuContext'

function App() {
  const [showMenu, setShowMenu] = useState(false) 

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MenuContext.Provider value={{
          showMenu: showMenu,
          setShowMenu: setShowMenu
        }}>
          <Router/>
        </MenuContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
