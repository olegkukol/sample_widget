import styled, { keyframes }  from 'styled-components';

const color_pen = '#fff';
const font_size = '15px';
const content = 'vtb test widget';

const move_upper_shadowKF = keyframes `{
    0%, 90%, 100% {
        opacity: 0;
    transform: translateX(-2%);
    }
    30% {
        opacity: 1;
    transform: translateX(0);
    }
}`;

const move_bottom_shadowKF = keyframes`{
    0%, 90%, 100% {
        opacity: 1;
    transform: translate(0, 0);
    }
    30% {
        opacity: 0;
    transform: translateY(-3.5%);
    }
}`;

const floatKF = keyframes`{
    50% {
        transform: scaleY(1.01) skew(-10deg, -2deg);
    }
}`;

export const Wrapper = styled.main`
    display: flex;
    width: 40%;
    height: 50%;
    border-radius: 20px;
    border: 3px dotted white;
    position: absolute;
    left: 30%;
    top: 20%;
`;

export const Widget = styled.div`
    display: flex;
    margin: auto;
    padding: 7%;
    position: relative;
    overflow: hidden;
    background: aqua;
    height: -webkit-fill-available;
    border-radius: 18px;
    overflow: auto;
`;

export const WidgetData = styled.h1`
    color: ${color_pen};
    cursor: default;
    font-family: 'Fredoka One', sans-serif;
    font-size: ${font_size};
    font-weight: normal;
    letter-spacing: 0.1rem;
    margin: auto;
    outline: none;
    position: relative;
    transform: skew(10deg, 2deg);
    animation: ${floatKF} 2s ease-in-out infinite;
    &:hover + .fog {
    animation-play-state: paused;
    }
    &::before, &::after {
    color: #0b0bff8c;
    content: "${content}";
    position: absolute;
    top: -30px;
    left: -5px;
    z-index: -10;
    font-size: x-large;
    }
    &::before {
        animation: ${move_upper_shadowKF} 2s ease-in-out infinite;
        opacity: 0;
        text-shadow: 6px 0 2px rgba(179, 8, 8, 0.4), 12px 0 2px rgba(26, 35, 126, 0.3);
    }
    &::after {
        animation: ${move_bottom_shadowKF} 2s ease-in-out infinite;
        text-shadow: 2px 4px 2px rgba(179, 8, 8, 0.4), 4px 8px 2px rgba(26, 35, 126, 0.3);
    }
`;