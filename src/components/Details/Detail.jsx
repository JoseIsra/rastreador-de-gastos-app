import React from 'react'

import { Card, CardHeader, CardContent , Typography} from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import { useTransactions } from '../../useTransactions';
export const Detail = ({title}) => {
    const classes = useStyles();
    const {subTotal, charData} = useTransactions(title)
    return (
        <Card className={title==="Income"? classes.income:classes.expense} >
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">${subTotal}</Typography>
                <Doughnut  data={charData}/>
            </CardContent>
        </Card>
    )
}
