import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.first};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
`;

export const ChangeTheme = styled.a`
  height: 24px;
  width: 24px;
`