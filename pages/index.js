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

import ExternalButton from '../components/ExternalButton';
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
        <Stack>
          {content.map((section, index) => {
            return (
              <Container
                key={section._key}
                data-cy='home-section'
                maxWidth='lg'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  backgroundColor: index % 2 === 0 ? '#242424' : '#cccccc',
                  color: index % 2 === 0 ? '#ffffff' : '#121212',
                  height: { xs: '380px' },
                }}
              >
                <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                  <Typography variant='h2'>{section.heading}</Typography>
                  {section.tagline && (
                    <Typography
                      maxWidth='60ch'
                      variant='body1'
                      fontSize='1.5rem'
                      gutterBottom
                    >
                      {section.tagline}
                    </Typography>
                  )}
                  {section.excerpt && (
                    <Typography
                      maxWidth='60ch'
                      variant='body1'
                      fontSize='1.5rem'
                      gutterBottom
                    >
                      {section.excerpt}
                    </Typography>
                  )}
                  {section.callToAction && (
                    <ExternalButton
                      variant='contained'
                      color='secondary'
                      href={section.callToAction.url}
                      label={section.callToAction.linkText}
                    />
                  )}
                </Box>
              </Container>
            );
          })}
        </Stack>
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
