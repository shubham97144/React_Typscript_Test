import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Formik } from 'formik';
// @mui
import { styled } from '@mui/material/styles';
import {
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUserStart, updateUserStart, loadUsersStart } from '../Redux/Actions/usersAction';
import { loadRolesStart } from '../Redux/Actions/rolesAction';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
// import Logo from '../components/logo';
import Iconify from '../components/iconify';

const initialValues = {
  name: '',
  username: '',
  email: '',
  mobile: '',
  password: '',
  role:''
};

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.username) {
    errors.username = 'Unique Username is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!regex.test(values.email)) {
    errors.email = 'Invalid Email';
  }
  if (!values.mobile) {
    errors.mobile = 'Conatct Number is required';
  }
  if (!values.role) {
    errors.role = 'Must Select User Role';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password atleast contain 8 Character';
  }
  return errors;
};

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '70vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function AddEditUser() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formValue, setFormValue] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const submitForm = (values) => {
    if (id) {
      dispatch(updateUserStart({ values, id }));
      navigate('/dashboard/user')
    } else {
      dispatch(addNewUserStart(values));
      navigate('/dashboard/user')
    }
  };

  const handleClick = () => {
    navigate('/dashboard/user', { replace: true });
  };

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  useEffect(() => {
    dispatch(loadRolesStart())
  },[])

  const users = useSelector((state) => state?.users?.users);
  const roles = useSelector((state) => state?.roles?.roles);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users ? users.find((item) => item.id === Number(id)) : null;
      initialValues.name = singleUser.name
      initialValues.username = singleUser.username
      initialValues.email = singleUser.email
      initialValues.mobile = singleUser.mobile
      initialValues.role = singleUser.role
    } else {
      setEditMode(false);
      initialValues.name = ''
      initialValues.username = ''
      initialValues.email = ''
      initialValues.mobile = ''
      initialValues.role = ''
      setFormValue({ ...initialValues });
    }
  }, [id]);

  return (
    <>
      <Helmet>
        <title> Assignment </title>
      </Helmet>

      <StyledRoot>
        {/* <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        /> */}

        <Container maxWidth="sm">
          <StyledContent>
            <Stack direction="row" spacing={2}>
              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                onClick={handleClick}
                style={{ color: 'blue' }}
              >
                ↜ Back
              </Button>
            </Stack>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>

            <Typography variant="h4" gutterBottom>
              Create New USer
            </Typography>

            <Formik initialValues={initialValues} validate={validate} onSubmit={submitForm}>
              {(formik) => {
                const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
                return (
                  <div className="container">
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <Stack spacing={3} margin={1}>
                          <TextField
                            name="name"
                            label="Enter Name"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name && touched.name ? 'input-error' : null}
                          />
                        </Stack>
                        {errors.name && touched.name && (
                          <span className="error" style={{ color: '#DF3E30', marginLeft: '2%', fontWeight: '600' }}>
                            {errors.name}
                          </span>
                        )}
                      </div>

                      <div className="form-row">
                        <Stack spacing={3} margin={1}>
                          <TextField
                            name="username"
                            label="Enter UserName"
                            id="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.username && touched.username ? 'input-error' : null}
                          />
                        </Stack>
                        {errors.username && touched.username && (
                          <span className="error" style={{ color: '#DF3E30', marginLeft: '2%', fontWeight: '600' }}>
                            {errors.username}
                          </span>
                        )}
                      </div>

                      <div className="form-row">
                        <Stack spacing={3} margin={1}>
                          <TextField
                            name="email"
                            label="Enter Email Address"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? 'input-error' : null}
                          />
                        </Stack>
                        {errors.email && touched.email && (
                          <span className="error" style={{ color: '#DF3E30', marginLeft: '2%', fontWeight: '600' }}>
                            {errors.email}
                          </span>
                        )}
                      </div>

                      <div className="form-row">
                        <Stack spacing={3} margin={1}>
                          <TextField
                            name="mobile"
                            label="Enter Conatact Number"
                            id="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.mobile && touched.mobile ? 'input-error' : null}
                          />
                        </Stack>
                        {errors.mobile && touched.mobile && (
                          <span className="error" style={{ color: '#DF3E30', marginLeft: '2%', fontWeight: '600' }}>
                            {errors.mobile}
                          </span>
                        )}
                      </div>

                      <div className="form-row">
                        <Stack spacing={3} margin={1}>
                            <Select
                                name="role"
                                label="Select Role"
                                id="role"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                input={<OutlinedInput label="Select Role" />}
                                value={values.role}
                                className={errors.role && touched.role ? 'input-error' : null}
                            >
                                <MenuItem value="">
                                    <em>Choose a Role</em>
                                </MenuItem>
                                {roles.map((item, index) => (
                                    <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </Stack>
                        {errors.role && touched.role && (
                          <span className="error" style={{ color: '#DF3E30', marginLeft: '2%', fontWeight: '600' }}>
                            {errors.role}
                          </span>
                        )}
                      </div>

                      <div className="form-row">
                        <Stack spacing={3} margin={1}>
                          <TextField
                            name="password"
                            label="Enter your Password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? 'input-error' : null}
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Stack>
                        {errors.password && touched.password && (
                          <span className="error" style={{ color: '#DF3E30', marginLeft: '2%', fontWeight: '600' }}>
                            {errors.password}
                          </span>
                        )}
                      </div>
                      <LoadingButton fullWidth size="large" type="submit" variant="contained">
                        Submit
                      </LoadingButton>
                    </form>
                  </div>
                );
              }}
            </Formik>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
