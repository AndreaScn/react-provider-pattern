import {
  AppData,
  AppModule,
  ModuleData,
  useAppPageState,
} from '../context/app-page-state';
import { useCallback } from 'react';

export const Fields = ({
  moduleData,
  onDataChange,
}: {
  moduleData: ModuleData;
  onDataChange: (
    module: AppModule,
    inputId: keyof ModuleData,
    inputValue: string,
  ) => void;
}) => {
  const {
    pageState: { pageTitle, selectedModule },
  } = useAppPageState();

  const onChange = useCallback(
    (inputId: keyof ModuleData, value: string) => {
      onDataChange(selectedModule || AppModule.dashboard, inputId, value);
    },
    [onDataChange, selectedModule],
  );

  return (
    <div className="page-content__fields">
      <input
        className="page-content__input-field"
        onChange={(evt) => onChange('name', evt.target.value)}
        placeholder={`${pageTitle} Name`}
        type="text"
        value={moduleData.name}
      />
      <input
        className="page-content__input-field"
        onChange={(evt) => onChange('description', evt.target.value)}
        placeholder={`${pageTitle} Description`}
        type="text"
        value={moduleData.description}
      />
      <input
        className="page-content__input-field"
        onChange={(evt) => onChange('owner', evt.target.value)}
        placeholder={`${pageTitle} Owner`}
        type="text"
        value={moduleData.owner}
      />
      <input
        className="page-content__input-field"
        onChange={(evt) => onChange('created', evt.target.value)}
        placeholder={`${pageTitle} Created`}
        type="text"
        value={moduleData.created}
      />
    </div>
  );
};
