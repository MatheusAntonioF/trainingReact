import styled from "styled-components";

export const Container = styled.div`
  max-width: 25%;
  margin: 12% auto;
  background: #eee;
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  -webkit-box-shadow: 3px 3px 18px -10px rgba(224, 197, 224, 1);
  -moz-box-shadow: 3px 3px 18px -10px rgba(224, 197, 224, 1);
  box-shadow: 3px 3px 18px -10px rgba(224, 197, 224, 1);

  label {
    font-size: 16px;
    margin-bottom: 5px;

    & {
      margin-top: 10px;
    }
  }

  input {
    margin-bottom: 15px;
    border: 0;
    border-bottom: 2px solid rgba(240, 90, 91, 0.5);
    height: 30px;
    padding: 5px;
    border-radius: 5px;
  }

  div {
    padding-bottom: 15px;

    a {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      text-decoration: none;
      font-size: 12px;
      color: #eb2d2d;

      &:hover {
        color: #d21414;
      }
    }
  }

  button {
    font-size: 17px;
    height: 32px;
    background: #e91616;
    border: 0;
    color: whitesmoke;
    border-radius: 5px;

    &:hover {
      background: #19181f;
      color: #eb2d2d;

      transition: color 0.5s, background 0.5s;
    }
  }
`;

export const Password = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  input {
    margin-bottom: 15px;
    border: 0;
    border-bottom: 2px solid rgba(240, 90, 91, 0.5);
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    width: 70%;
  }

  svg {
    margin-left: 5px;
    margin-bottom: 15px;
    color: #4d4d4d;

    &:hover{
      cursor: pointer;
    }
  }
`;
