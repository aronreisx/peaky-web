import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

export function SignIn() {
  return (
    <Container>
      <img src={logoImg} alt="Peaky Barber logo" />
      <form action="">
        <h1>Log In our app</h1>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <a href="pass">I forgot my password</a>
        <button type="submit">Login</button>
      </form>
      <div className="separator">or</div>
      <button>
        <FiLogIn className="register-icon" />
        Create an account
      </button>
    </Container>
  );
}
