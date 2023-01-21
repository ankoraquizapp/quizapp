import { Alert } from '@mui/material';
import '@fontsource/barlow';

export const RootComponent = () => {
  return (
    <Alert severity="info">
      <strong style={{ fontFamily: 'Barlow' }}>Welcome to quiz app!</strong>
    </Alert>
  );
};
