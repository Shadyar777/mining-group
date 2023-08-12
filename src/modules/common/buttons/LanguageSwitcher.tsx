import { MouseEvent, useEffect, useState } from 'react';
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
  display: 'flex',
  padding: '10px 20px',
  gap: '0 20px',
  alignSelf: 'center',
  border: '1px dashed #0052B4',
  borderRadius: '10px',
}));

type LanguageSwitcherProps = {
  onClick?: (language: string) => void;
};

const LanguageSwitcher = ({ onClick }: LanguageSwitcherProps) => {
  const [activeLanguage, setActiveLanguage] = useState<string>('EN'); // устанавливаем EN как язык по умолчанию

  const handleButtonClick = (
    _: MouseEvent<HTMLButtonElement>,
    language: string,
  ) => {
    setActiveLanguage(language);
    if (onClick) {
      onClick(language);
    }
  };

  useEffect(() => {
    return () => {
      setActiveLanguage('RU');
    };
  }, []);

  return (
    <StyledLanguageSwitcher className='language-switcher'>
      {languages.map(({ language, icon }, idx) => (
        <LanguageButton
          onClick={(e) => handleButtonClick(e, language)}
          text={language}
          icon={icon}
          isActive={activeLanguage === language}
          key={`${language}-${idx}`}
        />
      ))}
    </StyledLanguageSwitcher>
  );
};

export default LanguageSwitcher;
