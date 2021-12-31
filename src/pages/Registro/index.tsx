import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useForm } from 'react-hook-form';
import { PESSOA } from '../../config/endpointsConfig';
import { PAINEL } from '../../config/appRoutes';
import { yupResolver } from '@hookform/resolvers/yup';

interface IRegistroFormData {
  firtName: string;
  lastName: string,
  email: string;
  password: string;
  repeatPassword: string
}

const registroSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().min(6, 'No mínimo 6 dígitos'),
});


const Registro: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registroSchema)
  });

  const onSubmit = useCallback(
    async (data: IRegistroFormData) => {
      try {
        await api.post(PESSOA, data);
        navigate(PAINEL);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log(errors)
          return;
        }
      }
    },
    [errors, navigate],
  );

  return (
    <div className='container'>
      <div className='card o-hidden border-0 shadow-lg my-5'>
        <div className='card-body p-0'>
          {/* Nested Row within Card Body */}
          <div className='row'>
            <div className='col-lg-5 d-none d-lg-block bg-register-image'></div>
            <div className='col-lg-7'>
              <div className='p-5'>
                <div className='text-center'>
                  <h1 className='h4 text-gray-900 mb-4'>Create an Account!</h1>
                </div>
                <form className='user' onSubmit={handleSubmit(onSubmit)}>
                  <div className='form-group row'>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <input
                        type='text'
                        {...register('firstName')}
                        className='form-control form-control-user'
                        id='firstName'
                        placeholder='Primeiro Nome' />
                    </div>
                    <div className='col-sm-6'>
                      <input
                        type='text'
                        {...register('lastName')}
                        className='form-control form-control-user'
                        id='lastName'
                        placeholder='Sobrenome' />
                    </div>
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      {...register('email')}
                      className='form-control form-control-user'
                      id='email'
                      placeholder='Email' />
                  </div>
                  <div className='form-group row'>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <input
                        type='password'
                        {...register('password')}
                        className='form-control form-control-user'
                        id='password'
                        placeholder='Senha' />
                    </div>
                    <div className='col-sm-6'>
                      <input type='password'
                        {...register('repeatPassword')}
                        className='form-control form-control-user'
                        id='repeatPassword'
                        placeholder='Confirmar Senha' />
                    </div>
                  </div>
                  <a href='login.html' className='btn btn-primary btn-user btn-block'>
                    Register Account
                  </a>
                  <hr />
                  <a href='index.html' className='btn btn-google btn-user btn-block'>
                    <i className='fab fa-google fa-fw'></i> Register with Google
                  </a>
                  <a href='index.html' className='btn btn-facebook btn-user btn-block'>
                    <i className='fab fa-facebook-f fa-fw'></i> Register with Facebook
                  </a>
                </form>
                <hr />
                <div className='text-center'>
                  <a className='small' href='forgot-password.html'>Forgot Password?</a>
                </div>
                <div className='text-center'>
                  <a className='small' href='login.html'>Already have an account? Login!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registro;
