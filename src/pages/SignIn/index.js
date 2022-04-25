import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Form } from '../../components/Form/style';
import { Page } from '../../components/AuthPages/style';
import api from '../../services/api';

import LOGO from '../../assets/logo.svg';

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleGithubSignUp(e) {
    e.preventDefault();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      await api.signIn(formData);
      navigate('/disciplines')

    } catch (error) {
        alert('Por favor, tente novamente');
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
        <div>
          <Link to='/sign-up'>Ainda não possuo cadastro</Link>
          <button onClick={(e) => handleSubmit(e)}>Entrar</button>
        </div>
      </Form>
    </Page>
  );
}
