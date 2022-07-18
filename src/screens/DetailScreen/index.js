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
import Loading from '../../components/Loading';

const DetailScreen = ({ navigation, route }) => {

  const { city } = route.params;

  const [forecast, setForecast] = useState([]);
  const [tomorrowForecast, setTomorrowForecast] = useState(false)

  useEffect(() => {
    getTodayAndTomorrowForecast(city.location.name).then((forecast) => setForecast(forecast));
  }, []);

  //console.log(forecast[0]?.hour[0].temp_c, 'forecast en detail screen')
 
  const forecastMap = {
    10: 'Morning',
    14: 'Afternoon',
    18: 'Evening',
    22: 'Night',
  };

  const isCurrent = (dayPhase) => {
    const now = moment().hour();
    const result = Object.keys(forecastMap).find( (k) => k >= now);
    return dayPhase === (forecastMap[result] || forecastMap[10]);
  };

  const getForecastCards = (dayForecast) => {
    return (
      <ForecastCardsWrapper>
        {dayForecast?.hour.map((forecast, index) => { 
        const hour = moment(forecast.time).hour();
        if (hour in forecastMap) {
        return (
        <ForecastCard 
          key={index}
          isCurrent={isCurrent(forecastMap[hour])}
          dayPhase={forecastMap[hour]}
          iconUrl={`http:${forecast.condition.icon}`}
          temp={forecast.temp_c}
          humidity={forecast.humidity}
      />)}})}
    </ForecastCardsWrapper>)
  }

  if (!city) return <Loading />;

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
          title={tomorrowForecast ? 'View Today' : 'Tomorrow'}
          handlePress={() => setTomorrowForecast(!tomorrowForecast)}
        />
      </ForecastHeaderWrapper>
      <ForecastWrapper 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {getForecastCards(tomorrowForecast ? forecast[1] : forecast[0])}
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