import "./css/styles.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/header/Header";
import SideMenu from "./components/sidemenu/SideMenu";
import IndexPage from "./pages/index/IndexPage";
import TeachersList from "./pages/teachers/TeachersList/TeachersList";

import ScrollToTop from "./utils/scrollToTop";
import TeacherProfile from "./pages/teachers/TeacherProfile/TeacherProfile";
import StudentsList from "./pages/students/StudentsList/StudentsList";

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
        </Routes>
 

      </Router>
    </div>
  );
}

export default App;
