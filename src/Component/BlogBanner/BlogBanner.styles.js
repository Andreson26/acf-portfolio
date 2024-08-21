import styled from 'styled-components';

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-right: 30px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props=> props.theme.colors.navbarBackground};
  outline: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  item-align: center;
  margin-left: 30px;

  &:hover {
    background-color: #0056b3;
  }
`;