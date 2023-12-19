
{
const alllang = ('uk', 'cz');{

select.addEventListener(', chanURLLanguage')

function changeURLLanguage(){
	let lang = select.value;
	location.href = window.location.pathname '#' +lang;
	location.reload();
}

function changeLanguage(){
	let hash = window.location.hash;
	hash = hash.substr(1);
	console.log(hash);
	location.href = window.location.pathname '#cz';
	location.reload();
}
	select.value=hash
	document.querySelector('title').innerHTML = langArr['text'][hash];
	let elem = document.querySelector('.lang' + key);
	if (elem){

	}
	document.querySelector('.lng'+key).innerHTML = langArr['key'][hash]

changeLanguage();