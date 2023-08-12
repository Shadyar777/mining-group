import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const goToAdmin = () => navigate('/admin/home', { replace: false });
  return (
    <div>
      <button onClick={goToAdmin}>sing in</button>
    </div>
  );
};

export default SignIn;
