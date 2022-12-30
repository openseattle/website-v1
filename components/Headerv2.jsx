import {
  AppBar,
  Box,
  Container,
  ButtonBase,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import logoImage from '../public/openseattle-500x392.png';

export default function Header() {
  return (
    <header>
      <AppBar color='transparent' position='sticky'>
        <Container maxWidth='lg'>
          <Toolbar sx={{ backgroundColor: 'white' }} disableGutters>
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
              <Image width={50} src={logoImage} alt='logo' />
              <Box>
                <Typography
                  fontSize={28}
                  fontWeight={400}
                  sx={{ lineHeight: 1 }}
                >
                  Open
                  <br />
                  Seattle
                </Typography>
              </Box>
            </ButtonBase>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
