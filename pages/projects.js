import { useForm } from 'react-hook-form';
import { Container, Box, Stack, Button } from '@mui/material';
import {
  FormContainer,
  TextFieldElement,
  RadioButtonGroup,
} from 'react-hook-form-mui';

export default function Projects() {
  const formContext = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      organizationType: null,
      website: '',
      projectTitle: '',
      projectDetails: '',
    },
  });

  const { reset } = formContext;
  return (
    <main>
      <h1>Partner</h1>
      <Container>
        <FormContainer
          onSuccess={(data) => console.log(data)}
          formContext={formContext}
        >
          <Stack gap={2}>
            <Box component='fieldset' sx={{ borderRadius: 2 }}>
              <legend>Contact Details</legend>
              <Stack gap={2}>
                <TextFieldElement name='name' label='Name' required />
                <TextFieldElement name='email' label='Email' required />
                <TextFieldElement
                  name='phone'
                  label='Phone Number'
                  helperText='For those rare times when other communication channels break down.'
                  required
                />
                <TextFieldElement
                  name='organization'
                  label='Organization'
                  helperText='What organization do you represent?'
                  required
                />

                <RadioButtonGroup
                  name='organizationType'
                  label='Organization Type'
                  options={[
                    { label: 'Government Agency', id: 'government' },
                    { label: 'Nonprofit', id: 'nonprofit' },
                    { label: 'Community Organization', id: 'community' },
                    { label: 'For-profit Company', id: 'for-profit' },
                    { label: 'Other', id: 'other' },
                  ]}
                  row
                  required
                />

                <TextFieldElement
                  name='website'
                  label='Website'
                  helperText='Where can we find your organization online?'
                />
              </Stack>
            </Box>
            <Box component='fieldset' sx={{ borderRadius: 2 }}>
              <legend>Project</legend>
              <Stack gap={2}>
                <TextFieldElement
                  name='projectTitle'
                  label='Project Title'
                  helperText="What is the name of the project? It's okay if this is just a working title!"
                  required
                />
                <TextFieldElement
                  name='projectDetails'
                  label='Project Details'
                  helperText='Tell us a little about the project.'
                  required
                />
              </Stack>
            </Box>
            <Button type='reset' variant='contained' onClick={reset}>
              Reset
            </Button>
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </Stack>
        </FormContainer>
      </Container>
    </main>
  );
}
