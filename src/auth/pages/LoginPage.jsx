import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startGoogleSignIn } from "../../store/auth/thunks";
import { useMemo } from "react";
import { Link } from "react-router-dom";


export const LoginPage = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
    email: 'jesus@google.com',
    password: '123456'
  });

    const {status} = useSelector(state => state.auth)
    const isAuthenticating = useMemo(() => status==='checking', [status]);
    


    const onGoogleSignIn = () => {
      dispatch(startGoogleSignIn());
    }

    const onSubmit = (e) => {
      e.preventDefault();
    }


  return (
    <form
    className="form"
    onSubmit={onSubmit}
    >
      <label htmlFor="correo">Correo: </label>
      <input
        type="email"
        id="correo"
        name="email"
        value={email}
        placeholder="correo@google.com"
        onChange={onInputChange}
      />
      <label htmlFor="contraseña">Contraseña: </label>
      <input
        type="password"
        id = "contraseña"
        name = "password"
        value={password}
        placeholder='Contraseña'
        onChange={onInputChange}  
      />
      <div className="signIn_buttons">
        <button
          type="submit"
          disabled={isAuthenticating}
          >
          SignIn
        </button>
        <button
          type="submit"
          onClick={onGoogleSignIn}
          disabled={isAuthenticating}
          >
          Google
        </button>
      </div>
      <div>
        <p>
          ¿Todavía no tienes una cuenta? 
          <Link to="/auth/register">Crear cuenta</Link>
        </p>
      </div>
    </form>
  )
}
