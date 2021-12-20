import Meta from './Meta'
import Nav from './Nav'
import theme from '../../styles/theme'
import { ThemeProvider } from '@mui/material'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </main>
      </div>
    </>
  )
}

export default Layout
