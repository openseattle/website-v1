import { useLayoutEffect, useRef, useState } from 'react';
import { createClient } from 'next-sanity';
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
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';

export default function Home({ content }) {
  const windowSize = useWindowSize();
  const ref = useRef(null);

  const [toolbarHeight, setToolbarHeight] = useState(0);

  const imageProps = useNextSanityImage(client, content[0].image);
  useLayoutEffect(() => {
    setToolbarHeight(ref.current.clientHeight);
  }, [windowSize]);

  return (
    <>
      <Head>
        <title>Open Seattle</title>
        <meta name='description' content={content[0].tagline} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeBackdrop>
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          alt={imageProps.alt}
          objectFit='cover'
          fill
        />
      </HomeBackdrop>
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
              <TranslucentCTACard {...content[3]} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TranslucentCTACard {...content[4]} />
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              p: 4,
            }}
          >
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
                <Typography>{content[5].tagline}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  variant='outlined'
                  color='info'
                  href={content[5].callToAction.url}
                  target='_blank'
                  rel='noreferrer noopener'
                  endIcon={<OpenInNewIcon />}
                >
                  {content[5].callToAction.linkText}
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Container>
        {/* <pre>{JSON.stringify(content, null, 2)}</pre> */}
      </main>
    </>
  );
}

const client = createClient({
  projectId: 'c0yyoz8w',
  dataset: 'production',
  apiVersion: '2022-12-22',
  useCdn: false,
});

export async function getStaticProps() {
  const landingPage = await client.fetch('*[_type == "landing-page"]');
  const content = landingPage[0].pageBuilder;
  return {
    props: {
      content,
    },
  };
}
