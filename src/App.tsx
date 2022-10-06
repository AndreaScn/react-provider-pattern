import React from 'react';
import './styles.css';
import { Sidebar } from './components/Sidebar';
import { PageContent } from './components/PageContent';
import { AppPageStateProvider } from './context/app-page-state';

/**
 * This component does not pass any prop to any component, it is just wrapped
 * with the context and all the child components will take what they need from there.
 */
function App() {
  return (
    <div className="App">
      <AppPageStateProvider>
        <Sidebar />
        <PageContent />
      </AppPageStateProvider>
    </div>
  );
}

export default App;
