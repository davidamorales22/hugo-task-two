import {
  Box,
  Container,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import React from 'react'

// F = C * (9 / 5) + 32
const celsiusToFahrenheit = C => (C ? (C * (9 / 5) + 32).toFixed(2) : 0)
// C = (F - 32) * (5/9)
const fahrenheitToCelsius = F => (F ? ((F - 32) * (5 / 9)).toFixed(2) : 0)

const Task = () => {
  const [celsius, setCelsius] = React.useState(0)
  const [fahrenheit, setFahrenheit] = React.useState(0)

  const handleChange = name => event => {
    const value = event.target.value
    if (name === 'celsius') {
      setFahrenheit(value ? celsiusToFahrenheit(value) : '')
      setCelsius(value)
    }
    if (name === 'fahrenheit') {
      setCelsius(value ? fahrenheitToCelsius(value) : '')
      setFahrenheit(value)
    }
  }

  return (
    <Container>
      <Box minHeight={600}>
        <Typography variant='h5' color='primary' align='center'>
          Temperature Converter
        </Typography>
        <Divider />
        <Box height={24} />
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Celsius'
              type='number'
              onChange={handleChange('celsius')}
              fullWidth
              value={celsius}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Fahrenheit'
              fullWidth
              type='number'
              onChange={handleChange('fahrenheit')}
              value={fahrenheit}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Task
