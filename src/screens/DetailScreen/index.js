import React, { useState, useEffect } from 'react';
import { 
  MainWrapper, 
  TopCard,
  TopCardCity,
  TopCardGoBackWrapper,
  TopCardLeftWrapper,
  TopCardRightWrapper,
  TopCardTemperature,
  ForecastHeaderWrapper,
  ForecastHeader,
  ForecastWrapper,
  ForecastCardsWrapper,
  BottomCard,
  BottomCardInnerWrapper,
  BottomCardTogglerWrapper,
} from './styled';
import GradientBackground from '../../components/GradientBackground';
import ForecastCard from '../../components/ForecastCard';
import ParameterCard from '../../components/ParameterCard';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import ForecastButton from '../../components/ForecastButton';

const DetailScreen = ({ navigation }) => {

  return (
    <MainWrapper
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <TopCard>
        <GradientBackground
          colorFrom='#5c3ac2'
          colorTo='#7762f0'
          id='top-card'
          borderRadius={20}
          orientation={'horizontal'}
          height={200}
        />
        <TopCardGoBackWrapper onPress={() => navigation.goBack()}>
          <ArrowLeft color='white' width={19} height={19} />
        </TopCardGoBackWrapper>
        <TopCardLeftWrapper>
          <TopCardCity>Ciudad</TopCardCity>
          <TopCardTemperature>19</TopCardTemperature>
        </TopCardLeftWrapper>
        <TopCardRightWrapper>
          <ForecastHeader>Icono</ForecastHeader>
          <ForecastHeader>Hora</ForecastHeader>
        </TopCardRightWrapper>
      </TopCard>
      <ForecastHeaderWrapper>
        <ForecastHeader>Forecast</ForecastHeader>
        <ForecastButton />
      </ForecastHeaderWrapper>
      <ForecastWrapper 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <ForecastCardsWrapper>
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </ForecastCardsWrapper>
      </ForecastWrapper>
      <BottomCard>
        <BottomCardTogglerWrapper>
          </BottomCardTogglerWrapper>
          <BottomCardInnerWrapper>
          <ParameterCard />
          <ParameterCard />
          <ParameterCard />
          <ParameterCard />
          <ParameterCard />
          <ParameterCard />
          <ParameterCard />
        </BottomCardInnerWrapper>

      </BottomCard>

    </MainWrapper>

  )
}

export default DetailScreen;