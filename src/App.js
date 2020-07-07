import React from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from './components/ServiceFilter';
// import ServiceAddClassBased from './components/ServiceAddClassBased';
// import ServiceListClassBased from './components/ServiceListClassBased';

function App() {
  return (
    <>
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
      <hr />
      {/* <ServiceAddClassBased />
      <ServiceListClassBased /> */}
    </>
  );
}

export default App;

