// absolute imports
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 340px;
  height: 250px;
  border-radius: 18px;
  background-color: ${({ theme: { colors: { white } } }) => white};
  /* background: linear-gradient(90deg,#43aeff1c,#89d0f27d 50%,#43aeff1f); */
  -webkit-box-shadow: -2px 6px 18px 2px rgba(0,0,0,0.44); 
  box-shadow: -2px 6px 18px 2px rgba(0, 0, 0, 0.23);
`;

export const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 15px;
`;

export const Day = styled.p`
  font-size: 3vw;
  font-weight: 700;
  z-index: 100;
  background: linear-gradient(90deg,#373737,#6a6a6a 50%,#8a8a8a);
  background-clip: border-box;
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Date = styled.p`
  font-size: 80px;
  font-weight: 700;
  background: linear-gradient(90deg, #ffa54d, #f07bc5 50%, #43aeff);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const InfoBlock = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  padding: 15px;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(95deg,#2626261c,#f4f4f400 50%,#7575753d); */
  background: linear-gradient(90deg,#ffa54d00,#a07bf04f 50%,#43aeff0d);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100px;
  height: 30px;
  padding: 15px 2px;
  border-radius: 18px;
  background-color: ${({ theme: { colors: { white } } }) => white};
  text-align: center;
  font-weight: 700;
  color: #0077ed;
  cursor: pointer;
`;
