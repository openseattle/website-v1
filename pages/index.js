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
import Section from '../components/Section';

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
