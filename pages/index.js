import { useLayoutEffect, useEffect, useRef, useState } from 'react';

import Head from 'next/head';

import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Stack,
} from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import useWindowSize from '../utils/hooks/useWindowSize';
import Header from '../components/Header';
import TranslucentCTACard from '../components/TranslucentCTACard';
import HomeBackdrop from '../components/HomeBackdrop';

const volunteerCard = {
  header: 'Volunteer',
  body: 'Willing to be a regular contributor to a project helping your community? Apply to become an Open Seattle Volunteer.',
  link: 'https://airtable.com/shrU3QaEEyYH427HP',
};

const partnerCard = {
  header: 'Partner',
  body: 'Have a vision for the community you serve but need some help in execution? Apply to become an Open Seattle Partner.',
  link: 'https://airtable.com/shrHFwLdWCuIErqT5',
};

export default function Home() {
  const windowSize = useWindowSize();
  const ref = useRef(null);

  const [toolbarHeight, setToolbarHeight] = useState(0);

  useEffect(() => {
    setToolbarHeight(ref.current.clientHeight);
  }, [windowSize]);

  return (
    <>
      <Head>
        <title>Open Seattle</title>
        <meta
          name='description'
          content='Technical folks using our powers for good.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeBackdrop />
      <Header ref={ref} />
      <main>
        <Container sx={{ height: `calc(100vh - ${toolbarHeight}px)`, p: 4 }}>
          <Typography
            variant='h3'
            gutterBottom
            textAlign={{ xs: 'center', sm: 'left' }}
          >
            Get Involved
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TranslucentCTACard {...volunteerCard} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TranslucentCTACard {...partnerCard} />
            </Grid>
          </Grid>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant='h2'>About us</Typography>
          <Typography variant='h4'>Open Source</Typography>
          <Typography maxWidth='60ch'>
            Open Seattle makes it easier for partners, volunteers, and local
            governments to collaborate on open source technology.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, p: 4 }}>
            <Stack gap={1}>
              <Paper
                elevation={1}
                sx={{ display: 'flex', py: 2, px: 4, gap: 2 }}
              >
                <CheckIcon />
                <Typography>Built for communities</Typography>
              </Paper>
              <Paper
                elevation={1}
                sx={{ display: 'flex', py: 2, px: 4, gap: 2 }}
              >
                <CheckIcon />
                <Typography>Free for all to use</Typography>
              </Paper>
              <Paper
                elevation={1}
                sx={{ display: 'flex', py: 2, px: 4, gap: 2 }}
              >
                <CheckIcon />
                <Typography>Free to modify</Typography>
              </Paper>
            </Stack>
            <Card elevation={0}>
              <CardContent>
                <Typography>Questions about Open Seattle?</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant='outlined'
                  color='info'
                  href='https://airtable.com/shrji3lVSeBIFurC1'
                  target='_blank'
                  rel='noreferrer noopener'
                  endIcon={<OpenInNewIcon />}
                >
                  Contact us
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
      </main>
    </>
  );
}
