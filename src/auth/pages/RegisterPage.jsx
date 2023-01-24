import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"

const formData = {
  displayName: 'Elden',
  email: 'e@google.com',
  password: '123456'
}

export const RegisterPage = () => {

  const {displayName, email, password, onInputChange} = useForm(formData)

  return (
    <AuthLayout title="Register">
        <form>
          <Grid container>

          <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Name" 
                type="text" 
                placeholder="Name"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Email" 
                type="email" 
                placeholder="mail@email.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label="Password" 
                type="password" 
                placeholder="Password"
                fullWidth
              />
            </Grid>

            <Grid container
              spacing={2}
              sx={{mb: 2, mt: 1}}  
            >
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Create account
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>Already have an account?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Enter
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
