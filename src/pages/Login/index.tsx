import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { path } from '../../routes/RoutePaths';
import { yupResolver } from '@hookform/resolvers/yup';
import { PAINEL } from '../../config/appRoutes';
import AuthMockConsumer from '../../hooks/authMock';

interface ILoginFormData {
  username: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Nome de usário obrigatório'),
  senha: Yup.string().required('Senha obrigatória'),
});

const Login: React.FC = () => {
  const { login: signIn } = useAuth();
  const { login } = AuthMockConsumer()
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema)
  });

  const onSubmit = useCallback(
    async (data: ILoginFormData) => {
      try {
        await login().then(() => {
          navigate(PAINEL);
        });
        /*await signIn({
          username: 'admin@ru.unifesspa.edu.br',
          password: '654321',
        });
        navigate(PAINEL);*/
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          console.log(err)
          console.log(errors);
          return;
        }
      }
    }, [errors, login, navigate]);


  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="user">
                    <div className="form-group">
                      <input
                        {...register("username")}
                        type="text"
                        className="form-control form-control-user"
                        id="username"
                        aria-describedby="usernameHelp"
                        placeholder="Usuário" />
                    </div>
                    <div className="form-group">
                      <input
                        {...register("password")}
                        type="password"

                        className="form-control form-control-user"
                        id="password"
                        placeholder="Senha" />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox small">
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">Lembrar</label>
                      </div>
                    </div>
                    <button type='submit' className="btn btn-primary btn-user btn-block">
                      Entrar
                    </button>
                    <hr />
                    <a href="index.html" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="register.html">Create an Account!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
