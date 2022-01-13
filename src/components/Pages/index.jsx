import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { selectUser, setLoginDetail } from '../../features/user/userSlice';
import Sidebar from '../Sidebar';
import Wedgets from '../Wedgets';
import { Outlet } from 'react-router-dom';

const Page = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const cookies = new Cookies();
    const user = cookies.get('user');
    if (user) {
      dispatch(setLoginDetail(user));
    } else {
      navigate('/');
    }
  }, [navigate, dispatch]);

  return (
    <>
      <Sidebar user={user} />
      <Outlet />
      <Wedgets />
    </>
  );
};

export default Page;
