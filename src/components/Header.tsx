import { useAppPageState } from '../context/app-page-state';

export const Header = () => {
  // We read the title from the page state through the context API
  // directly without any prop being passed to this component:
  // welcome to the provider state pattern!
  const {
    pageState: { pageTitle },
  } = useAppPageState();

  return (
    <div className="page-header">
      <h1>{pageTitle}</h1>
    </div>
  );
};
