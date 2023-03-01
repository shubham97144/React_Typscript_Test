import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Formik } from 'formik';
// @mui
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  TextField,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { addNewRolestart, updateRolestart, loadRolesStart } from '../Redux/Actions/rolesAction';
// hooks
import useResponsive from '../hooks/useResponsive';
// components

const initialValues = {
  name: '',
};

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = 'Role is required';
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

export default function AddEditRole() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formValue, setFormValue] = useState(initialValues);
  const [editMode, setEditMode] = useState(false);

  const submitForm = (values) => {
    if (id) {
      dispatch(updateRolestart({ values, id }));
      navigate('/dashboard/user')
    } else {
      dispatch(addNewRolestart(values));
      navigate('/dashboard/user')
    }
  };

  const handleClick = () => {
    navigate('/dashboard/user', { replace: true });
  };


  useEffect(() => {
    dispatch(loadRolesStart())
  },[])

  const roles = useSelector((state) => state?.roles?.roles);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleRole = roles ? roles.find((item) => item.id === Number(id)) : null;
      initialValues.name = singleRole.name
    } else {
      initialValues.name = ''
      setEditMode(false);
      setFormValue({ ...initialValues });
    }
  }, [id]);

  return (
    <>
      <Helmet>
        <title> Assignment </title>
      </Helmet>

      <StyledRoot>

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
                            label="Enter New Role"
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

