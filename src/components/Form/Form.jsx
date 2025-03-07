import { useForm } from 'react-hook-form'
import React from 'react'
import './Form.css'

const Form = () => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      userName: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (values) => {
    console.log('Submit de React Hook Form', values)
  }

  return (
    <form
      className='form-container'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className='input-group'>
        <input
          {...register('userName', {
            required: 'Completa este campo',
            minLength: {
              value: 2,
              message: 'Debe tener al menos 2 caracteres'
            }
          })}
          type='text'
          id='userName'
          placeholder='Username'
          className={`form-input ${
            formState.errors.userName ? 'input-error' : ''
          }`}
        />
        {formState.errors.userName && (
          <p className='error-message'>{formState.errors.userName.message}</p>
        )}
      </div>

      <div className='input-group'>
        <input
          {...register('email', {
            required: 'Completa este campo',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Introduce un email válido'
            }
          })}
          type='email'
          id='email'
          placeholder='Email'
          className={`form-input ${
            formState.errors.email ? 'input-error' : ''
          }`}
        />
        {formState.errors.email && (
          <p className='error-message'>{formState.errors.email.message}</p>
        )}
      </div>

      <div className='input-group'>
        <input
          {...register('password', {
            required: 'Completa este campo',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: 'Mín. 8 caracteres, con letras y números'
            }
          })}
          type='password'
          id='password'
          placeholder='Password'
          className={`form-input ${
            formState.errors.password ? 'input-error' : ''
          }`}
        />
        {formState.errors.password && (
          <p className='error-message'>{formState.errors.password.message}</p>
        )}
      </div>

      <button
        type='submit'
        className='form-button'
        disabled={!formState.isDirty}
      >
        Send
      </button>
    </form>
  )
}

export default Form
