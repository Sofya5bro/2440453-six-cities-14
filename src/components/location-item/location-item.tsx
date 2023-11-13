import { TCityName } from '../../types';

type LocationItemProps = {
  cityName: TCityName;
}
function LocationItem({cityName}:LocationItemProps): JSX.Element { //правильно разобрать свойства
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{cityName}</span>
        </a>
      </div>
    </div>
  );
}

export default LocationItem;
