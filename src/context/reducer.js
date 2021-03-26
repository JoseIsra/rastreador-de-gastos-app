


export const balance =(transactions)=>{
    return transactions?.reduce((total,actual)=> actual.type==='Expense'?total-actual.amount:total+actual.amount, 0)
} 

export const initialState = {transactions:[]}// {transactions:JSON.parse(localStorage.getItem('transactions'))} || {transactions:[]}


const reducer =(state , action)=>{
    switch(action.type){
        case "DELETE_TRANSACTION": 
        let thetransactions =state.transactions.filter(item => item.id!== action.payload)
        localStorage.setItem('transactions',JSON.stringify(thetransactions))
        return {
            ...state,
            transactions: thetransactions
        }

        case "ADD_TRANSACTION":
            let thetransaction = [...state.transactions, action.payload]
            localStorage.setItem('transactions',JSON.stringify(thetransaction))
            return {
                ...state,
                transactions:thetransaction
            }
        default : return state
    }
}   

export default reducer ;