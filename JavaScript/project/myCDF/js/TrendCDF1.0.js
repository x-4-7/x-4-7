let history = [{
    "date": "2017-11-09T05:52:31.726Z",
    "value": Number(35)
}]

//resultData = {
// "series": [
//     {
//     "name":"2021-1",
//     "values":[2021-1.value]
//     },
// ],
// "common": ["2021-1.value.proportion"]
// }
function code(){
    return '2233'
}


//存放生成的数据
function generateData(){
    let data = {
        series: {
            name: [],
            values: []
        },
        common: []
    }

    history.forEach((item, index)=>{
        //获取数据年份，为得到series的name
        item.year = new Date(item.date).getFullYear()
        //获取数据的季度，为得到series的name
        //Math.ceil(x) 返回 x，向上舍入为最接近的整数。
        item.quarter = Math.ceil((new Date(item.date).getMonth() + 1)/3)
        //获取数据的时间戳，为方便后续计算占比
        item.time = new Date(item.date).getTime()

        if(index > 0 & `${item.year}-${item.quarter}`[nowYearQuarter]){
            data.series.name.push(nowYearQuarter)
        }
        //记录series的name
        let nowYearQuarter = `${item.year}-${item.quarter}`
        data.series.name.push(nowYearQuarter)
    })



    return data
}




