import * as React from 'react';
import Button from '@mui/base/Button';
import Input, { InputProps, inputClasses } from '@mui/base/Input';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { useState } from 'react';
import { useCapitStore } from 'hooks/useStore';
import shallow from 'zustand/shallow';

const CustomInput = React.forwardRef(function CustomInput(props: InputProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { slots, ...other } = props;
  return (
    <Input
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

export const Search = ({ data, isLoading }) => {
  const [searchValue, setSearchValue] = useState('');

  const { globalChannelData } = useCapitStore(
    (state) => ({
      globalChannelData: state.globalChannelData,
    }),
    shallow
  );

  const handleChange = (e) => {
    if (isLoading) return;

    setSearchValue(e.target.value);

    if (e.target.value) {
      useCapitStore.setState({
        globalChannelData: {
          ...globalChannelData,
          data: {
            ...globalChannelData.data,
            videos: data?.videos?.filter((video) => {
              if (video.title === 'Deleted video') {
                return null;
              }
              if (video.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                return video;
              }
            }),
          },
        },
      });
    } else {
      useCapitStore.setState({ globalChannelData: { data, isLoading } });
    }
  };

  const handleResetSearchField = () => {
    setSearchValue('');
    useCapitStore.setState({ globalChannelData: { data, isLoading } });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <CustomInput
      id="outlined-adornment-password"
      value={searchValue}
      onChange={handleChange}
      placeholder="Search Video"
      disabled={isLoading}
      endAdornment={
        <InputAdornment>
          <IconButton
            aria-label="toggle password visibility"
            sx={{
              cursor: searchValue ? 'pointer' : 'default',
            }}
            onClick={handleResetSearchField}
            onMouseDown={handleMouseDownPassword}
          >
            {searchValue ? <CloseIcon /> : <SearchIcon />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

const StyledInputRoot = styled('div')(
  () => `
  font-weight: 400;
  border-radius: 4px;
  color: #FAFAFA;
  background: #59678A;
  border: 1px solid #59678A;
  display: flex;
  align-items: center;
  justify-content: center;
`
);

const StyledInputElement = styled('input')(
  () => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  color: #FAFAFA;
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 12px 12px;
  outline: 0;
  height: 40px;
    width: 538px;
    &::placeholder {
        color: #FAFAFA;
    }
`
);

const IconButton = styled(Button)(
  () => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: #FAFAFA;
  `
);

const InputAdornment = styled('div')`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
