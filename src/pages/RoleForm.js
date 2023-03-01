import React from 'react'

export default function RoleForm() {
  return (
      <>
        <Helmet>
          <title> Assignment </title>
        </Helmet>
  
        <StyledRoot>
          <Logo
            sx={{
              position: 'fixed',
              top: { xs: 16, sm: 24, md: 40 },
              left: { xs: 16, sm: 24, md: 40 },
            }}
          />
  
          <Container maxWidth="sm">
            <StyledContent>
              <Typography variant="h4" gutterBottom>
                Sign in to Minimal
              </Typography>
  
              <Typography variant="body2" sx={{ mb: 5 }}>
                Don’t have an account? {''}
                <Link variant="subtitle2">Get started</Link>
              </Typography>
  
              <Stack direction="row" spacing={2}>
                <Button fullWidth size="large" color="inherit" variant="outlined">
                  <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
                </Button>
  
                <Button fullWidth size="large" color="inherit" variant="outlined">
                  <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
                </Button>
  
                <Button fullWidth size="large" color="inherit" variant="outlined">
                  <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
                </Button>
              </Stack>
  
              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  OR
                </Typography>
              </Divider>
  
              <LoginForm />
            </StyledContent>
          </Container>
        </StyledRoot>
      </>
  )
}
