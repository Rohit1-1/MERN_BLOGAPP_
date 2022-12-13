const strdate=new Date()
const day={
    0:"Sun",
    1:"Mon",
    2:"Tue",
    3:"Wed",
    4:"Thu",
    5:"Fri",
    6:"Sat"
}
const month={
    0:"Jan",
    1:"Feb",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"July",
    7:"Aug",
    8:"Sept",
    9:"Oct",
    10:"Nov",
    11:"Dec",
}
let mnth=strdate.getMonth()
let date=`${strdate.getDate()} ${month[mnth]} ${strdate.getFullYear()}`

module.exports={date}