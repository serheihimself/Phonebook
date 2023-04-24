import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: auto;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  padding: 5px 15px;
  border: 1px solid #a9a9a9;
  height: 45px;
  margin-top: 5px;
  border-radius: 4px;
`;

export const Button = styled.button`
  min-width: 150px;
  min-height: 40px;
  font-family: inherit;
  font-size: 18px;
  line-height: inherit;
  font-weight: 700;
  border: none;
  color: var(--main-txt-color);
  border-radius: 4px;
  background-color: greenyellow;
  cursor: pointer;
`;
