const formatDate = (date)=>{
    const thedate = new Date(date);
    let month = `${thedate.getMonth() +1 }`;
    let day = `${thedate.getDate()}`;
    const year = thedate.getFullYear()
    if(month.length < 2){
        month = `0${month}`
    }
    if(day.length < 2){
        day = `0${day}`
    }

    return [year,month,day].join("-")
}

export default formatDate;