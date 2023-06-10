import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

export const Main = () => {
  

  const[randomImage,setRandomImage] = useState<string[]>([]);
  
  useEffect(()=>{
    const img = ['./갈비탕.jpg','./김치볶음밥.jpg','./나물비빔밥.jpg','./스끼야끼.jpg','./돈가스덮밥.jpg','./감자고로케.jpg','./모듬초밥.jpg','./돈부리.jpg','./곰탕.jpg','./참치주먹밥.jpg','./오므라이스.jpg','./돼지고기바베큐.jpg','./감자치즈구이.jpg',
    './등심스테이크.jpg','./새우구이.jpg','./콘치즈구이.jpg','./닭고기덮밥.jpg','./우동.jpg', './어묵냄비.jpg','./잡채밥.jpg','./탕수육.jpg','./자장면.jpg','./닭개장.jpg','./소고기무국.jpg','./시금치된장국.jpg'
  ];
    const imgArr:string[]=[];
    while(imgArr.length < 5){
      const temp = img.splice(Math.floor(Math.random() * img.length),1)[0]
      imgArr.push(temp)
   }
   setRandomImage(imgArr);
  },[])

  return (
    <>
      <Container>
        <MainImageContaner>
          <MainImage src={randomImage[0]}/>
          <MainImage src={randomImage[1]} />
        </MainImageContaner>
        <SubImageContainer>
          <SubImage src={randomImage[2]} />
          <SubImage src={randomImage[3]} />
          <SubImage src={randomImage[4]} />
        </SubImageContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MainImageContaner = styled.div``;

const MainImage = styled.img`
  width: 400px;
  height: 300px;
`;

const SubImageContainer = styled.div``;

const SubImage = styled.img`
  width: 300px;
  height: 200px;
`;
