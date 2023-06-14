import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


export const RegisterPage = () => {

  const formData = {
    displayName:'',
    email: '',
    password:''
  }
  const formValidations = {
    displayName: [(value)=>value.length >= 1, 'El nombre es obligatorio'],
    email: [(value)=>value.includes('@'), 'El correo debe tener una @'],
    password: [(value)=> value.length >=6, 'El password debe tener más 6 o más caracteres'],
  }
  const { displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);
  
        
  const {status} = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status==='checking', [status]);


  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // const isFormValid = true;
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(displayName, email, password));
  }

  return (
    <form
    className="form"
    onSubmit={(e) => onSubmit(e)}
    >
      <h1>Crear cuenta</h1>
      <label htmlFor="nombre"></label>
      <input
        type="text"
        id="nombre"
        name="displayName"
        value={displayName}
        placeholder="Tu nombre completo"
        onChange={onInputChange}
        />
      <h5>{(displayNameValid!==null && formSubmitted) ? displayNameValid : ''}</h5>
      <label htmlFor="correo"></label>
      <input
        type="email"
        id="correo"
        name="email"
        value={email}
        placeholder="Tu correo"
        onChange={onInputChange}
        />
      <h5>{(emailValid!==null && formSubmitted) ? emailValid : ''}</h5>
      <label htmlFor="contraseña"></label>
      <input
        type="password"
        id = 'contraseña'
        name = 'password'
        value={password}
        placeholder='Tu contraseña'
        onChange={onInputChange}  
        />
      <h5>{(passwordValid!==null && formSubmitted) ? passwordValid : ''}</h5>
      <div className="register_buttons">
        <button
          type="submit"
          disabled={isAuthenticating}
          >
          Crear cuenta
        </button>
      </div>
      <div className="form__msg">
        <p>
          ¿Ya tienes una cuenta?      
          <Link to="/auth/login" className="form__link">Ingresar</Link>
        </p>
      </div>
    </form>
    )
  }