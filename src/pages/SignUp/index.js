import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Form } from '../../components/Form/style';
import { Page } from '../../components/AuthPages/style';

import LOGO from '../../assets/logo.svg';

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleGithubSignUp(e) {
    e.preventDefault();
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  return (
    <Page>
      <img src={LOGO} />
      <h1>Cadastro</h1>
      <Form>
        <button className='github' onClick={(e) => handleGithubSignUp(e)}>
          Entrar com o GitHub
        </button>
        <span>ou</span>
        <input
          placeholder='Email'
          type='email'
          name='email'
          value={formData.email}
          onChange={e => handleChange(e)}
        />
        <input
          placeholder='Senha'
          type='password'
          name='password'
          value={formData.password}
          onChange={e => handleChange(e)}
        />
        <input
          placeholder='Confirme sua senha'
          type='password'
          name='passwordConfirm'
        />
        <div>
          <Link to='/sign-in'>Já possuo cadastro</Link>
          <button onClick={(e) => handleSubmit(e)}>Cadastrar</button>
        </div>
      </Form>
    </Page>
  );
}
