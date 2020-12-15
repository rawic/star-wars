import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './mainTheme';
import { device } from '@utilities';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, &::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // Anti-pattern ;)
  html {
    font-size: 62.5%;
  }

  body {
    background: #000;
    color: #fff;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: 'Mukta', sans-serif;
    font-variant-ligatures: no-common-ligatures;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    position: relative;
    padding-top: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
    @media ${device.xs} {
      padding-top: 20rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  a {
    text-decoration: none;
  }

  input, button {
    font-family: 'Mukta', sans-serif;
  }

  button {
    background-color: transparent;
    font-weight: 600;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-weight: ${theme.fontWeight.semibold};

    &:not([class]):hover {
      color: ${theme.highlight};
    }
  }

  .credentials {
    margin-top: 2rem;
    color: #666;
    .heading {
      padding-bottom: 1rem;
    }
  }

  .stars-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    perspective: 340px;
    z-index: -1;
  }

  .stars {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 2px;
    box-shadow: -238px 108px #f7f7f7, 193px -376px #f7f7f7, -1264px -60px #fafafa,
      145px -443px #c9c9c9, -1440px 37px #f7f7f7, 262px -136px #cfcfcf,
      212px 219px #e3e3e3, 319px 223px #c7c7c7, 1246px -51px #c9c9c9,
      308px 26px #e0e0e0, 147px 229px #e6e6e6, -1041px 450px #d1d1d1,
      671px 86px white, -921px 234px #f0f0f0, -957px 242px #e8e8e8,
      1249px -285px #d1d1d1, 741px 434px #d9d9d9, -1030px 330px #ededed,
      311px -475px #fcfcfc, -413px -105px #d4d4d4, 868px -435px #f7f7f7,
      -790px 289px #dbdbdb, 202px 427px #fcfcfc, -22px -158px #c9c9c9,
      -1294px -297px #cccccc, -63px 200px #f0f0f0, -592px -86px #f7f7f7,
      -732px 366px white, -1426px -262px #e8e8e8, 475px -400px #c9c9c9,
      -1442px -153px #f7f7f7, 1124px -219px #ededed, 701px 257px #f0f0f0,
      36px -179px #ebebeb, -937px 480px #f7f7f7, -267px -418px #f2f2f2,
      1467px 127px #cfcfcf, -1128px 274px #d1d1d1, -180px 430px #e0e0e0,
      624px 275px #fafafa, -473px 150px #e6e6e6, -537px -348px #d4d4d4,
      410px 455px #ebebeb, 497px -29px #cccccc, 416px -370px whitesmoke,
      977px 82px #c2c2c2, 1209px -222px #f0f0f0, 637px 360px #fcfcfc,
      -1049px 409px white, 959px 407px #c9c9c9, -1153px -168px #dedede,
      -437px -216px #dbdbdb, -572px 420px #fcfcfc, -228px 78px #dbdbdb,
      -925px 452px #cccccc, 244px 30px #c4c4c4, 453px -336px #dedede,
      993px -63px #c2c2c2, 670px -343px #d9d9d9, -1088px 344px #fcfcfc,
      -170px -153px #c4c4c4, 987px -208px #d1d1d1, 596px 166px #fcfcfc,
      -1362px -28px #c4c4c4, 1291px -106px #e3e3e3, -1128px 169px #ededed,
      1056px 367px #ebebeb, 261px -128px #cccccc, 1017px 401px #cccccc,
      1381px 245px #e3e3e3, 536px -113px #fafafa, -92px -217px #e3e3e3,
      1481px 268px #d1d1d1, 832px -345px #cccccc, -863px 138px #f0f0f0,
      -997px -412px #e3e3e3, -330px -260px #d9d9d9, 691px -39px #fcfcfc,
      -468px -135px #d6d6d6, -535px 405px #e8e8e8, -1289px -284px #e3e3e3,
      823px -225px #cccccc, -1172px -348px white, 505px -319px #ededed,
      94px -45px #ededed, -687px -64px #c7c7c7, -1133px -456px #f2f2f2,
      1357px 135px #e0e0e0, -919px -249px whitesmoke, 206px 32px white,
      1453px -338px #cccccc, -764px 83px #e8e8e8, 726px 85px #fafafa,
      205px 103px #e3e3e3, 85px 116px #d1d1d1, 1104px -121px #f0f0f0,
      649px -304px #dbdbdb, -313px 313px whitesmoke, 491px -419px #c9c9c9,
      -1405px 397px #cfcfcf, 30px -81px #e6e6e6;
    animation: fly 3s linear infinite;
    transform-style: preserve-3d;
  }
  .stars:before,
  .stars:after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    box-shadow: inherit;
  }
  .stars:before {
    transform: translateZ(-300px);
    animation: fade1 3s linear infinite;
  }
  .stars:after {
    transform: translateZ(-600px);
    animation: fade2 3s linear infinite;
  }
  @keyframes fly {
    from {
      transform: translateZ(0px);
    }
    to {
      transform: translateZ(300px);
    }
  }
  @keyframes fade1 {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade2 {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }

`;

export default GlobalStyle;
