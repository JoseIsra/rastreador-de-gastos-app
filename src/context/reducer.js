
export const initialState = {
    transactions:[  {id:1,type:"Income",category:"business",amount:100,date:"Mon Mar 22"},
    { id:2,type:"Expense",category:"house",amount:100,date:"Mon Mar 23"},
    {id:3,type:"Income",category:"marketing",amount:100,date:"Mon Mar 24"}]
    
}

const reducer =(state , action)=>{
    switch(action.type){
        case "DELETE_TRANSACTION": 
        return {
            ...state,
            transactions: state.transactions.filter(item => item.id!== action.payload)
        }
        default : return state
    }
}   

export default reducer ;