import styled from "@emotion/styled";

interface CookWayPropsType {
  visible: boolean;
  name: string;
  content: string;
}

export const CookWay = ({ visible, name, content }: CookWayPropsType) => {
  return (
    <>
      <CookWayContainer visible={visible}>
        <CookWayNameContainer>
          {name}
        </CookWayNameContainer>
        <CookWayContentContainer>
          {content}
        </CookWayContentContainer>
      </CookWayContainer>
    </>
  );
}

const CookWayContainer = styled.div<{ visible: boolean; }>`
  position: absolute;
  width: 400px;
  height: 500px;
  border: black solid 1px;
  left: 1500px;
  top: 200px;
  background-color: white;
  cursor: pointer;
  ${(props) => props.visible ? `display: flex; ` : `display: none;`}
  align-items: center;
  flex-direction: column;
`;

const CookWayNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: black solid 1px;
  width: 300px;
  height: 100px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const CookWayContentContainer = styled.div`
  border: black solid 1px;
  width: 300px;
  padding: 20px 20px;
  overflow: auto;
  margin-bottom : 50px;
`;