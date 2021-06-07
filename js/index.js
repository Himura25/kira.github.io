var btn_yes = document.getElementById('yes');
var btn_maybe = document.getElementById('maybe');
var btn_no = document.getElementById('no');

btn_yes.addEventListener('click', show);

btn_maybe.addEventListener('mouseenter',change_maybe);
btn_maybe.addEventListener('mouseleave', restart);
btn_maybe.addEventListener('click', show);


btn_no.addEventListener('mouseenter', change_no);
btn_no.addEventListener('mouseleave', restart);
btn_no.addEventListener('click', show);


function change_maybe(){

	btn_maybe.innerHTML = "Si quiero";
}

function change_no(){
	btn_no.innerHTML = "Acepto";
}

function restart()
{
	btn_yes.innerHTML = "Si";
	btn_maybe.innerHTML = "Tal vez";
	btn_no.innerHTML = "No";
}

function show()
{
	var result = document.getElementById('result')
	result.style.visibility = 'visible';


	var buttons = document.getElementsByClassName('button');
	
	for (var i = buttons.length - 1; i >= 0; i--) {
		buttons[i].style.visibility = 'hidden';
	}
}