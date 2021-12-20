import { createTheme } from '@mui/material/styles'
import { green, red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: green.A400,
    },
    secondary: {
      main: green.A200,
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
