import { useRef, useState } from 'react';
import { stripHTML } from '../modules/common/utls/stripHTML.ts';

const useEditableContent = (initialValue: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>(initialValue);

  const handleBlur = () => {
    if (ref.current) {
      setContent(stripHTML(ref.current.innerHTML));
    }
  };

  return { content, ref, handleBlur };
};

export { useEditableContent };
