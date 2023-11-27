import Header from '../../components/header/header';
import NavigationTabs from '../../components/nav-tabs/nav-tabs';
import OfferListBlock from '../../components/offer-list-block/offer-list-block';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { TCityName, TOfferList } from '../../types';
import { selectCity } from '../../store/action';

type TMainPageProps = {
  offersList: TOfferList;
}

function MainPage ({offersList}: TMainPageProps): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offersCityList = offersList.filter((offer) => offer.city.name === city);
  const dispatch = useAppDispatch();
  const handleCityChange = (isSelected: boolean, newCity: TCityName) => {
    if (!isSelected) {
      dispatch(selectCity({city: newCity}));
    }
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <NavigationTabs selectedCity={city} onClick={handleCityChange}/>
        <OfferListBlock offersList={offersCityList} cityName={city}/>
      </main>
    </div>
  );
}

export default MainPage;
