import React, { useState, useEffect } from 'react'
import {TextField , Typography, Button, Grid, FormControl, InputLabel,
Select, MenuItem} from '@material-ui/core'
import useStyles from './style'
import  {v4 as uuidv4 } from 'uuid';
import { useDataLayerValue } from '../../context/DataLayer';
import { incomeCategories, expenseCategories } from '../../constants/categories';
import formatDate from '../../utils/formatDate';
import { useSpeechContext  } from "@speechly/react-client";

const initialState = {
    amount:'',
    category:'',
    type:'Income',
    date:formatDate(new Date())
}


export const Form = () => {
    const classes = useStyles();
    const [,dispatch] = useDataLayerValue();
    const [formData , setFormData] = useState(initialState)
    const  { segment } = useSpeechContext();



    const changeValue =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const createTransaction =()=>{
        if(Number.isNaN(Number(formData.amount))) return;
        const transaction = { ...formData,amount:Number(formData.amount),id:uuidv4() }
            dispatch({
                type:"ADD_TRANSACTION",
                payload:transaction
            })
            console.log(transaction)
        setFormData(initialState)
    }


    useEffect(()=>{
        if(segment){
            if(segment.intent.intent === 'add_expense'){
                setFormData({...formData, type:'Expense'})
            }else if(segment.intent.intent === "add_income"){
                setFormData({...formData, type:'Income'})
            }else if(segment.isFinal && segment.intent.intent === 'create_transaction'){
                return createTransaction()
            }else if(segment.isFinal && segment.intent.intent === 'cancel_transaction'){
                return setFormData(initialState)
            }
            segment.entities.forEach(e=> {
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLocaleLowerCase()}`
                switch(e.type){
                    case 'amount':
                        setFormData({...formData, amount:e.value});
                        break;
                    case 'category':
                        if(incomeCategories.map((ic)=> ic.type ).includes(category)){
                            setFormData({...formData,type:'Income', category})
                        }else if(expenseCategories.map((ec)=> ec.type ).includes(category)){
                            setFormData({...formData,type:'Expense', category})

                        }
                    break;
                    case 'date':
                        setFormData({...formData, date:e.value});
                        break;
                    default : break
                }
            })
            if(segment.isFinal && formData.amount && formData.category && formData.type && formData.date){
                createTransaction()
            }
        }
    },[segment]);

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography align="center" variant="body2" gutterBottom>
                    {segment && segment.words.map(w=> w.value).join(" ") }
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Tipo</InputLabel>
                    <Select name="type" value={formData.type} onChange={changeValue}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select name="category" value={formData.category} onChange={changeValue}>
                {selectedCategories.map(category => (
                    <MenuItem key={category.type} value={category.type}>{category.type}</MenuItem>
                ))}
            </Select>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
                <TextField value={formData.amount}
                name="amount" onChange={changeValue}
                type="number" label="Cantidad" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField  value={formData.date} onChange={(e)=>setFormData({...formData,date:formatDate(e.target.value)})} type="date" label="Date" fullWidth />
            </Grid>
            <Button onClick={createTransaction} className={classes.button} color="primary" fullWidth
            variant="outlined">Crear</Button>

        </Grid>
    )
}
