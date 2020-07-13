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