import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

import Link from 'next/link'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Andy Lee
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <ButtonGroup
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Link href='/'>
              <Button>Home</Button>
            </Link>
            <Link href='/about'>
              <Button>About</Button>
            </Link>
            <Link href='/contact'>
              <Button>Contact</Button>
            </Link>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
