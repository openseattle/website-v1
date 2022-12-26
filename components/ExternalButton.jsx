import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function ExternalButton(props) {
  return (
    <Button
      href={props.href}
      target='_blank'
      rel='noreferrer noopener'
      endIcon={<OpenInNewIcon />}
      {...props}
    >
      {props.label}
    </Button>
  );
}
