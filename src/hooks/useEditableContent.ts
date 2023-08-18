import { useRef, useState, ClipboardEvent } from 'react';
import { stripHTML } from '../modules/common/utls/stripHTML.ts';

const useEditableContent = (initialValue: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>(initialValue);

  const handleBlur = () => {
    if (ref.current) {
      setContent(stripHTML(ref.current.innerHTML));
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');

    if (ref.current && document.getSelection) {
      // Получаем текущее выделение в документе
      const selection = document.getSelection();
      if (selection?.rangeCount) {
        // Удалите выделенный текст (если таковой имеется)
        selection.deleteFromDocument();
        // Вставьте новый текст на место выделения
        selection.getRangeAt(0).insertNode(document.createTextNode(text));
      }
    }
  };

  return { content, ref, handleBlur, handlePaste };
};

export { useEditableContent };
