
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../context/UserProvider';
import { AuthContext } from '@/auth/context/AuthContext';

import { Navbar } from '../components/Navbar';

import { RegisterPage } from '../pages/RegisterPage';
import { UsersPage } from '../pages/UsersPage';

function UserRoutes() {

  const { login } = useContext(AuthContext);

  return (
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path='users' element={<UsersPage />} />
          {!login.isAdmin ||
          <>
            <Route path='users/register' element={<RegisterPage />} />
            <Route path='users/edit/:id' element={<RegisterPage />} />
          </>
          }
          <Route path='/' element={<Navigate to='/users' />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export { UserRoutes };
