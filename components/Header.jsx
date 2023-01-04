import {
  AppBar,
  Box,
  Container,
  ButtonBase,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <AppBar color='transparent' position='sticky'>
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <ButtonBase
              component={Link}
              href='/'
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                py: 1,
                borderRadius: 2,
              }}
            >
              <Box>
                <Typography
                  fontFamily='oswald'
                  fontSize={28}
                  fontWeight={400}
                  sx={{ lineHeight: 1 }}
                  component='h1'
                >
                  Open Seattle
                </Typography>
              </Box>
            </ButtonBase>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
