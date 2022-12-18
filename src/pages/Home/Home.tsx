import { FC, useState } from 'react';

import Page from '../../layouts/Page';
import Container from '../../components/Container';
import InputContainer from './InputContainer';

import { Calendar, CalendarValueType } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

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
  const [trainType, setTrainType] = useState<any>({});
  const [propertyType, setPropertyType] = useState<any>({});
  const [isLoad, setIsLoad] = useState<any>({});
  const [cargoId, setCargoId] = useState<number | null>(null);
  const [route, setRoute] = useState<any>({});
  const [commonChId, setCommonChId] = useState<number | null>(null);
  const [senderId, setSenderId] = useState<number | null>(null);
  const [receiverId, setReceiverId] = useState<number | null>(null);
  const [roadSenderId, setRoadSenderId] = useState<number | null>(null);
  const [roadReceiverId, setRoadReceiverId] = useState<number | null>(null);
  const [regionSenderId, setRegionSenderId] = useState<number | null>(null);
  const [regionReceiverId, setRegionReceiverId] = useState<number | null>(null);

  const onSubmit = (evt) => {
    evt.preventDefault();

    console.log(date?.toLocaleString());

    const result = {
      st_code_snd: destinationId,
      st_code_rsv: arrivalId,
      date_depart_year: 2022,
      date_depart_month: 1,
      date_depart_week: 3,
      date_depart_day: 17,
      date_depart_hour: 15,
      fr_id: cargoId,
      route_type: Number(route?.name),
      is_load: isLoad?.name === 'Груженый' ? 1 : 0,
      rod: Number(trainType?.name),
      common_ch: commonChId,
      vidsobst: Number(propertyType?.name),
      distance: distance,
      snd_org_id: senderId,
      rsv_org_id: receiverId,
      snd_roadid: roadSenderId,
      rsv_roadid: roadReceiverId,
      snd_dp_id: regionSenderId,
      rsv_dp_id: regionReceiverId,
    };

    console.log('result: ', result);

    const url = 'http://44.204.155.19:8000/predict/';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    };
    fetch(url, requestOptions)
      .then((response) => {
        console.log('Submitted successfully, response.body: ', response.body);
      })
      .catch((error) => console.log('Form submit error', error));
  };

  return (
    <Page>
      <Container>
        <div className="card">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 p-fluid">
            <InputContainer
              inputType="inputnumber"
              description="ID destination station*"
            >
              <InputNumber
                inputId="inputnumber"
                value={destinationId}
                onChange={(e) => setDestinationId(e.value)}
              />
            </InputContainer>

            <InputContainer
              inputType="inputnumber"
              description="ID arrival station*"
            >
              <InputNumber
                inputId="inputnumber"
                value={arrivalId}
                onChange={(e) => setArrivalId(e.value)}
              />
            </InputContainer>

            <InputContainer
              inputType="inputnumber"
              description="Distance between stations*"
            >
              <InputNumber
                inputId="inputnumber"
                value={distance}
                onChange={(e) => setDistance(e.value)}
                suffix=" km"
              />
            </InputContainer>

            <InputContainer inputType="calendar" description="Departure date">
              <Calendar
                id="calendar"
                value={date}
                onChange={(e) => setDate(e.value?.toLocaleString())}
              />
            </InputContainer>

            <InputContainer inputType="dropdown" description="Train type">
              <Dropdown
                inputId="dropdown"
                value={trainType}
                options={trainTypes}
                onChange={(e) => setTrainType(e.value)}
                optionLabel="name"
              />
            </InputContainer>

            <InputContainer inputType="dropdown" description="Property type">
              <Dropdown
                inputId="dropdown"
                value={propertyType}
                options={property}
                onChange={(e) => setPropertyType(e.value)}
                optionLabel="name"
              />
            </InputContainer>

            <InputContainer inputType="dropdown" description="Has cargo">
              <Dropdown
                inputId="dropdown"
                value={isLoad}
                options={cargo}
                onChange={(e) => setIsLoad(e.value)}
                optionLabel="name"
              />
            </InputContainer>

            <InputContainer inputType="inputnumber" description="Has cargo">
              <InputNumber
                inputId="inputnumber"
                value={cargoId}
                onChange={(e) => setCargoId(e.value)}
              />
            </InputContainer>

            <InputContainer inputType="dropdown" description="Dispatch type">
              <Dropdown
                inputId="dropdown"
                value={route}
                options={routes}
                onChange={(e) => setRoute(e.value)}
                optionLabel="name"
              />
            </InputContainer>

            <InputContainer
              inputType="inputnumber"
              description="ID common characteristic"
            >
              <InputNumber
                inputId="inputnumber"
                value={commonChId}
                onChange={(e) => setCommonChId(e.value)}
              />
            </InputContainer>

            <InputContainer inputType="inputnumber" description="ID sender">
              <InputNumber
                inputId="inputnumber"
                value={senderId}
                onChange={(e) => setSenderId(e.value)}
              />
            </InputContainer>

            <InputContainer inputType="inputnumber" description="ID receiver">
              <InputNumber
                inputId="inputnumber"
                value={receiverId}
                onChange={(e) => setReceiverId(e.value)}
              />
            </InputContainer>

            <InputContainer
              inputType="inputnumber"
              description="ID road sender"
            >
              <InputNumber
                inputId="inputnumber"
                value={roadSenderId}
                onChange={(e) => setRoadSenderId(e.value)}
              />
            </InputContainer>
            <InputContainer
              inputType="inputnumber"
              description="ID road receiver"
            >
              <InputNumber
                inputId="inputnumber"
                value={roadReceiverId}
                onChange={(e) => setRoadReceiverId(e.value)}
              />
            </InputContainer>
            <InputContainer
              inputType="inputnumber"
              description="ID region sender"
            >
              <InputNumber
                inputId="inputnumber"
                value={regionSenderId}
                onChange={(e) => setRegionSenderId(e.value)}
              />
            </InputContainer>

            <InputContainer
              inputType="inputnumber"
              description="ID region receiver"
            >
              <InputNumber
                inputId="inputnumber"
                value={regionReceiverId}
                onChange={(e) => setRegionReceiverId(e.value)}
              />
            </InputContainer>
          </div>
          <div className="w-10/12 mx-auto mt-6 sm:w-1/2 md:w-1/3 lg:mt-10">
            <Button
              className="w-full"
              label="frontend only"
              onClick={(evt) => onSubmit(evt)}
              loading={false}
            />
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default Home;
