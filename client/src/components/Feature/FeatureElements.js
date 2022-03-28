import styled from 'styled-components';
import FeaturePic from '../../images/lto-bg01.jpeg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic}) no-repeat;
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'Play', sans-serif;
  text-align: center;
  padding: 0 1rem;
`;
