import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';

export default function TranslucentCTACard({ heading, excerpt, callToAction }) {
  return (
    <Card sx={{ backgroundColor: '#ffffffcc' }} data-cy='cta-card'>
      <CardHeader title={header} sx={{ pb: 1 }} />
      <CardContent sx={{ pt: 1 }}>
        <Typography maxWidth='60ch'>{excerpt}</Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          variant='contained'
          color='primary'
          href={callToAction.url}
          endIcon={<OpenInNewIcon />}
        >
          {callToAction.linkText}
        </Button>
      </CardActions>
    </Card>
  );
}
