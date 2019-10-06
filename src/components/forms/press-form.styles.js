import styled from 'styled-components';
import { Color } from '../../index.styles';

export const PressFormWrapper = styled.section`
  padding: 1em 0em;
`

export const PressFormError = styled.p`
  padding: 0.5rem 0rem;
  color: ${Color.red};
`

export const PressFormInput = styled.input`
  font-size: 1em;
  border-radius: 0;
  border: 1px solid black;
   padding: 0.5em 0.5em;
   width: 19rem;
`