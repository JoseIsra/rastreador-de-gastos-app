import React from 'react'
import useStyles from './styles'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, 
    ListItemSecondaryAction, IconButton, Slide} from '@material-ui/core'

    import DeleteIcon from '@material-ui/icons/Delete';
    import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import { useDataLayerValue } from '../../../context/DataLayer';

export const List = () => {
    const classes = useStyles();
    const [{transactions},dispatch] = useDataLayerValue();    


    const deleteTransaction = (id)=>{
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions?.map((transaction)=> (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income'? classes.avatarIncome:classes.avatarExpense} >
                            <MoneyOffIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category}
                        secondary={`$${transaction.amount} - ${transaction.date}`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete"  onClick={()=>deleteTransaction(transaction.id)}>
                            <DeleteIcon  />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}
