import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="columns"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3}}
    >
        <Grid item sx={12}>
            <StarOutline sx={{fontSize: 100, color: 'white'}}/>
        </Grid>
        <Grid item sx={12}>
            <Typography color='white' variant='h5'>
                Create a note
            </Typography>
        </Grid>
    </Grid>
  )
}
