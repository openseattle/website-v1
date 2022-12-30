import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function TranslucentCTACard({ header, body, link }) {
  return (
    <Card sx={{ backgroundColor: '#ffffffcc' }} data-cy="cta-card">
      <CardHeader title={header} sx={{ pb: 1 }} />
      <CardContent sx={{ pt: 1 }}>
        <Typography maxWidth='60ch'>{body}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          color='primary'
          href={link}
          target='_blank'
          rel='noreferrer noopener'
          endIcon={<OpenInNewIcon />}
        >
          Apply now
        </Button>
      </CardActions>
    </Card>
  );
}
