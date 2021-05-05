import React from 'react'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global'
import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { PlayerContextProvider } from '../contexts/PlayerContext'
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import {useDarkMode} from '../styles/useDarkMode';
import {Toggle} from '../components/Toggle';
import styles from '../styles/app.module.scss'

function MyApp({ Component, pageProps }) {

    const [theme, toggleTheme] = useDarkMode();
   const themeMode = theme ==='light'? light:dark;
  return (
    <ThemeProvider theme={themeMode}>    
        <PlayerContextProvider>
          <div className={styles.wrapper}>            
              <main>
                <GlobalStyle />
                <Toggle theme={theme} toggleTheme={toggleTheme}/>
                <Header>
                
                </Header>    
             
                <Component {...pageProps} />
              </main>
  
            <Player />
          </div>

        </PlayerContextProvider>
  
    </ThemeProvider>
  )
}

export default MyApp;
