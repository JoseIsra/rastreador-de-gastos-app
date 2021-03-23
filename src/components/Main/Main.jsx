import React from 'react'
import {Card, CardContent, CardHeader, Grid, Typography, Divider} from '@material-ui/core'
import useStyles from './style'
import { Form } from '../Form/Form';
import {List } from './List/List'
export const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="expense tracker" subheader="Potenciado por Speechly"/>
            <CardContent>
                <Typography  variant="h6" >Tienes 100</Typography>
                <Typography variant="subtitle2" >
                    Agrega algo con Speechly my friend
                </Typography>
                <Divider className={classes.divider}/>
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                    <List />
            </Grid>
            </Grid>
            </CardContent>
        </Card>
    )
}
