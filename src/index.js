import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './PersonCard.css'
import PersonCard from './PersonCard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonCard firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} />
    <PersonCard firstName={"Smith"} lastName={"John"} age={88} hairColor={"Brown"} />
    <PersonCard firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"Brown"} />
    <PersonCard firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"} />
  </React.StrictMode>
);
reportWebVitals();
