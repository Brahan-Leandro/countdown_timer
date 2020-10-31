const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')



const ourRoast = '13 Jul 2021'

function countdown() 
{
	const ourRoastDate = new Date(ourRoast)
	const currentDate = new Date();

	//here i got the seconds, hours and days. this are the dates
	const seconds = Math.floor((ourRoastDate - currentDate) / 1000)
	const secondsLeft = Math.floor(seconds) %60
	const minutes = Math.floor(seconds/ 60) %60
	const hours = Math.floor(seconds / 3600) %24
	const days = Math.floor(seconds / 3600 / 24) 

	console.log(`${days} days ${hours} hours ${minutes} minutes ${secondsLeft} seconds left for our roast`)

	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours;
	minsEl.innerHTML = minutes;
	secondsEl.innerHTML = secondsLeft;
}




countdown()

setInterval(countdown, 1000)

