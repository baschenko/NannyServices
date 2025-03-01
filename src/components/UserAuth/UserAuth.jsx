import Button from '../Button/Button.jsx';
import s from './UserAuth.module.css';

const UserAuth = () => {
  return (
    <div className={s.btnWrapper}>
      <Button>Log In</Button>
      <Button className={s.brnRegistration}>Registration</Button>
    </div>
  );
};

export default UserAuth;
