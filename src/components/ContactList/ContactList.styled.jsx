import styled from '@emotion/styled';

export const Container = styled.div`
  margin: auto;
  width: 350px;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
  min-height: 300px;
`;

export const Name = styled.p`
  margin-left: 15px;
  color: #74a871;
`;
export const Number = styled.p`
  color: #74a871;
`;
export const Contact = styled.li`
  border: 2px solid white;
  border-radius: 52px;
  background: #27434f;
  box-shadow: inset 20px 20px 54px #101b20, inset -20px -20px 54px #3e6b7e;
  display: flex;
  justify-content: space-between;
`;

export const DeleteBtn = styled.button`
  border-width: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  &:hover,
  &:focus {
    backgrount-color: #5b9f56;
  }
`;
