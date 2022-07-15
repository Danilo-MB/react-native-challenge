import styled from 'styled-components';
import { Input } from 'react-native-elements';

export const StyledInput = styled(Input).attrs({
  textAlign: 'left',
  color: 'gray',
  fontSize: 15,
  lineSpacing: 23,
  containerStyle: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    paddingLeft: 18,
    paddingRight: 10,
  },
  labelStyle: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
})``;