import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ContentItem } from "../components/ContentItem";
import { CookWay } from "../components/CookWay";
import { CookType } from "../types";

export const Ingredient = () => {
  const [cookList, setCookList] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [cookWayStates, setCookWayStates] = useState({ visible: false, name: '', content: '' });

  useEffect(() => {
    fetch('http://localhost:3003/cook/list').then((res) => res.json()).then(res => setCookList(res));
  }, []);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  }

  const onSearchClick = () => {
    if (ingredient === '') {
      fetch('http://localhost:3003/cook/list').then((res) => res.json()).then(res => setCookList(res));
    }
    else {
      fetch(`http://localhost:3003/cook/ingredient/${ingredient}`).then((res) => res.json()).then(res => setCookList(res));
    }
  }

  const onCookClick = (name: string, content: string) => {
    const tempState = {
      visible: !cookWayStates.visible,
      name: name,
      content: content
    }

    setCookWayStates(tempState);
  }

  return (
    <>
      <Container>
        <Header>재료를 검색해주세요.</Header>
      </Container>
      <Container>
        <Bar>
          <Input onChange={onSearchChange} />
          <SearchButton onClick={() => onSearchClick()}>검색</SearchButton>
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
  width: 700px;
  height: 50px;
  border: black solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-right: 20px;
`;

const SearchButton = styled.button`
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