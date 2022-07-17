import React, { useState, useEffect, useRef } from 'react';
import { Image } from 'react-native';
import { 
  MainWrapper, 
  TopCard,
  TopCardCity,
  TopCardGoBackWrapper,
  TopCardLeftWrapper,
  TopCardRightWrapper,
  TopCardTemperature,
  TopCardTime,
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
import moment from 'moment';
import { getTodayAndTomorrowForecast } from '../../services/api/forecast';

const DetailScreen = ({ navigation, route }) => {

  const { city } = route.params;

  const [forecast, setForecast] = useState([]);
  const [pos, setPos] = useState(0);
  const scrollViewRef = useRef();
  const [tomorrowForecast, setTomorrowForecast] = useState(true)

  useEffect(() => {
    getTodayAndTomorrowForecast(city.location.name).then((forecast) => setForecast(forecast));
  }, []);

  console.log(forecast[0]?.hour[0].temp_c, 'forecast en detail screen')

  const handleScroll = () => {
    if (tomorrowForecast) {
      scrollViewRef.current.scrollToEnd({ animated: false })
    }
    scrollViewRef.current.scrollTo({ x: 0, animated: false })
  }

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
          <TopCardCity>{city.location.name}</TopCardCity>
          <TopCardTemperature>{`${city.current?.temp_c}ºC`}</TopCardTemperature>
        </TopCardLeftWrapper>
        <TopCardRightWrapper>
          <Image 
            source={{uri: city.condition?.icon}}
            style={{width: 50, height: 30}} 
          />
          <TopCardTime>{`${moment().format('LT')} ${city.current.wind_dir} `}</TopCardTime>
        </TopCardRightWrapper>
      </TopCard>
      <ForecastHeaderWrapper>
        <ForecastHeader>Forecast</ForecastHeader>
        <ForecastButton
          onPress={() => setTomorrowForecast(!tomorrowForecast)}
        />
      </ForecastHeaderWrapper>
      <ForecastWrapper 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        ref={scrollViewRef}
        // onScroll={handleScroll}
      >
        <ForecastCardsWrapper>
          <ForecastCard 
            dayPhase='Morning'
            // iconUrl={forecast[0]?.hour[0]?.condition?.icon}
            iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
            temp={forecast[0]?.hour[0]?.temp_c}
            humidity={forecast[0]?.hour[0]?.humidity}
          />
          <ForecastCard 
            dayPhase='Afternoon'
            // iconUrl={forecast[0]?.hour[0]?.condition?.icon}
            iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
            temp={forecast[0]?.hour[1]?.temp_c}
            humidity={forecast[0]?.hour[1]?.humidity}
          />
          <ForecastCard 
            dayPhase='Evening'
            // iconUrl={forecast[0]?.hour[0]?.condition?.icon}
            iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
            temp={forecast[0]?.hour[2]?.temp_c}
            humidity={forecast[0]?.hour[2]?.humidity}
          />
          <ForecastCard 
            dayPhase='Morning'
            // iconUrl={forecast[0]?.hour[0]?.condition?.icon}
            iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
            temp={forecast[1]?.hour[0]?.temp_c}
            humidity={forecast[1]?.hour[0]?.humidity}
          />
          <ForecastCard 
            dayPhase='Afernoon'
            // iconUrl={forecast[0]?.hour[0]?.condition?.icon}
            iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
            temp={forecast[1]?.hour[1]?.temp_c}
            humidity={forecast[1]?.hour[1]?.humidity}
          />
          <ForecastCard 
            dayPhase='Evening'
            // iconUrl={forecast[0]?.hour[0]?.condition?.icon}
            iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
            temp={forecast[1]?.hour[2]?.temp_c}
            humidity={forecast[1]?.hour[2]?.humidity}
          />
        </ForecastCardsWrapper>
      </ForecastWrapper>
      <BottomCard>
        <BottomCardTogglerWrapper>
        </BottomCardTogglerWrapper>
          <BottomCardInnerWrapper>
            <ParameterCard 
              iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
              parameter='UV Index'
              value={forecast[0]?.day?.uv}
            />
            <ParameterCard 
              iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
              parameter='UV Index'
              value={forecast[0]?.day?.uv}
            />
            <ParameterCard 
              iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
              parameter='UV Index'
              value={forecast[0]?.day?.uv}
            />
            <ParameterCard 
              iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
              parameter='UV Index'
              value={forecast[0]?.day?.uv}
            />
            <ParameterCard 
              iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
              parameter='UV Index'
              value={forecast[0]?.day?.uv}
            />
            <ParameterCard 
              iconUrl={'https://us.123rf.com/450wm/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'}
              parameter='UV Index'
              value={forecast[0]?.day?.uv}
            />
          

        </BottomCardInnerWrapper>
      </BottomCard>

    </MainWrapper>

  )
}

export default DetailScreen;