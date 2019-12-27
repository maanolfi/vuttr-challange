import styled from 'styled-components';

import serachIcon from '../../assets/iconsearch.svg';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-rows: 100px 1fr;
`;

export const Content = styled.main`
  grid-row: 2;
  grid-column: 2;
  color: #fff;
  margin-bottom: 50px;

  h1,
  h3 {
    font-family: 'Semibold', 'Regular', 'Source Sans Pro';
    color: #fff;
    margin-bottom: 10px;
  }

  h1 {
    letter-spacing: 0.84px;
  }

  h3 {
    letter-spacing: 0.6px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    div {
      display: flex;
      align-items: center;
    }

    input[id='search'] {
      width: 303px;
      height: 50px;
      padding: 0 25px;
      border: 1px solid #ebeaed;
      border-radius: 5px;

      text-align: left;
      font-family: 'Regular', 'Source Sans Pro';
      letter-spacing: 0.4px;
      color: #b1adb9;
      background: #fff url(${serachIcon}) 5px no-repeat;
      background-size: 15px 15px;
    }

    input[type='checkbox'] {
      margin: 0 10px;
      width: 80px;
      height: 40px;
      position: relative;
      -webkit-appearance: none;
      background-color: #ebeaed;
      border-radius: 20px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }

    input:checked[type='checkbox'] {
      background-color: #12db89;
    }

    input[type='checkbox']:before {
      content: '';
      position: absolute;
      width: 35px;
      height: 35px;
      border-radius: 20px;
      top: 2px;
      left: 3px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }
    input:checked[type='checkbox']:before {
      left: 40px;
    }
  }

  button {
    background: #365df0 0% 0% no-repeat padding-box;
    border-radius: 5px;
    padding: 10px 14px;
    text-align: center;
    font-family: 'Semibold', 'Regular', 'Source Sans Pro';
    letter-spacing: 0.36px;
    color: #ffffff;
    width: 100px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
