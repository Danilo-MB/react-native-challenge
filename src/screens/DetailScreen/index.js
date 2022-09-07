import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
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
import {getTodayAndTomorrowForecast} from '../../services/api/forecast';
import Loading from '../../components/Loading';
import DewPointImage from '../../../assets/images/dewpoint.png';
import VisibilityImage from '../../../assets/images/visibility.png';
import HumidityImage from '../../../assets/images/humidity.png';
import MoonPhaseImage from '../../../assets/images/moonphase.png';
import HighLowImage from '../../../assets/images/high-low.png';
import UVIndexImage from '../../../assets/images/uvindex.png';

const DetailScreen = ({navigation, route}) => {
  const {city} = route.params;

  const [forecast, setForecast] = useState({});
  const [tomorrowForecast, setTomorrowForecast] = useState(false);

  useEffect(() => {
    getTodayAndTomorrowForecast(city.location.name).then(forecast =>
      setForecast(forecast),
    );
  }, []);

  const forecastMap = {
    10: 'Morning',
    14: 'Afternoon',
    18: 'Evening',
    22: 'Night',
  };

  const hourMap = {
    10: 'Morning',
    14: 'Afternoon',
    18: 'Evening',
    22: 'Night',
  };

  const isCurrent = dayPhase => {
    const now = moment(city.current?.last_updated).hour();
    const result = Object.keys(forecastMap).find(k => k >= now);
    return dayPhase === (forecastMap[result] || forecastMap[10]);
  };

  // TODO Use the following method to show parameter values included in forecast
  const getParameterValuesByDayphase = (parameter) => {
    const now = moment(city.current?.last_updated);
    
    var result = forecast[0]?.hour?.find((hour) => {
      return moment(hour?.time).hour() === now.hour();
    });
    
    return result.parameter;
  }

  const getForecastCards = dayForecast => {
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
                iconUrl={`https:${forecast.condition.icon}`}
                temp={forecast.temp_c}
                humidity={forecast.humidity}
              />
            );
          }
        })}
      </ForecastCardsWrapper>
    );
  };

  if (!city) return <Loading />;

  return (
    <MainWrapper
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <TopCard>
        <GradientBackground
          colorFrom="#3d0b63"
          colorTo="#7762f0"
          id="top-card"
          borderRadius={20}
          orientation={'horizontal'}
          height={200}
        />
        <TopCardGoBackWrapper onPress={() => navigation.goBack()}>
          <ArrowLeft color="white" width={19} height={19} />
        </TopCardGoBackWrapper>
        <TopCardLeftWrapper>
          <TopCardCity>{city.location.name}</TopCardCity>
          <TopCardTemperature>{`${city.current?.temp_c}ºC`}</TopCardTemperature>
        </TopCardLeftWrapper>
        <TopCardRightWrapper>
          <Image
            source={{uri: `https:${city.current?.condition.icon}`}}
            style={{width: 100, height: 100}}
            resizeMode="contain"
          />
          <TopCardTime>{`${moment(city.current?.last_updated).format('LT')} ${
            city.current?.wind_dir
          } `}</TopCardTime>
        </TopCardRightWrapper>
      </TopCard>
      <ForecastHeaderWrapper>
        <ForecastHeader>Forecast</ForecastHeader>
        <ForecastButton
          title={tomorrowForecast ? 'View Today' : 'Tomorrow'}
          handlePress={() => setTomorrowForecast(!tomorrowForecast)}
        />
      </ForecastHeaderWrapper>
      <ForecastWrapper showsHorizontalScrollIndicator={false} horizontal={true}>
        {getForecastCards(tomorrowForecast ? forecast[1] : forecast[0])}
      </ForecastWrapper>
      <BottomCard>
        <BottomCardTogglerWrapper></BottomCardTogglerWrapper>
        <BottomCardInnerWrapper>
          <ParameterCard
            source={UVIndexImage}
            parameter="UV Index"
            value={city.current?.uv}
          />
          <ParameterCard
            source={HumidityImage}
            parameter="Humidity"
            value={city.current?.humidity}
          />
          <ParameterCard
            source={HighLowImage}
            parameter="Hi / Low"
            value={'Value'}
          />
          <ParameterCard
            source={MoonPhaseImage}
            parameter="Moon Phase"
            value={forecast[0]?.astro.moon_phase}
          />
          <ParameterCard
            source={DewPointImage}
            parameter="Dew Point"
            value={'Value'}
          />
          <ParameterCard
            source={VisibilityImage}
            parameter="Visibility"
            value={`${city.current?.vis_km} km`}
          />
        </BottomCardInnerWrapper>
      </BottomCard>
    </MainWrapper>
  );
};

export default DetailScreen;
