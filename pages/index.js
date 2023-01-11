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
  ButtonBase,
  Divider,
} from '@mui/material';

import ExternalButton from '../components/ExternalButton';
import { useNextSanityImage } from 'next-sanity-image';
import Section from '../components/Section';
import Image from 'next/image';
import Link from '../components/Link';

export default function Home({ content, footerContent }) {
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
            const imageProps = useNextSanityImage(client, section.image);
            return (
              <Section
                section={section}
                index={index}
                imageProps={imageProps}
              />
            );
          })}
        </Stack>
      </main>
      <Box component='footer' sx={{ mt: 'auto' }}>
        <Divider />
        <Container
          maxWidth='xl'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4,
          }}
        >
          <Typography align='center' variant='body1' gutterBottom>
            {footerContent[0].tagline}
          </Typography>
          <Stack
            justifyContent='center'
            gap={{ xs: 0, sm: 2 }}
            divider={
              <Divider
                orientation={{
                  xs: 'horizontal',
                  sm: 'vertical',
                }}
                flexItem
              />
            }
            direction={{ xs: 'column', sm: 'row' }}
          >
            {footerContent[0].footerLinks.map((link) => (
              <Link
                align='center'
                underline='none'
                href={link.url}
                sx={{
                  color: '#121212',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {link.linkText}
              </Link>
            ))}
          </Stack>
        </Container>
      </Box>
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
  const footerContent = await client.fetch('*[_type == "footer"]');
  const content = landingPage[0].pageBuilder;
  return {
    props: {
      content,
      footerContent,
    },
  };
}
