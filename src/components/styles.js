import styled from "styled-components";

export const Div=styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  `;

export const H1 = styled.h1`
  color: #009CDE;
  text-align: center;
`;

export const Form=styled.form`
  display: flex;
  gap:10px;
  margin-bottom:20px
  border-color: skyblue;
`
export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color:rgb(46, 187, 247);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color:rgb(128, 204, 255);
  } ;
  }
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0px;
  background-color: skyblue;
  border-radius: 4px;

  &:hover {
    background-color:rgb(102, 189, 247)
`;
