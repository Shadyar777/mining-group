import { useRef, useState } from 'react';

const useEditableContent = (initialValue: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>(initialValue);

  const handleBlur = () => {
    if (ref.current) {
      setContent(ref.current.innerHTML);
    }
  };

  return { content, ref, handleBlur };
};

export { useEditableContent };
