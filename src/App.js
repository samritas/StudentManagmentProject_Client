import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./AdminPages/pages/Auth/LoginPage";
import SignUpPage from "./AdminPages/pages/Auth/SignUpPage";
import StudentPerformance from "./AdminPages/pages/Students/StudentPerformance";
import Layout from "./component/Layout";
import ParentInformation from "./AdminPages/pages/Parents/ParentInformation";
import StudentInformation from "./AdminPages/pages/Students/StudentInformation";
import TeachersInformation from "./AdminPages/pages/Teachers/TeachersInformation";
import Dashboard from "./AdminPages/pages/Dashboard/Dashboard";
import EvaluationScheduleForm from "./AdminPages/pages/ClassRoom/EvaluationScheduleForm";
import Deduction from "./AdminPages/pages/Adminstration/Deduction";
import UpdateSalary from "./AdminPages/pages/Adminstration/UpdateSalary";
import SetHomeRoomTeacher from "./AdminPages/pages/Adminstration/SetHomeRoomTeacher";
import StudentLandingPage from "./StudentsPage/pages/landing/StudentLandingPage";
import SubjectsPage from "./StudentsPage/pages/SubjectsPage/SubjectsPage";
import QuestionsPage from "./StudentsPage/pages/QuestionsPage/QuestionsPage";
import TodaySchedulePage from "./StudentsPage/pages/TodaySchedulePage/TodaySchedulePage";
import EvaluationPage from "./StudentsPage/pages/EvaluationPage/EvaluationPage";
import ClassRoomRegistration from "./AdminPages/pages/ClassRoom/ClassRoomRegistration";
import ReportCard from "./StudentsPage/pages/ReportCard/ReportCard";
import PaymentPortal from "./StudentsPage/pages/Payment/PaymentPortal";
import PaymentHistory from "./StudentsPage/pages/Payment/PaymentHistory";

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
          <Route path="/Evaluation" element={<EvaluationPage />} />
          <Route
            path="/class-level-registration"
            element={<ClassRoomRegistration />}
          />
          // students page
          <Route path="/student-home" element={<StudentLandingPage />} />
          <Route path="/Subjects" element={<SubjectsPage />} />
          <Route path="/Questions" element={<QuestionsPage />} />
          <Route path="/Today-Schedule" element={<TodaySchedulePage />} />
          <Route path="/Evaluation" element={<EvaluationPage />} />
          <Route path="/Report-card" element={<ReportCard />} />
          <Route path="Payment" element={<PaymentPortal />} />
          <Route path="Payment-history" element={<PaymentHistory/>} />

        </Route>

        {/* Routes without sidebar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
