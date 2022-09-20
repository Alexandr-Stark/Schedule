// Absolute imports
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Helpers
import { getWeekNumber } from 'helpers/schedule';

// Pages
import Schedule from 'pages/Schedule';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/schedule">
          <Route path=":groupName/weeks" element={<Schedule/>}>
            <Route path=":week" element={<Schedule/>}/>
          </Route>
        </Route>
        <Route path="/" element={<Navigate replace to={`/schedule/443-2/weeks/${getWeekNumber()}`} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;