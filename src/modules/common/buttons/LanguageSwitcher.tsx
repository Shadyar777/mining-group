import { MouseEvent } from 'react';
import { styled } from '@mui/material';
import LanguageButton from './LanguageButton.tsx';

const languages = [
  {
    icon: '🇷🇺',
    language: 'RU',
  },
  {
    icon: '🇰🇿',
    language: 'KK',
  },
  {
    icon: '🇺🇸',
    language: 'EN',
  },
];

export const StyledLanguageSwitcher = styled('div')(() => ({
  // width: '50%',
  display: 'flex',
  padding: '10px 20px',
  gap: '0 20px',
  alignSelf: 'center',
  border: '1px dashed #0052B4',
  borderRadius: '10px',
}));

type LanguageSwitcherProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const LanguageSwitcher = ({ onClick }: LanguageSwitcherProps) => {
  return (
    <StyledLanguageSwitcher>
      {languages.map(({ language, icon }, idx) => (
        <LanguageButton
          onClick={onClick}
          text={language}
          icon={icon}
          key={`${language}-${idx}`}
        />
      ))}
    </StyledLanguageSwitcher>
  );
};

export default LanguageSwitcher;
