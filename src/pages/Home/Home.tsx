import { FC, useState } from 'react';

import Page from '../../layouts/Page';
import Container from '../../components/Container';

import { Calendar, CalendarValueType } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

// Описание полей:
// st_code_snd - id станции отправления;
// st_code_rsv - id станции назначения;
// date_depart_year – год отправления;
// date_depart_month – месяц отправления;
// date_depart_week – неделя отправления;
// date_depart_day – день отправления;
// date_depart_hour – час отправления;
// fr_id - id груза;
// route_type - тип отправки;
// is_load – признак гружёности (1 - гружёный, 0 - порожний);
// rod – род подвижного состава;
// common_ch - id обобщённой характеристики вагона;
// vidsobst - вид собственности;
// distance - расстояние рейса;
// snd_org_id - id грузоотправителя;
// rsv_org_id – id грузополучателя;
// snd_roadid - id дороги отправления;
// rsv_roadid – id дороги назначения;
// snd_dp_id – id региона отправления;
// rsv_dp_id – id региона назначения;
// y – таргет (время в пути в часах).

const cargo = [{ name: 'Груженый' }, { name: 'Порожний' }];
const routes = [{ name: '1' }, { name: '3' }, { name: '4' }];
const trainTypes = [
  { name: '1' },
  { name: '2' },
  { name: '3' },
  { name: '5' },
  { name: '7' },
  { name: '8' },
  { name: '9' },
  { name: '10' },
  { name: '11' },
  { name: '15' },
];
const property = [
  { name: '101' },
  { name: '102' },
  { name: '103' },
  { name: '111' },
  { name: '135' },
  { name: '205' },
  { name: '322' },
  { name: '500' },
  { name: '505' },
  { name: '909' },
];

const Home: FC = () => {
  const [destinationId, setDestinationId] = useState<number | null>(null);
  const [arrivalId, setArrivalId] = useState<number | null>(null);

  const [distance, setDistance] = useState<number | null>(null);
  const [date, setDate] = useState<CalendarValueType>(null);

  const [trainType, setTrainType] = useState(null);
  const [propertyType, setPropertyType] = useState(null);

  const [isLoad, setIsLoad] = useState(null);
  const [cargoId, setCargoId] = useState<number | null>(null);

  const [route, setRoute] = useState(null);
  const [commonChId, setCommonChId] = useState<number | null>(null);

  const [senderId, setSenderId] = useState<number | null>(null);
  const [receiverId, setReceiverId] = useState<number | null>(null);

  const [roadSenderId, setRoadSenderId] = useState<number | null>(null);
  const [roadReceiverId, setRoadReceiverId] = useState<number | null>(null);

  const [regionSenderId, setRegionSenderId] = useState<number | null>(null);
  const [regionReceiverId, setRegionReceiverId] = useState<number | null>(null);

  return (
    <Page>
      <Container>
        <div className="card">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 p-fluid">
            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.value)}
                  required
                />
                <label htmlFor="inputnumber">ID станции отправления</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={arrivalId}
                  onChange={(e) => setArrivalId(e.value)}
                />
                <label htmlFor="inputnumber">ID станции прибытия</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={distance}
                  onChange={(e) => setDistance(e.value)}
                  suffix=" км"
                />
                <label htmlFor="inputnumber">Дистанция</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <Calendar
                  id="calendar"
                  value={date}
                  onChange={(e) => setDate(e.value)}
                />
                <label htmlFor="calendar">Дата отправления</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  inputId="dropdown"
                  value={trainType}
                  options={trainTypes}
                  onChange={(e) => setTrainType(e.value)}
                  optionLabel="name"
                />
                <label htmlFor="dropdown">Род подвижного состава</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  inputId="dropdown"
                  value={propertyType}
                  options={property}
                  onChange={(e) => setPropertyType(e.value)}
                  optionLabel="name"
                />
                <label htmlFor="dropdown">Вид собственности</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  inputId="dropdown"
                  value={isLoad}
                  options={cargo}
                  onChange={(e) => setIsLoad(e.value)}
                  optionLabel="name"
                />
                <label htmlFor="dropdown">Наличие груза</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={cargoId}
                  onChange={(e) => setCargoId(e.value)}
                />
                <label htmlFor="inputnumber">ID груза</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <Dropdown
                  inputId="dropdown"
                  value={route}
                  options={routes}
                  onChange={(e) => setRoute(e.value)}
                  optionLabel="name"
                />
                <label htmlFor="dropdown">Тип отправки</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={commonChId}
                  onChange={(e) => setCommonChId(e.value)}
                />
                <label htmlFor="inputnumber">
                  ID обобщённой характеристики вагона
                </label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={senderId}
                  onChange={(e) => setSenderId(e.value)}
                />
                <label htmlFor="inputnumber">ID грузоотправителя</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={receiverId}
                  onChange={(e) => setReceiverId(e.value)}
                />
                <label htmlFor="inputnumber">ID грузополучателя</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={roadSenderId}
                  onChange={(e) => setRoadSenderId(e.value)}
                />
                <label htmlFor="inputnumber">ID дороги отправления</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={roadReceiverId}
                  onChange={(e) => setRoadReceiverId(e.value)}
                />
                <label htmlFor="inputnumber">ID дороги назначения</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={regionSenderId}
                  onChange={(e) => setRegionSenderId(e.value)}
                />
                <label htmlFor="inputnumber">ID региона отправления</label>
              </span>
            </div>

            <div className="field col-12 md:col-3">
              <span className="p-float-label">
                <InputNumber
                  inputId="inputnumber"
                  value={regionReceiverId}
                  onChange={(e) => setRegionReceiverId(e.value)}
                />
                <label htmlFor="inputnumber">ID региона назначения</label>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/3 mt-8 mx-auto">
          <Button className="w-full" label="Submit" loading />
        </div>
      </Container>
    </Page>
  );
};

export default Home;
