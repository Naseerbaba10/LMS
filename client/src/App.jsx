import "./App.css";
import { Button } from "./components/ui/button";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/student/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Dashboard from "./pages/admin/Dashboard";
import Sidebar from "./pages/admin/Sidebar";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse";
import Course from "./pages/student/Course";
import Html1 from "./pages/student/html1";
import Css1 from "./pages/student/Css1";
import JavaScript from "./pages/student/JavaScript";
import React1 from "./pages/student/React1";
import Tailwind from "./pages/student/Tailwind";
import Nextjs from "./pages/student/Nextjs";
import Node from "./pages/student/Node";
import Express from "./pages/student/Express";
import Mongodb from "./pages/student/Mongodb";
import Docker from "./pages/student/Docker";
import { ProtectedRoute } from "./components/ProtectedRoute";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            {/* <Courses /> */}
            <Course/>
          </>
        ),
      },
      {
        path:"/html1",
        element:<ProtectedRoute><Html1/></ProtectedRoute>
      },
      {
        path: "/css1",
        element: <ProtectedRoute><Css1/></ProtectedRoute>
      },
      {
        path: "/javascript",
        element: <ProtectedRoute><JavaScript/></ProtectedRoute>
      },
      {
        path: "/react1",
        element:<ProtectedRoute><React1/></ProtectedRoute>
      },
      {
        path: "/tailwind",
        element:<ProtectedRoute><Tailwind />,</ProtectedRoute> 
      },
      {
        path: "nextjs",
        element:<ProtectedRoute><Nextjs /></ProtectedRoute> 
      },
      {
        path: "node",
        element: <ProtectedRoute><Node /></ProtectedRoute>
      },
      {
        path: "/express",
        element: <ProtectedRoute><Express /></ProtectedRoute>
      },
      {
        path: "/mongodb",
        element: <ProtectedRoute><Mongodb /></ProtectedRoute>
      },
      {
        path: "docker",
        element:<ProtectedRoute><Docker /></ProtectedRoute>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      // admin panel for
      {
        path: "admin",
        element: <Sidebar />,
        children:[
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />
          },
          {
            path:"course/create",
            element:<AddCourse/>
          }
        ]
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
