import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import { Dialog, DialogContent, IconButton, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CloseIcon from '@mui/icons-material/Close';
import useImageUploader from '../../../../../hooks/useImageUploader.ts';

import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const StyledEditPDF = styled('div')({
  position: 'relative',
  '& .action-icons': {
    position: 'absolute',
    top: '15px',
    right: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: '#FFF',
    borderRadius: '50px',
    padding: '12px 16px',
  },

  '& label': {
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .hidden-input': {
    display: 'none',
  },
  '& .edit__delete, .edit__edit-image': {
    color: '#505050',
  },
  '& .edit__icon-button-delete': {
    padding: '0',
  },

  '& .pdf-preview': {
    maxHeight: '400px',
    overflow: 'auto',
  },
  '& .placeholder-icon': {
    fontSize: 100,
    color: '#ccc',
  },
});

type EditPDFProps = {
  urlPdf: string | ArrayBuffer | null;
  setUploadedPdf: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
};

const EditPDF = ({ urlPdf, setUploadedPdf }: EditPDFProps) => {
  const [open, setOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);

  const { uploadedImage, handleImageUpload, handleImageRemove } =
    useImageUploader({
      initialImage: urlPdf as string,
      textMessage: 'Неправильный формат PDF!',
    });

  useEffect(() => {
    if (urlPdf) {
      setUploadedPdf(urlPdf);
    }
  }, [urlPdf, setUploadedPdf]);

  useEffect(() => {
    setUploadedPdf(uploadedImage);
  }, [uploadedImage, setUploadedPdf]);

  return (
    <StyledEditPDF className='edit__pdf'>
      {uploadedImage ? (
        <>
          <label onClick={() => setOpen(true)}>
            <PictureAsPdfIcon style={{ fontSize: 100, color: '#ccc' }} />
          </label>
          <p style={{ textAlign: 'center' }}>Проверить файл</p>
          <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
            <DialogContent>
              <IconButton
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  zIndex: 10,
                }}
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </IconButton>
              <Document
                file={uploadedImage as string}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              >
                {Array.from(new Array(numPages || 0), (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    scale={1.0}
                  />
                ))}
              </Document>
            </DialogContent>
          </Dialog>
          <div className='action-icons'>
            <label>
              <input
                type='file'
                accept='application/pdf'
                onChange={handleImageUpload}
                className='hidden-input'
              />
              <AddPhotoAlternateOutlinedIcon className='edit__edit-pdf' />
            </label>
            <IconButton
              className='edit__icon-button-delete'
              onClick={handleImageRemove}
            >
              <DeleteIcon className='edit__delete' />
            </IconButton>
          </div>
        </>
      ) : (
        <label>
          <input
            type='file'
            accept='application/pdf'
            onChange={handleImageUpload}
            className='hidden-input'
          />
          <PictureAsPdfIcon style={{ fontSize: 100, color: '#ccc' }} />
        </label>
      )}
    </StyledEditPDF>
  );
};

export default EditPDF;
