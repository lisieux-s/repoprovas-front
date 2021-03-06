import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Form } from '../../components/Form/style';
import { Page } from '../../components/AuthPages/style';
import api from '../../services/api';

import LOGO from '../../assets/logo.svg';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  function handleGithubSignUp(e) {
    e.preventDefault();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (formData.password !== formData.passwordConfirm) {
        alert('As senhas devem ser iguais');
      }

      await api.signUp({
        email: formData.email,
        password: formData.password,
      });
      navigate('/sign-in')

    } catch (error) {
      if (error.response.status === 409) {
        alert('Esse e-mail já está sendo usado');
      } else {
        alert('Por favor, tente novamente');
      }
    }
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
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          placeholder='Senha'
          type='password'
          name='password'
          value={formData.password}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          placeholder='Confirme sua senha'
          type='password'
          name='passwordConfirm'
          value={formData.passwordConfirm}
          onChange={(e) => handleChange(e)}
          required
        />
        <div>
          <Link to='/sign-in'>Já possuo cadastro</Link>
          <button onClick={(e) => handleSubmit(e)}>Cadastrar</button>
        </div>
      </Form>
    </Page>
  );
}
