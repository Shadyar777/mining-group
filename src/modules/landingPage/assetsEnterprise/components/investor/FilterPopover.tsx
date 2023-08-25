import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Popover,
  styled,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { QueryFieldsParams } from '../../../../../rtk-query/types/fields-types.ts';
import { getListIconResources } from '../../../../common/utls/getListIconResources.tsx';
import { useTranslation } from 'react-i18next';

type TFilterPopoverProps = {
  anchorEl: HTMLElement | null;
  handlePopoverClose: () => void;
  setFieldsParams: Dispatch<SetStateAction<QueryFieldsParams>>;
  paramResources: QueryFieldsParams['resources'];
};

interface IFormInput {
  [resourceName: string]: boolean;
}

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

const resourcesList = getListIconResources();

const getSelectedResources = (
  resourceObj: Record<string, boolean>,
): string[] => {
  return Object.keys(resourceObj).filter((key) => resourceObj[key]);
};

const FilterPopover = ({
  anchorEl,
  handlePopoverClose,
  setFieldsParams,
  paramResources,
}: TFilterPopoverProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'assetsEnterprise',
  });

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [checkboxState, setCheckboxState] = useState<IFormInput>(
    resourcesList.reduce(
      (acc, resource) => ({
        ...acc,
        [resource.name]: paramResources?.includes(resource.name),
      }),
      {},
    ),
  );
  const onClickNewOrOld = (value: 'new' | 'old') => {
    setFieldsParams((prevState) => ({ ...prevState, orderBy: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setCheckboxState((prevState) => ({ ...prevState, [name]: checked }));
  };

  useEffect(() => {
    setFieldsParams((prevState) => ({
      ...prevState,
      resources: getSelectedResources(checkboxState),
    }));
  }, [checkboxState, setFieldsParams]);

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
            <Typography className='filter__common'>{t('sort')}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'span'} className='filter__publication-date'>
              {t('byPublicationDate')}
            </Typography>
            <div className='filter__new-old'>
              <div onClick={() => onClickNewOrOld('new')}>{t('new')}</div>
              <div onClick={() => onClickNewOrOld('old')}>{t('old')}</div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className='filter__common'>
              {t('mineralResource')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
            }}
          >
            {resourcesList.map((resource) => (
              <label
                key={resource.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '20px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                }}
              >
                <Checkbox
                  checked={checkboxState[resource.name] || false}
                  onChange={(e) =>
                    handleCheckboxChange(resource.name, e.target.checked)
                  }
                />
                {resource.icon}
                <Typography style={{ marginLeft: '10px' }}>
                  {resource.name}
                </Typography>
              </label>
            ))}
          </AccordionDetails>
        </Accordion>
      </StyledPopover>
    </div>
  );
};

export default FilterPopover;
