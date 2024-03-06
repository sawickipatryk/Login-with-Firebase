import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'

import { signInWithEmailAndPassword } from 'firebase/auth'

import LoginForm from '../../components/LoginForm'

import { auth } from '../../firebase'

export const LoginPage = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const navigate = useNavigate()

  const onClickCreateAccount = React.useCallback(() => navigate('/register'), [navigate])

  const methods = useForm()
  const { handleSubmit } = methods

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        console.log('Logged In')
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <Box
      sx={{
        ...sx,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
      {...otherProps}
    >
      <FormProvider
        {...methods}
      >
        <LoginForm
          onSubmit={handleSubmit((data) => signIn(data.email, data.password))}
          onClickCreateAccount={onClickCreateAccount}
        />
      </FormProvider>
    </Box>
  )
}

LoginPage.propTypes = {
  sx: PropTypes.object
}

export default LoginPage
