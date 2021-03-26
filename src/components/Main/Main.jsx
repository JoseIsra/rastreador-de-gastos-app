import React from 'react'
import {Card, CardContent, CardHeader, Grid, Typography, Divider} from '@material-ui/core'
import useStyles from './style'
import { Form } from '../Form/Form';
import {List } from './List/List';
import {useDataLayerValue } from '../../context/DataLayer';
import {balance } from '../../context/reducer';
export const Main = () => {
    const classes = useStyles();
    let [{transactions}] = useDataLayerValue();
    

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense tracker" subheader="Potenciado por Speechly"/>
            <CardContent>
                <Typography  variant="subtitle1" >Tienes ${balance(transactions)}</Typography>
                <Typography variant="subtitle2" >
                    Agrega algo con Speechly
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
