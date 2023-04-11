import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
`;
export const Number = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NameField = styled.label`
  font-size: 18px;
  color: white;
`;

export const NameInput = styled.input`
  padding: 10px;
  border-radius: 1rem;
  background: #e8e8e8;
  box-shadow: 2px 2px 10px #c5c5c5, -2px -2px 10px #6e8dbf;
  transition: 0.3s;
  border-width: 0;
  &:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 10px 10px 30px #c5c5c5, inset -10px -10px 30px #6e8dbf;
    transition: 0.3s;
  }
`;

export const NumberField = styled.label`
  font-size: 18px;
  color: white;
`;

export const NumberInput = styled.input`
  border: none;
  padding: 10px;
  border-radius: 1rem;
  background: #e8e8e8;
  box-shadow: 2px 2px 10px #c5c5c5, -2px -2px 10px #6e8dbf;
  transition: 0.3s;
  &:focus {
    outline-color: #e8e8e8;
    background: #e8e8e8;
    box-shadow: inset 10px 10px 30px #c5c5c5, inset -10px -10px 30px #6e8dbf;
    transition: 0.3s;
  }
`;

export const Button = styled.button`
  padding: 15px 20px;
  border-radius: 52px;
  border: 2px solid white;
  background: #2a2e41;
  box-shadow: inset 20px 20px 54px #11121a, inset -20px -20px 54px #434a68;
  color: white;
  font-size: 16px;
  &:hover {
    background: #74a871;
    box-shadow: inset 20px 20px 54px #2e432d, inset -20px -20px 54px #baffb5;
  }
`;
