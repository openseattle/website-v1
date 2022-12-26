import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function TranslucentCTACard({ heading, excerpt, callToAction }) {
  return (
    <Card sx={{ backgroundColor: '#ffffffcc' }}>
      <CardHeader title={heading} sx={{ pb: 1 }} />
      <CardContent sx={{ pt: 1 }}>
        <Typography maxWidth='60ch'>{excerpt}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          color='primary'
          href={callToAction.url}
          target='_blank'
          rel='noreferrer noopener'
          endIcon={<OpenInNewIcon />}
        >
          {callToAction.linkText}
        </Button>
      </CardActions>
    </Card>
  );
}
