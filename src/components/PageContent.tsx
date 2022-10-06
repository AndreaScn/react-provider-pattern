import React, { useCallback, useEffect, useState } from 'react';
import { Fields } from './Fields';
import { Footer } from './Footer';
import { Header } from './Header';
import {
  AppModule,
  DEFAULT_DATA,
  ModuleData,
  useAppPageState,
} from '../context/app-page-state';
import { DataDisplay } from './DataDisplay';

export const PageContent = () => {
  const {
    dispatch,
    pageState: { appData, selectedModule },
  } = useAppPageState();
  const [tempData, setTempData] = useState<ModuleData>(appData[selectedModule]);

  const persistTempData = useCallback(
    (module: AppModule, inputId: keyof ModuleData, inputValue: string) => {
      setTempData({
        ...tempData,
        [inputId]: inputValue,
      });
    },
    [tempData],
  );

  useEffect(() => {
    setTempData(appData[selectedModule]);
  }, [appData, selectedModule]);

  return (
    <div className="page-content">
      <Header />
      <Fields moduleData={tempData} onDataChange={persistTempData} />
      <Footer
        onCancel={() => setTempData(DEFAULT_DATA)}
        onSave={() => {
          dispatch({
            type: 'update_app_data',
            module: selectedModule || AppModule.dashboard,
            data: tempData,
          });
        }}
      />
      <DataDisplay />
    </div>
  );
};
