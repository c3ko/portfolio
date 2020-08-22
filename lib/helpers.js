export function listToTuples(list){
    let tuplesList = []
    let i = 0
    while(i < list.length){
        
        if(list[i + 1]){
            tuplesList.push([list[i], list[i + 1]])
            i = i + 2
        }
        else {
            tuplesList.push([list[i]])
            i++
        }
    }
    return tuplesList
}

export function getDateString(time){
    const Months = {
        1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
        7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
    }
    // Convert unix timestamps to milliseconds and create Date object
    const date = new Date(time * 1000)
    const dateString = `${date.getDate()} ${Months[date.getMonth() + 1]} ${date.getFullYear()}`

    return dateString
}