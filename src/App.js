import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage';
import StudentPerformance from './pages/Students/StudentPerformance';
import Layout from './component/Layout';
import ParentInformation from './pages/Parents/ParentInformation';
import StudentInformation from './pages/Students/StudentInformation';
import TeachersInformation from './pages/Teachers/TeachersInformation';
import Dashboard from './pages/Dashboard/Dashboard';
import EvaluationScheduleForm from './pages/ClassRoom/EvaluationScheduleForm';
import Deduction from './pages/Adminstration/Deduction';
import UpdateSalary from './pages/Adminstration/UpdateSalary';
import SetHomeRoomTeacher from './pages/Adminstration/SetHomeRoomTeacher';

function App() {
  return (
    <Router>
      <Routes>
        
        {/* Routes that use the layout with sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard"  element={<Dashboard/>}/>
          <Route path="/performance" element={<StudentPerformance />} />
          <Route path='/ParentInformation' element={<ParentInformation/>}/>
          <Route path='/studentInformation' element={<StudentInformation/>}/>
          <Route path='/TeachersInformation' element={<TeachersInformation/>}/>
          <Route path='/evaluation-schedule' element={<EvaluationScheduleForm/>}/>
          <Route path='/deduction' element={<Deduction/>}/>
          <Route path='/update-salary' element={<UpdateSalary/>}/>
          <Route path='/set-homeroom-teacher' element={<SetHomeRoomTeacher/>}/>
          
        </Route>

        {/* Routes without sidebar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
