import React from 'react'
import {TextField , Typography, Button, Grid, FormControl, InputLabel,
Select, MenuItem} from '@material-ui/core'
import useStyles from './style'


export const Form = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...speak speak
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Tipo</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select>
                <MenuItem value="business">Negocio</MenuItem>
                <MenuItem value="food">Comida</MenuItem>
            </Select>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField type="number" label="Cantidad" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth />
            </Grid>
            <Button className={classes.button} color="primary" fullWidth
            variant="outlined">Crear</Button>

        </Grid>
    )
}
