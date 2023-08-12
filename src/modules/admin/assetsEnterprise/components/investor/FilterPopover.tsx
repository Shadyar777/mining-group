import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Popover,
  styled,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

type TFilterPopoverProps = {
  anchorEl: HTMLElement | null;
  handlePopoverClose: () => void;
};

const StyledPopover = styled(Popover)(({ theme: { breakpoints } }) => ({
  '& .filter__common': {
    color: 'inherit',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 300,
  },
  '& .MuiPopover-paper, .MuiAccordion-root': {
    background: '#FFF8EC !important',
  },
  '& .Mui-expanded': {
    margin: '0 !important',
    height: '0% !important',
  },
  '& .MuiAccordionSummary-root, .MuiButtonBase-root': {
    height: '0% !important',
  },

  '& .filter__publication-date': {
    color: '#6A6A6A',
    fontSize: '12px',
    fontWeight: 400,
  },
  '& .filter__new-old': {
    color: '#6A6A6A',
    fontSize: '12px',
    fontWeight: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',

    '& > div': {
      width: '100%',
      padding: '3px 8px',
      cursor: 'pointer',
    },
  },
  // '& .filter__publication-date': {},
  [breakpoints.down('sm')]: {},
}));

const FilterPopover = ({
  anchorEl,
  handlePopoverClose,
}: TFilterPopoverProps) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { register, watch } = useForm();

  const watchAllFields = watch();

  useEffect(() => {
    console.log(watchAllFields);
  }, [watchAllFields]);

  return (
    <div>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className='filter__common'>Сортировка</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'span'} className='filter__publication-date'>
              По дате публикации:
            </Typography>
            <div className='filter__new-old'>
              <div>Новые</div>
              <div>Старые</div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className='filter__common'>
              Полезные ископаемые
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel
              className='filter__common'
              control={<Checkbox {...register('Ископаемое 1')} />}
              label='Ископаемое 1'
            />
            <FormControlLabel
              className='filter__common'
              control={<Checkbox {...register('Ископаемое 2')} />}
              label='Ископаемое 2'
            />
          </AccordionDetails>
        </Accordion>
      </StyledPopover>
    </div>
  );
};

export default FilterPopover;
