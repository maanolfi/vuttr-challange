import styled from 'styled-components';

export const Container = styled.article`
  position: relative;
  margin-top: 50px;
  background-color: #b9c6fa;
  width: 100%;
  height: 150px;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    transform: skew(2deg, 2deg);
    background-color: #fff;
    z-index: 0;
  }

  > div {
    color: #222;
    position: relative;
    padding: 20px;

    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #222;
        border-radius: 5px;
        letter-spacing: 0.36px;
        background: none;
        height: 20px;
      }
    }

    aside {
      font-family: 'Regular', 'Source Sans Pro';
      letter-spacing: 0.4px;
      color: #170c3a;
    }

    footer {
      margin: 10px 0 10px 0;
    }
  }
`;

export const ModalRemove = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  span {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    margin: 15px;
    justify-content: flex-end;

    button {
      width: 150px;
      height: 50px;
      background: #365df0;
      border-radius: 5px;
      margin-left: 10px;
      text-align: center;
      font-family: 'Semibold', 'Source Sans Pro';
      letter-spacing: 0.36px;
      color: #ffffff;
      padding: 10px 14px;

      :hover {
        background-color: #2f55cc;
      }
    }
  }
`;
