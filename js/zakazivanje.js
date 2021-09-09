////// ZAKAZIVANJE NA SAT ////////




const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');
const ime = document.querySelector('[type=text]');
const email = document.getElementById('input-email');
const cifcena = document.getElementById('cifra');
const odvreme= document.getElementById('input-vreme1');

const months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'];




let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;





mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS

function goToNextMonth (e) {

	month++;

	if (month > 11) {
		month = 0;
		year++;
	}

	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}




function populateDates (e) {
	days_element.innerHTML = '';
	let amount_days = 31;

	if (month == 1) {
		amount_days = 28;
	}

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
	day_element.classList.add('selected');
		}

		day_element.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));


			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

      selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;

			populateDates();
		});





		days_element.appendChild(day_element);


const select =  document.querySelector('.selected-date');
const imek= document.getElementById('ime-prezime-korisnik');
const emailk = document.getElementById('email-korisnik');
const telefonk= document.getElementById('telefon-korisnik');
const lokacijak= document.getElementById('lokacija-korisnik');
const ukupnacena= document.getElementById('ukupna-cena');
const odvreme= document.getElementById('odvreme');

const termin = document.getElementById('termin');
const ime = document.getElementById('imeinput').value;
const email = document.getElementById('input-email').value;
const tel = document.querySelector('[type=tel]').value;
const lokacija = document.getElementById('lokacijainput').value;
const cifcena = document.getElementById('cifra');
const oddvreme= document.getElementById('input-vreme1').value;
const doovreme= document.getElementById('input-vreme2').value;

termin.innerHTML= select.innerHTML;
imek.innerHTML= ime;
emailk.innerHTML= email;
telefonk.innerHTML= tel;
lokacijak.innerHTML= lokacija;
ukupnacena.innerHTML= cifcena.innerHTML;
odvreme.innerHTML= oddvreme+':00h do '+doovreme+':00h';

	}
}







function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}

	return false;
}
function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;


}





////// CIFRA ZAKAZIVANJE NA SAT////////


var ivreme1 = document.getElementById('input-vreme1');
var ivreme2 = document.getElementById('input-vreme2');


ivreme1.addEventListener('change', computeLoan);
ivreme2.addEventListener('change', computeLoan);




function computeLoan(){


	var amount = document.getElementById('input-vreme1').value;
	var interest_rate = document.getElementById('input-vreme2').value;


	var interest = Number(interest_rate) - Number(amount) ;

  if (interest >= 1 ){
    document.getElementById('cifra').innerText = "300 din";
  }

  if(interest >= 2){
    document.getElementById('cifra').innerHTML = "400 din";
  }

  if(interest >= 3){
    document.getElementById('cifra').innerHTML = "500 din";
  }
  if(interest >= 4){
    document.getElementById('cifra').innerHTML = "600 din";
  }
  if(interest >= 5){
    document.getElementById('cifra').innerHTML = "700 din";
  }
  if(interest >= 6){
    document.getElementById('cifra').innerHTML = "800 din";
  }

  if(interest >= 7){
    document.getElementById('cifra').innerHTML = "900 din";
  }
  if(interest >= 8){
    document.getElementById('cifra').innerHTML = "1000 din";
  }

  if(interest >= 9){
    document.getElementById('cifra').innerHTML = "1100 din";
  }
  if(interest >= 10){
    document.getElementById('cifra').innerHTML = "1200 din";
  }

}





////// POP UP ////////



const open = document.getElementById('open');
const prozor = document.getElementById('prozor');
const close = document.getElementById('close');


open.addEventListener('click',()=>{

prozor.classList.add('show');

const select =  document.querySelector('.selected-date');
const imek= document.getElementById('ime-prezime-korisnik');
const emailk = document.getElementById('email-korisnik');
const telefonk= document.getElementById('telefon-korisnik');
const lokacijak= document.getElementById('lokacija-korisnik');
const ukupnacena= document.getElementById('ukupna-cena');
const odvreme= document.getElementById('odvreme');

const termin = document.getElementById('termin');
const ime = document.getElementById('imeinput').value;
const email = document.getElementById('input-email').value;
const tel = document.querySelector('[type=tel]').value;
const lokacija = document.getElementById('lokacijainput').value;
const cifcena = document.getElementById('cifra');
const oddvreme= document.getElementById('input-vreme1').value;
const doovreme= document.getElementById('input-vreme2').value;

termin.innerHTML= select.innerHTML;
imek.innerHTML= ime;
emailk.innerHTML= email;
telefonk.innerHTML= tel;
lokacijak.innerHTML= lokacija;
ukupnacena.innerHTML= cifcena.innerHTML;
odvreme.innerHTML= oddvreme+':00h do '+doovreme+':00h';

});

////// CLOSE UP ////////

close.addEventListener('click',()=>{

prozor.classList.remove('show');

});







////// MENI ZAKAIVANJE  ////////


var zakazivanje= document.getElementById('ZAKAZIVANJE');
var zakazivanjeNaSat= document.getElementById('zakazivanje-na-sat');
var zakazivanjeNaDan= document.getElementById('zakazivanje-na-dan');


var zakazivanjeSat= document.getElementById('sat-zakaz');
var zakazivanjeDan= document.getElementById('dan-zakaz');

zakazivanjeSat.classList.add('boja');
zakazivanjeDan.style.color='#000';

zakazivanjeSat.addEventListener('click',prikaz,false);
zakazivanjeDan.addEventListener('click',prikaz1,false);


function prikaz() {
zakazivanjeSat.classList.add('boja');
zakazivanjeDan.classList.remove('boja2');
zakazivanjeDan.style.color='#000';
zakazivanjeSat.style.color='#fff';

zakazivanjeNaSat.classList.add('zns-block');
zakazivanjeNaDan.classList.add('zns-none');
  zakazivanjeNaSat.classList.remove('zns-none');

zakazivanje.classList.remove('znd-t-c');
zakazivanje.classList.add('zns-t-c');
}


function prikaz1() {
zakazivanjeDan.classList.add('boja2');
zakazivanjeSat.classList.remove('boja');
zakazivanjeSat.style.color='#000';
zakazivanjeDan.style.color='#fff';

zakazivanjeNaDan.classList.remove('zns-none');
zakazivanjeNaDan.classList.add('zns-block');
zakazivanjeNaSat.classList.add('zns-none');


zakazivanje.classList.add('znd-t-c');
zakazivanje.classList.remove('zns-t-c');
}
























///////// ZAKAZIVANJE NA DAN ////////////

var dateD1 = document.getElementById('date1');
var dateD2 = document.getElementById('date2');
var ivreme11 = document.getElementById('input-vreme11');
var ivreme22 = document.getElementById('input-vreme22');

   //dateD1.addEventListener('change', calculateDifference,false);
   //dateD2.addEventListener('change', calculateDifference,false);
ivreme11.addEventListener('change', calculateDifference);
ivreme22.addEventListener('change', calculateDifference);








const open1 = document.getElementById('open1');
const prozor1 = document.getElementById('prozor1');
const close1 = document.getElementById('close1');


open1.addEventListener('click',()=>{

prozor1.classList.add('show');


const ime1 = document.getElementById('imeinput1').value;
const email1 = document.getElementById('input-email1').value;
const tel1 = document.getElementById('phone1').value;
const lokacija1 = document.getElementById('lokacijainput1').value;



const imek1= document.getElementById('ime-prezime-korisnik1');
const emailk1 = document.getElementById('email-korisnik1');
const telefonk1= document.getElementById('telefon-korisnik1');
const lokacijak1= document.getElementById('lokacija-korisnik1');

imek1.innerHTML= ime1;
emailk1.innerHTML= email1;
telefonk1.innerHTML= tel1;
lokacijak1.innerHTML= lokacija1;

});



close1.addEventListener('click',()=>{

prozor1.classList.remove('show');

});






   $("#date1").datetimepicker({
        timepicker: false,
        format: "Y-m-d"
    });

    $("#date2").datetimepicker({
        timepicker: false,
        format: "Y-m-d"
    });












      function calculateDifference() {




    var date1 = new Date($("#date1").val());
    var date2 = new Date($("#date2").val());


    var timeDifference = date2.getTime() - date1.getTime();




var milliSecondsInOneSecond = 1000;


var secondsInOneHour = 3600;


var hoursInOneDay = 24;

        var days = timeDifference / (milliSecondsInOneSecond * secondsInOneHour * hoursInOneDay);





const ukupnaC1 = document.getElementById('ukupna-cena1');

const ukupnaC = document.getElementById('ukupna-cena1');
const Pcena = document.getElementById('cifra1');

const PcenaU = document.getElementById('cifra1');







Pcena.innerHTML='';

 if(days>=1){
Pcena.innerHTML = Number(1200);
}
if(days>=2){
Pcena.innerText = Number(2400);
}
if(days>=3){
Pcena.innerText = Number(3600);
}
if(days>=4){
Pcena.innerText = Number(4800);
}
if(days>=5){
Pcena.innerText = Number(6000);
}
if(days>=6){
Pcena.innerText = Number(7200);
}
if(days>=7){
Pcena.innerText = Number(8400);
}
 if(days>=8){
Pcena.innerText = Number(9600);
}
 if(days>=9){
Pcena.innerText = Number(10800);
}
 if(days>=10){
Pcena.innerText = Number(11000);
}

 if(days>=11){
Pcena.innerText = Number(12200);
}
 if(days>=12){
Pcena.innerText = Number(13400);
}

if(days>=13){
Pcena.innerText = Number(14600);
}

if(days>=14){
Pcena.innerText = Number(15800);
}

if(days>=15){
Pcena.innerText = Number(17000);
}

if(days>=16){
Pcena.innerText = Number(18200);
}

 if(days>=17){
Pcena.innerText = Number(19400);
}

 if(days>=18){
Pcena.innerText = Number(20000);
}

 if(days>31){

var odays = days-31;
Pcena.innerText =Number(20000)+ odays*1200;

}









////// CIFRA ZAKAZIVANJENJE NA DAN ////////





	var amount1 = document.getElementById('input-vreme11').value;
	var interest_rate1 = document.getElementById('input-vreme22').value;



   var cena3= Pcena.innerHTML;


   var interest1 = Number(interest_rate1) - Number(amount1) ;

  if ( amount1 === interest_rate1){
     PcenaU.innerText =cena3+'din';
     ukupnaC.innerHTML=cena3+'din';
  }

 if(interest1 >= 1){
   PcenaU.innerHTML =Number(cena3) +Number(300)+'din';
   ukupnaC.innerHTML = Number(cena3) +Number(300)+'din';
  }

  if(interest1 >= 2){
    PcenaU.innerHTML = Number(cena3) +Number(400)+'din';
    ukupnaC.innerHTML = Number(cena3) +Number(400)+'din';
  }
if(interest1 >= 3){

  PcenaU.innerHTML = Number(cena3) +Number(500)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(500)+'din';
  }
if(interest1 >= 4){
  PcenaU.innerHTML =  Number(cena3) +Number(600)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(600)+'din';
  }
if(interest1 >= 5){
  PcenaU.innerHTML = Number(cena3) +Number(700)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(700)+'din';
  }

if(interest1 >= 6){
   PcenaU.innerHTML = Number(cena3) +Number(800)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(800)+'din';
  }
if(interest1 >= 7){
  PcenaU.innerHTML = Number(cena3) +Number(900)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(900)+'din';
  }

if(interest1 >= 8){
  PcenaU.innerHTML = Number(cena3) +Number(1000)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(1000)+'din';
  }
if(interest1 >= 9){
  PcenaU.innerHTML = Number(cena3) +Number(1100)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(1100)+'din';
  }
if(interest1 >= 10){
  PcenaU.innerHTML = Number(cena3) +Number(1200)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(1200)+'din';
  }
if(interest1 >= 11){
  PcenaU.innerHTML = Number(cena3) +Number(1200)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(1200)+'din';
  }

if(interest1 >= 12){
  PcenaU.innerHTML = Number(cena3) +Number(1200)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(1200)+'din';
  }

if(interest1 >= 13){
  PcenaU.innerHTML = Number(cena3) +Number(1200)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(1200)+'din';
  }
if(interest1 >= 14){
  PcenaU.innerHTML = Number(cena3) +Number(1200)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(1200)+'din';
  }

if(interest1 >= 15){
  PcenaU.innerHTML = Number(cena3) +Number(1200)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(1200)+'din';
  }

 if(interest1 >= 16){
  PcenaU.innerHTML = Number(cena3) +Number(1200)+'din';
  ukupnaC.innerHTML = Number(cena3) +Number(1200)+'din';
  }


if(days>=18 && days<=31){
PcenaU.innerHTML = Number(cena3)+'din';
ukupnaC.innerHTML = Number(cena3)+'din';
}



const periodDana = document.getElementById('date1').value;
const periodDana1 = document.getElementById('date2').value;

const period= document.getElementById('period-rez');
period.innerHTML= periodDana + ' do '+periodDana1;




const ukupnoDana= document.getElementById('ukupno-dana');
      ukupnoDana.innerHTML=days+'. dana'+' i '+interest1+'.sat';






}




















