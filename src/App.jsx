import './App.css'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Layout } from './components/Layout/Layout';
import { GlobalStyles } from './styles/global';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
          <Header />
          <Main />
      </Layout>
    </ThemeProvider>
  )
}

export default App
