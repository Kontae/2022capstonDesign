import styled from "@emotion/styled";

interface ContentItemPropsType {
  id: number;
  name: string;
  url: string;
  onClick: () => void;
}

export const ContentItem = ({ id, name, url, onClick }: ContentItemPropsType) => {
  return (
    <>
      <ContentItemContainer onClick={onClick}>
        <ContentIdContainer>{id}</ContentIdContainer>
        <ContentNameContainer>{name}</ContentNameContainer>
        <ContentImageContainer>
          <ContentImage src={url} />
        </ContentImageContainer>
      </ContentItemContainer>
    </>
  );
}

const ContentItemContainer = styled.div`
  border: black solid 1px;
  width: 600px;
  height: 100px;
  margin-top: 20px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ContentIdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  border: black solid 1px;
  margin-left: 20px;
  margin-right: 20px;
`;

const ContentNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  border: black solid 1px;
  margin-right: 20px;
`;

const ContentImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 60px;
  border: black solid 1px;
`;

const ContentImage = styled.img`
  width: 210px;
  height: 60px;
`;
