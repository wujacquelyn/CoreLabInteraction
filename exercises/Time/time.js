var timeHolder = document.getElementById('time')
var dateHolder = document.getElementById('date')
var now = new Date()
var hr = now.getHours()
var min = now.getMinutes()
var sec = now.getSeconds()
var day = now.getDate()
var weekDay = now.getDay()
var month = now.getMonth()

function updateTime(){
  timeHolder.innerHTML = hr+":"+min+":"+sec
  dateHolder.innerHTML = month+"/"+day+"weekday: "+weekDay
}setInterval(updateTime, 1000)

//daytime
if (hr<3,hr>19){
    document.querySelector('.sky').style.backgroundColor = "#005B51"
    document.querySelector('.sea').style.backgroundColor = "#004438"
    document.getElementById('cres').style.display= "block"
    document.getElementById('circle').style.display= "none"
    console.log("it is nighttime")
  }else if(month>2 && month<5 && day>=21){
    console.log("it's not nighttime")
//month and SEASONS
    console.log("spring")
    document.querySelector('.sky').style.backgroundColor = "#72FFF7"
    document.querySelector('.sea').style.backgroundColor = "#34E5C5"
    document.getElementById('circle').style.backgroundColor= "#FFCE5B"
  }else if (month>=5 && month<8 &&day>=21){
    console.log(summer)
    document.querySelector('.sky').style.backgroundColor = "#FF8E66"
    document.querySelector('.sea').style.backgroundColor = "#EF7B00"
    document.getElementById('circle').style.backgroundColor= "#FCE958"
  }else if(month>=8 && month<=11){
    document.querySelector('.sky').style.backgroundColor = "#FFBE75"
    document.querySelector('.sea').style.backgroundColor = "#FFC447"
    document.getElementById('circle').style.backgroundColor= "#FFE4AF"
    console.log(fall)
  }else if(month>=0 && month<2){
    console.log(winter)
    document.querySelector('.sky').style.backgroundColor = "#D6FFF0"
    document.querySelector('.sea').style.backgroundColor = "#72E9FF"
    document.getElementById('circle').style.backgroundColor= "#FEF9D1#"
  }
  //Moving boat
//function moveBoat(){
  // if (sec++ && sec<60){
    //document.getElementById('boat').style.left =sec+"vw"
  //}else if(sec++ && sec==0){
    //document.getElementById('boat').style.left ="0vw"
  //}
  //}setInterval(moveBoat, 1000)
