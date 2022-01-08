import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { selectUser, setLoginDetail } from '../../features/user/userSlice';
import Feed from '../Feed';
import Sidebar from '../Sidebar';
import Wedgets from '../Wedgets';

const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const user = cookies.get('user');
    if (user) {
      dispatch(setLoginDetail(user));
    } else {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Sidebar user={user} />
      <Feed />
      <Wedgets />
    </>
  );
};

export default Home;
