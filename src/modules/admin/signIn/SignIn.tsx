import { useNavigate } from 'react-router-dom';
import { Button, Grid, Paper, TextField, Typography, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../../store/hooks.ts';
import { getAdmin } from './slice.ts';
import { useEffect, useState } from 'react';

type Form = {
  login: string;
  password: string;
};

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { admin } = useAppSelector(getAdmin);
  const { login, password } = admin;
  const navigate = useNavigate();
  const goToAdmin = () => navigate('/admin/home', { replace: false });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    if (data.login === login && data.password === password) {
      goToAdmin();
    } else {
      setErrorMessage('Неверный логин или пароль!');
    }
  };

  useEffect(() => {
    setValue('login', '');
  }, [setValue]);

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: '100%' }}
    >
      <Box component={Paper} elevation={3} p={4} minWidth={320}>
        <Grid container direction='column' spacing={3} alignItems='center'>
          <Grid item>
            <LockOutlinedIcon fontSize='large' color='primary' />
          </Grid>
          <Grid item>
            <Typography variant='h5' gutterBottom color='textPrimary'>
              Вход
            </Typography>
          </Grid>

          {errorMessage && (
            <Grid item>
              <Typography color='error'>{errorMessage}</Typography>
            </Grid>
          )}

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Box mb={2}>
              <TextField
                variant='outlined'
                fullWidth
                label='Логин'
                {...register('login', {
                  required: 'Логин обязателен',
                  pattern: {
                    value: /^[A-Za-z0-9]+$/i,
                    message: 'Логин должен состоять только из букв и цифр',
                  },
                })}
                error={Boolean(errors.login)}
                helperText={errors.login && errors.login.message}
              />
            </Box>
            <Box mb={2}>
              <TextField
                variant='outlined'
                fullWidth
                type='password'
                label='Пароль'
                {...register('password', {
                  required: 'Пароль обязателен',
                  minLength: {
                    value: 6,
                    message: 'Пароль должен содержать не менее 6 символов',
                  },
                })}
                error={Boolean(errors.password)}
                helperText={errors.password && errors.password.message}
              />
            </Box>
            <Grid item>
              <Button variant='contained' color='primary' type='submit'>
                Войти
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SignIn;
