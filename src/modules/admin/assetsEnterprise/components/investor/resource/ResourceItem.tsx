import { FC, ReactElement } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';

interface ResourceItemProps {
  icon: ReactElement;
  text: string;
  isChecked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const ResourceItem: FC<ResourceItemProps> = ({
  icon,
  text,
  isChecked,
  onCheckedChange,
}) => {
  return (
    <Box display='flex' alignItems='center' gap={2}>
      <Checkbox
        checked={isChecked}
        onChange={(event) => onCheckedChange(event.target.checked)}
      />
      {icon}
      <Typography>{text}</Typography>
    </Box>
  );
};
