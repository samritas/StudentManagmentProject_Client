import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./AdminPage/pages/Auth/LoginPage";
import SignUpPage from "./AdminPage/pages/Auth/SignUpPage";
import StudentPerformance from "./AdminPage/pages/Students/StudentPerformance";
import Layout from "./AdminPage/component/Layout";
import ParentInformation from "./AdminPage/pages/Parents/ParentInformation";
import StudentInformation from "./AdminPage/pages/Students/StudentInformation";
import TeachersInformation from "./AdminPage/pages/Teachers/TeachersInformation";
import Dashboard from "./AdminPage/pages/Dashboard/Dashboard";
import EvaluationScheduleForm from "./AdminPage/pages/ClassRoom/EvaluationScheduleForm";
import Deduction from "./AdminPage/pages/Adminstration/Deduction";
import UpdateSalary from "./AdminPage/pages/Adminstration/UpdateSalary";
import SetHomeRoomTeacher from "./AdminPage/pages/Adminstration/SetHomeRoomTeacher";
import NotFound from "./LandingPage/Component/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that use the layout with sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/performance" element={<StudentPerformance />} />
          <Route path="/ParentInformation" element={<ParentInformation />} />
          <Route path="/studentInformation" element={<StudentInformation />} />
          <Route
            path="/TeachersInformation"
            element={<TeachersInformation />}
          />
          <Route
            path="/evaluation-schedule"
            element={<EvaluationScheduleForm />}
          />
          <Route path="/deduction" element={<Deduction />} />
          <Route path="/update-salary" element={<UpdateSalary />} />
          <Route
            path="/set-homeroom-teacher"
            element={<SetHomeRoomTeacher />}
          />
        </Route>

        {/* Routes without sidebar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SignUpPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
