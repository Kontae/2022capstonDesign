import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ContentItem } from "../components/ContentItem";
import { CookWay } from "../components/CookWay";
import { KIND_BAR_LIST } from "../constant";
import { CookType } from "../types";

export const Kind = () => {
  const [cookList, setCookList] = useState([]);
  const [cookWayStates, setCookWayStates] = useState({ visible: false, name: '', content: '' });

  useEffect(() => {
    fetch('http://localhost:3003/cook/list').then((res) => res.json()).then(res => setCookList(res));
  }, []);

  const onKindClick = (kind: string) => {
    if (kind === '전체') {
      fetch('http://localhost:3003/cook/list').then((res) => res.json()).then(res => setCookList(res));
    }
    else {
      fetch(`http://localhost:3003/cook/kind/${kind}`).then((res) => res.json()).then(res => setCookList(res));
    }
  }

  const onCookClick = (name: string, content: string) => {
    const tempState = {
      visible: !cookWayStates.visible,
      name: name,
      content: content
    }

    console.log(tempState);

    setCookWayStates(tempState);
  }

  return (
    <>
      <Container>
        <Header>종류를 선택해주세요.</Header>
      </Container>
      <Container>
        <Bar>
          {KIND_BAR_LIST.map((i) => <BarItem key={i.key} onClick={() => onKindClick(i.key)}>{i.value}</BarItem>)}
        </Bar>
      </Container>
      <Container>
        <Content>
          {cookList.map((c: CookType) => <ContentItem key={c.id} id={c.id} name={c.cook_name} url={c.image_url} onClick={() => onCookClick(c.cook_name, c.content)}></ContentItem>)}
        </Content>
      </Container>
      <CookWay {...cookWayStates} />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const Header = styled.div`
  border: black solid 1px;
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.div`
  width: 800px;
  height: 60px;
  border: black solid 1px;
  display: flex;
  align-items: center;
  overflow: auto;
  flex-wrap: nowrap; 
`;

const BarItem = styled.div`
  width: 100px;
  height: 40px;
  border: black solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  margin-left: 10px;
  cursor: pointer;
`;

const Content = styled.div`
  width: 700px;
  height: 400px;
  border: black solid 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  flex-wrap: nowrap; 
`;
