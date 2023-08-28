import { CSSProperties } from 'react';
import PinInput from 'react-pin-input';

// const StyledPinCode = styled(PinInput)(() => ({
//   '& .pincode-input-text': {
//     // DBDBDB
//     borderBottom: '1px solid yellow !important',
//   },
// }));

const stylesInput: CSSProperties = {
  color: '#FFF',
  textAlign: 'center',
  fontSize: '36px',
  fontWeight: '400',
  minWidth: '30px',
  borderBottom: '1px solid white',
};

type PinCodeProps = {
  length?: number;
  setPinCode: (value: string) => void;
};
const PinCode = ({ length = 6, setPinCode }: PinCodeProps) => {
  return (
    <PinInput
      length={length}
      secret={false}
      onChange={(value) => {
        setPinCode(value);
      }}
      type='numeric'
      style={{
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'unset',
        borderRadius: '20px',
      }}
      inputStyle={stylesInput}
      // inputFocusStyle={{ borderColor: 'blue' }}
      // onComplete={onComplete}
    />
  );
};

export default PinCode;
