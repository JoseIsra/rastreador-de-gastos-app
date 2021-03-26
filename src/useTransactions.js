import { incomeCategories, expenseCategories, resetCategories} from './constants/categories';
import { useDataLayerValue } from './context/DataLayer';



export const useTransactions = (title) => {
    resetCategories();
    const [{ transactions }]  = useDataLayerValue();
    const transactionType = transactions?.filter(transaction => transaction.type === title);
    const subTotal = transactionType?.reduce((total, category) => total + category.amount,0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories ;
    let thing = JSON.parse(localStorage.getItem('transactions'));

    console.log({transactions, subTotal,thing})
    
    transactionType?.forEach((transactiontype)=> {
        const category = categories.find((c)=> c.type === transactiontype.category)
        if(category) category.amount += transactiontype.amount
    })

    const filteredCategories = categories.filter(c => c.amount > 0);
    const charData = {
        datasets:[{
            data:filteredCategories.map(fc => fc.amount),
            backgroundColor:filteredCategories.map((c)=> c.color)
        }],
        labels:filteredCategories.map(fc => fc.type)
    }
        
    return { subTotal ,charData }

}
