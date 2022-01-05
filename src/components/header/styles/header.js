import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

// description of background URL logic - 
// inside the url() we de-structured the src based on a condition - 
// So if there is a src or background image available then 
// --> go to the misc folder and use that image OR
// --> if there is no background image provided then use the basic one which is home-bg.jpg in misc folder
export const Background = styled.div`
    display: flex;
    flex-direction: column;  
`;

export const Image = styled.div`
    background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover no-repeat;
    z-index: 0;
    opacity: 0.6;
    position: absolute;
    top: 0rem;
    left: 0rem;
`;
export const Frame = styled.div``;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    opacity: 1;
    z-index: 10;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    } 
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`;