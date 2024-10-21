import "./css/App.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./js/components/header/Header";
import SideMenu from "./js/components/sidemenu/SideMenu";
import IndexPage from "./js/pages/index/IndexPage";
import TeachersList from "./js/pages/teachers/TeachersList/TeachersList";

import ScrollToTop from "./utils/scrollToTop";
import TeacherProfile from "./js/pages/teachers/TeacherProfile/TeacherProfile";
import StudentsList from "./js/pages/students/StudentsList/StudentsList";
import StudentProfile from "./js/pages/students/StudentProfile/StudentProfile";
import GroupsList from "./js/pages/groups/GroupsList/GroupsList";
import GroupProfile from "./js/pages/groups/GroupProfile/GroupProfile";
import CoursesList from "./js/pages/courses/CoursesList";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>

        <Header />
        <SideMenu />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<IndexPage />} />
          <Route path="/teachers/list" element={<TeachersList />} />
          <Route path="/teachers/profile/:id" element={<TeacherProfile />} />
          <Route path="/students/list" element={<StudentsList />} />
          <Route path="/students/profile/:id" element={<StudentProfile />} />
          <Route path="/groups/list" element={<GroupsList />} />
          <Route path="/groups/profile/:id" element={<GroupProfile />} />
          <Route path="/courses/list" element={<CoursesList />} />
        </Routes>

      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
