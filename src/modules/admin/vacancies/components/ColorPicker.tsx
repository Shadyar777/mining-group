import { FC } from 'react';
import { styled } from '@mui/material';
import {
  colorForColorPicker,
  ColorForColorPickerType,
} from '../utils/colorForColorPicker.ts';

type ColorProps = {
  color: string;
  selected: boolean;
  onClick: () => void;
};

type ColorBlockProps = {
  color: string;
  selected: boolean;
};

const ColorBlock = styled('div')<ColorBlockProps>(({ color, selected }) => ({
  width: '32px',
  height: '32px',
  backgroundColor: color,
  cursor: 'pointer',
  border: selected ? '3px solid black' : 'none',
}));
const Color: FC<ColorProps> = ({ color, selected, onClick }) => {
  return <ColorBlock color={color} selected={selected} onClick={onClick} />;
};

type ColorPickerProps = {
  value?: ColorForColorPickerType;
  onChange: (color: string) => void;
};

const ColorPicker: FC<ColorPickerProps> = ({ value, onChange }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {colorForColorPicker.map((color) => (
        <Color
          key={color}
          color={color}
          selected={color === value}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
