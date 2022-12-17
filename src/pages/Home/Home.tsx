import { FC, useRef } from 'react';

import Page from '../../layouts/Page';
import Container from '../../components/Container';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';

const Home: FC = () => {
  // TODO: change any
  const toast: any = useRef(null);

  const onBasicUpload = () => {
    console.log('toast1: ', toast);

    toast.current.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  };

  const onBasicUploadAuto = () => {
    console.log('toast2: ', toast);

    toast.current.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Auto Mode',
    });
  };
  return (
    <Page>
      <Container>
        <div className="flex flex-row-reverse items-center justify-end m-6 ">
          <p className="w-2/3 ml-3 no-line-break ">
            Выберите файл для анализа исторических данных
          </p>
          <FileUpload
            mode="basic"
            name="demo[]"
            // url="https://primefaces.org/primereact/showcase/upload.php"
            accept="image/*"
            maxFileSize={1000000}
            onUpload={onBasicUpload}
            auto
            chooseLabel="Обзор"
          />
        </div>

        <div className="flex flex-row-reverse items-center justify-end m-6">
          <p className="ml-3">
            Выберите файл с перевозками которым необходим прогноз
          </p>
          <FileUpload
            mode="basic"
            name="demo[]"
            // url="https://primefaces.org/primereact/showcase/upload.php"
            accept="image/*"
            maxFileSize={1000000}
            onUpload={onBasicUploadAuto}
            auto
            chooseLabel="Обзор"
          />
        </div>

        <div className="flex flex-row-reverse items-center justify-center m-6">
          <Button
            label="Получить прогноз"
            loading={false}
            loadingIcon="pi pi-spin pi-sun"
          />
        </div>

        <div className="flex flex-row-reverse items-center justify-center m-6">
          <Button
            label="predicts.csv"
            icon="pi pi-download"
            className="pi-button-sm"
            disabled
          />
        </div>
      </Container>
    </Page>
  );
};

export default Home;
