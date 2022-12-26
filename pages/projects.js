import { useForm, Controller } from 'react-hook-form';
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material';

export default function Projects() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { name: '' },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <main>
      <h1>Projects</h1>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Contact Details</legend>
            <Stack gap={4}>
              <Controller
                name='name'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField label='Name' helperText='' {...field} />
                )}
                defaultValue=''
              />
              <Controller
                name='email'
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextField label='Email' {...field} />}
                defaultValue=''
              />
              <Controller
                name='phone'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    label='Phone Number'
                    helperText='For those rare times when other communication channels break down.'
                    {...field}
                  />
                )}
                defaultValue=''
              />

              <Controller
                name='organization'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    label='Organization'
                    helperText='What organization do you represent?'
                    {...field}
                  />
                )}
                defaultValue=''
              />

              <Controller
                name='organization-type'
                control={control}
                rules={{ required: true }}
                defaultValue=''
                render={({ field }) => (
                  <FormControl>
                    <FormLabel id='organization-type'>
                      Organization Type
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby='organization-type'
                      defaultValue=''
                      name='organization-type'
                      row
                      {...field}
                    >
                      <FormControlLabel
                        value='government'
                        control={<Radio />}
                        label='Government Agency'
                      />
                      <FormControlLabel
                        value='nonprofit'
                        control={<Radio />}
                        label='Nonprofit'
                      />
                      <FormControlLabel
                        value='community'
                        control={<Radio />}
                        label='Community Organization'
                      />
                      <FormControlLabel
                        value='for-profit'
                        control={<Radio />}
                        label='For-profit Company'
                      />
                      <FormControlLabel
                        value='other'
                        control={<Radio />}
                        label='Other'
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              />

              <Controller
                name='website'
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <TextField
                    label='Website'
                    helperText='Where can we find your organization online?'
                    {...field}
                  />
                )}
                defaultValue=''
              />
            </Stack>
          </fieldset>
          <fieldset>
            <legend>Project</legend>
            <Stack gap={4}>
              <Controller
                name='project-title'
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <TextField
                    label='Project Title'
                    helperText="What is the name of the project? It's okay if this is just a working title!"
                    {...field}
                  />
                )}
                defaultValue=''
              />

              <Controller
                name='project-details'
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <TextField
                    label='Project Details'
                    multiline
                    helperText='Tell us a little about the project.'
                    {...field}
                  />
                )}
                defaultValue=''
              />
            </Stack>
          </fieldset>
          <input type='submit' />
        </form>
      </Container>
    </main>
  );
}
