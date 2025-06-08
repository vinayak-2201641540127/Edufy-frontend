import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/login';
import Register from './pages/auth/Register';
import Header from './components/header/Header';
import Verify from './pages/auth/Verify';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Account from './pages/account/Account';
import { UserData } from './context/UserContext';
import Loading from './components/loading/Loading';
import Courses from './pages/courses/Courses';
import CourseDescription from './pages/coursedescription/CourseDescription';
import PaymentSuccess from './pages/paymentsuccess/PaymentSuccess';
import Dashboard from './pages/dashboard/Dashboard';
import CourseStudy from './pages/coursestudy/CourseStudy';
import Lecture from './pages/lecture/Lecture';
import AdminDashBoard from './admin/Dashboard/AdminDashBoard';
import AdminCourses from './admin/Courses/AdminCourses';
import AdminUsers from './admin/Users/AdminUsers';
// import { UserData } from './context/UserContext';

const App = () => {
  // const {user} = UserData()
  // console.log(user)
  const { isAuth, user, loading } = UserData();
  return (
    <>
      {loading ? (<Loading />) :
        (<BrowserRouter>
          <Header isAuth={isAuth} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/account' element={isAuth ? <Account user={user} /> : <Login />} />
            <Route path='/login' element={isAuth ? <Home /> : <Login />} />
            <Route path='/register' element={isAuth ? <Home /> : <Register />} />
            <Route path='/verify' element={isAuth ? <Home /> : <Verify />} />
            <Route path='/course/:id' element={isAuth?<CourseDescription user={user}/>: <Login />} />
            <Route path='/payment-success/:id' element={isAuth?<PaymentSuccess user={user} />:<Login /> } />
            <Route path='/:id/dashboard' element={isAuth?<Dashboard user={user} />:<Login /> } />
            <Route path='/course/study/:id' element={isAuth?<CourseStudy user={user} />:<Login /> } />
            <Route path='/lectures/:id' element={isAuth?<Lecture user={user} />:<Login /> } />
            <Route path='/admin/dashboard' element={isAuth?<AdminDashBoard user={user} />:<Login /> } />
            <Route path='/admin/course' element={isAuth?<AdminCourses user={user} />:<Login /> } />
            <Route path='/admin/users' element={isAuth?<AdminUsers user={user} />:<Login /> } />

          </Routes>
          <Footer />
        </BrowserRouter>)}
    </>
  )
}

export default App;
