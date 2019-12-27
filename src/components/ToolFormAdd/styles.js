import styled from 'styled-components';

export const Container = styled.div`
  max-width: 450px;

  span {
    font-family: 'Semibold', 'Regular', 'Source Sans Pro';
    letter-spacing: 0.84px;
    color: #170c3a;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      width: 400px;

      background: #ebeaed 0% 0% no-repeat padding-box;
      border: 1px solid #dedce1;
      border-radius: 5px;
      text-align: left;
      font-family: 'Regular', 'Source Sans Pro';
      padding: 5px;
      color: #170c3a;
      margin: 5px 0 10px 0;
    }

    label {
      text-align: left;
      font-family: 'Semibold', 'Source Sans Pro';
      letter-spacing: 0.4px;
      color: #170c3a;
    }

    .button {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }

    button {
      width: 174px;
      height: 50px;
      background: #365df0 0% 0% no-repeat padding-box;
      border-radius: 5px;

      text-align: center;
      font-family: 'Semibold', 'Source Sans Pro';
      letter-spacing: 0.36px;
      color: #ffffff;
    }
  }
`;
