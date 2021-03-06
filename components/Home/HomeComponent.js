import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const HomeSection = styled.div`
  /* height: calc(100vh - 50px); */
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 80px 0 180px;
  background: transparent;
  justify-content: center;

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    z-index: -1;
    background-image: url(/assets/rocky-stream-1280x853.jpeg), linear-gradient(${props => props.theme.primary}, ${props => props.theme.primary});
    background-repeat: no-repeat;
    background-position: center center;

    background-size: cover;
    border-radius: 100% 0 0 0/ 100px 0 0 0;
    border-top: 12px solid ${props => props.theme.logoGreen};
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
`;

const Mask = styled.div`
  position: absolute;
  bottom: -115px;
  background: #FFFFFF;
  height: 100px;
  width: 100%;
  border-top: 12px solid ${props => props.theme.logoGreen};
  border-radius: 100% 0 0 0/ 100px 0 0 0;
  bottom: -170px;
`;

const subheadBlock = css`
  position: absolute;
  width: 800px;
  max-width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 1.3s ease-in-out;
  border-radius: 30% 5px 30% 5px / 100px 0;
  transform: translate(-400px, -200px) scale(0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const subheadBlockTwo = css`
  ${subheadBlock};
  transform: translate(400px, -200px) scale(0.5);
`;

class HomeComponent extends React.Component {
  state = {
    entering: false,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({entering: true});
    });
  }

  render() {
    const {entering} = this.state;
    const enteredStyle = css`
      transform: translate(0, 0) scale(1);
      opacity: 1;
    `;
    const h2Style = css`
      text-align: center;
      font-weight: 300;
      color: #FFFFFF;

      @media screen and (max-width: 500px) {
        font-size: 12px;
        font-weight: 100;
      }
    `;
    return (
      <React.Fragment>
        <Mask/>
        <HomeSection>
          <div css={[subheadBlock, entering && enteredStyle, css`
            top: 15vh;
          `]}>
            <h2 css={h2Style}>The Lymphatic system maintains<br/> the dynamic balance of fluid in your body</h2>
          </div>
          <div css={[subheadBlockTwo, entering && enteredStyle, css`
            top: 35vh;
          `]}>
            <h2 css={h2Style}>The flow of lymphatic fluid is essential<br/>to body detoxification and immunity</h2>
          </div>
          <div css={[subheadBlock, entering && enteredStyle, css`
            top: 55vh;
          `]}>
            <h2 css={h2Style}>Manual Lymphatic Drainage is a hands-on therapy<br/> for stimulation and support of these vital processes</h2>
          </div>
        </HomeSection>
      </React.Fragment>
    );
  }
};

export default HomeComponent;
