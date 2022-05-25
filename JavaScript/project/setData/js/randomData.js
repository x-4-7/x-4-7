function setData(){
    let allData=[]

    let minDate = new Date('2020-01-01 00:00:00').getTime()
    let maxDate = new Date('2020-04-11 00:00:00').getTime()

    for(let i = 0; i < 10; i++){
        allData.push({
            date: this.forIntervalRandomData(minDate, maxDate),
            value: this.forIntervalRandomData(0,20)
        })
    }

    allData.sort((a, b) => {
        return a.date - b.date
    })

    allData.forEach((item, index) => {
        item.date = new Date(item.date).toLocaleString()
    })

    allData.forEach((item, index) => {
        if(index > 0 & index){
            let beforeItem = allData[index - 1]

        }

    })
    return allData
}

function forIntervalRandomData(min, max){
    let i = max - min
    let randomNumber = Math.floor(Math.random() * i + min)
    return randomNumber
}

function code(){
    return '123'
}
