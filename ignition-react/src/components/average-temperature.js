import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { WbSunny } from '@mui/icons-material';

export const AverageTemperature = (props) => (
  <Card {...props}>
    <CardContent sx={{ 
      padding: '10px 20px'
    }}>
      <Grid
        container
        spacing={1}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Average external temperature on green wall
          </Typography>
          <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >Before GI install:</Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            8.7 °C
          </Typography>
          <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >After GI install:</Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
           10.8 °C
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
          
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <WbSunny />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          (Autumn Season)
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
