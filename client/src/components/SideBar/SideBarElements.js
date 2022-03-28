import styled from 'styled-components';

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #C2655D;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0..3s ease-in-out;
  right: ${({ isOpen }) =>(isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
