import { ModuleData, useAppPageState } from '../context/app-page-state';

export const DataDisplay = () => {
  const {
    pageState: { appData, selectedModule, pageTitle },
  } = useAppPageState();

  return (
    <div className="data-display">
      <h3>Current Saved Values For The {pageTitle} Module</h3>
      {Object.keys(appData[selectedModule]).map((moduleDataKey) => {
        const moduleData: ModuleData = appData[selectedModule];
        return (
          <div className="data-display__row">
            <div className="data-display__label">
              {pageTitle} {moduleDataKey}:
            </div>
            {moduleData[moduleDataKey as keyof ModuleData]}
          </div>
        );
      })}
    </div>
  );
};
