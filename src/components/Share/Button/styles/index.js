import styled, { css } from 'styled-components';

export const CustomButton = styled.button.attrs(() => ({
  className: 'CustomButton',
}))`
  width: 100px;
  padding: 10px 30px;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  margin: 0 5px;

  ${(props) => {
    switch (props.variant) {
      case 'typeA':
        return css`
          background-color: ${({ theme }) => theme.colors.blue2};
          color: ${({ theme }) => theme.colors.grey1};
        `;
      case 'typeB':
        return css`
          background-color: ${({ theme }) => theme.colors.blue1};
          color: ${({ theme }) => theme.colors.grey1};
        `;
      default:
        return css`
          background-color: #7b7b7b;
          color: ${({ theme }) => theme.colors.grey1};
        `;
    }
  }};
`;
