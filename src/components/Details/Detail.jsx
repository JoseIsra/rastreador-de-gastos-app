import React from 'react'

import { Card, CardHeader, CardContent , Typography} from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';

export const Detail = ({title}) => {
    const classes = useStyles();

    return (
        <Card className={title==="Ingresos"? classes.income:classes.expense} >
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">$100</Typography>
                {/* <Doughnut  /> */}
            </CardContent>
        </Card>
    )
}
