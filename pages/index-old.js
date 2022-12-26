import { useLayoutEffect, useRef, useState } from 'react';
import { createClient } from 'next-sanity';
import Head from 'next/head';

import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Stack,
} from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import Header from '../components/Headerv2';
import TranslucentCTACard from '../components/TranslucentCTACard';
import { useNextSanityImage } from 'next-sanity-image';

export default function Home({ content }) {
  return (
    <>
      <Head>
        <title>Open Seattle</title>
        <meta name='description' content={content[0].tagline} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Box
          py={4}
          sx={{
            height: 'min-content',
            width: '100vw',
            display: 'flex',
            backgroundColor: 'primary.main',
          }}
        >
          <Container maxWidth='lg'>
            <Box
              sx={{
                width: { xs: '100%', sm: '50%' },
                overflow: 'hidden',
              }}
            >
              <Typography variant='h2'>
                Technical folks using our powers for good
              </Typography>
            </Box>
          </Container>
        </Box>
        <Container maxWidth='lg'>
          <Box py={4}>
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
                <TranslucentCTACard
                  {...content[4]}
                  callToAction={{ linkText: 'Apply now', url: '/projects' }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box py={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant='h3'
                  gutterBottom
                  textAlign={{ xs: 'center', sm: 'left' }}
                >
                  About us
                </Typography>
                <Typography
                  maxWidth='60ch'
                  gutterBottom
                  textAlign={{ xs: 'center', sm: 'left' }}
                >
                  Open Seattle makes it easier for partners, volunteers, and
                  local governments to collaborate on open source technology.
                </Typography>

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
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flex: 1,
                  gap: 1,
                }}
              >
                <Typography>{content[5].tagline}</Typography>
                <Button
                  variant='outlined'
                  color='info'
                  href={content[5].callToAction.url}
                  target='_blank'
                  rel='noreferrer noopener'
                  endIcon={<OpenInNewIcon />}
                  sx={{ width: 'max-content' }}
                >
                  {content[5].callToAction.linkText}
                </Button>
              </Grid>
            </Grid>
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
