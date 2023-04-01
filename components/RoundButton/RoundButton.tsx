import { Box, Button, Sx } from '@mantine/core';

interface RoundButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  sx?: Sx;
}

export default function RoundButton({ children, sx, ...other }: RoundButtonProps) {
  return (
    <Box>
      <Button
        style={{
          borderRadius: '50%',
        }}
        sx={sx}
        {...other}
      >
        {children}
      </Button>
    </Box>
  );
}
