import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate('/');
  }

  const onKindButtonClick = () => {
    navigate('/kind');
  }

  const onCategoryButtonClick = () => {
    navigate('/category');
  }

  const onIngredientButtonClick = () => {
    navigate('/ingredient');
  }

  return (
    <>
      <LogoContainer>
        <LogoDiv onClick={onLogoClick}>
          KUKING
        </LogoDiv>
      </LogoContainer>
      <NaviContainer>
        <ButtonDiv onClick={onKindButtonClick}>
          <KindButton>종류별 레시피</KindButton>
        </ButtonDiv>
        <ButtonDiv onClick={onCategoryButtonClick}>
          <CategoryButton>분야별 레시피</CategoryButton>
        </ButtonDiv>
        <ButtonDiv onClick={onIngredientButtonClick}>
          <IngredientButton>재료별 레시피</IngredientButton>
        </ButtonDiv>
      </NaviContainer>
    </>
  );
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoDiv = styled.div`
  width: 500px;
  height: 100px;
  border: black solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NaviContainer = styled.div`
  width: 100%;
  height: 50px;
  border: black solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonDiv = styled.div`
  width: 150px;
  border: black solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const KindButton = styled.div`

`;

const CategoryButton = styled.div`

`;

const IngredientButton = styled.div`

`;