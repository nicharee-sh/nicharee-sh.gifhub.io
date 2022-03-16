//Ex.1
const showWeekDay = () =>{
    const dateInput = document.getElementById('birthDateId') .value
    const dayNo = new Date(dateInput) .getDay();
    const weekday = getWeekDay(dayNo);
    const weekDayElement = document.getElementById('weekday');
    weekDayElemant .innerHTML = WeekDay
}

const getWeekDay = (dayNo) => {
    let weekDay;
    switch (dayNo) {
    case 0: weekday = "Sunday";
      break;
    case 1: weekday = "Monday";
      break;
    case 2: weekday = "Tuesday";
      break;
    case 3: weekday = "Wednesday";
      break;
    case 4: weekday = "Thursday";
      break;
    case 5: weekday = "Friday";
      break;
    case 6: weekday = "Saturday";
      break;
    default: weekday = 'Invalid Day'
    }
  }

  const getweekDay = (dayNo) =>{
    return "Day"
}

//P.1
    const weekday = [0, 6] //Sunday - Saturday
    const StartWork = 9
    const StopWork = 18

    // dayNumber 0-6 Sunday - Saturday
    // HourNumber 0-24
function isBusinessHours(dayNumber, HourNumber) {
    if(dayNumber == 0 || dayNumber == 6){
        return false;
    }
    
    if (HourNumber == 12) {
        return false;
    }
    
    if(HourNumber >= StartWork && HourNumber < StopWork) {
        return true;
    }
    return false; 
}

//P.2
function getDayNumber(janFirstDayNumber, yearDayNumber)
    // janFirstDayNumber = วันในสัปดาห์ของวันที่ 1 มกราคม เช่น จันทร์ อังคาร (0-6, 0 = วันอาทิตย์) yearDayNumber = วันใน1 1 ปี (0 - 365)
    const getDayNumber = (janFirstDayNumber, yearDayNumber) =>{
        let dayValue = (janFirstDayNumber + (yearDayNumber % 7)) %7;
        return dayValue
    }

//P.3
function getDayNumber(janFirstDayNumber, yearDayNumber)
    // janFirstDayNumber = วันในสัปดาห์ของวันที่ 1 มกราคม เช่น จันทร์ อังคาร (0-6, 0 = วันอาทิตย์) yearDayNumber = วันใน1 1 ปี (0 - 365)
    const isBusinessHoursByYearDay =(janFirstDayNumber, yearDayNumber, hourNo) =>{
        let dayNo = getDayNumber(janFirstDayNumber, yearDayNumber);
        let isBusinessHoursByYearDay = businessHours (dayNo, hourNo);
        return isBusinessHoursByYearDay
    }

// Chalenge Youself
    const currentDate = new Date ()
    const currentYearWithoutTime = new Date (currentDate.getFullYear(), 0, 0)
    const difference = currentDate -currentYearWithoutTime
    const oneday = 24 * 60 * 60 * 1000
    const dayofYear = Math.floor(difference/oneday)

    console.log(isBusinessHours(dayofYear, currentDate.getHours()));
