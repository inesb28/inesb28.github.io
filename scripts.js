function esconder() 
{document.getElementById('escondido').style.display='none'}

function mostrar()
{document.getElementById('escondido').style.display='block'}

function grande()
{document.getElementById('cambioletra').style.fontSize='35px'}

function pequenyo()
{document.getElementById('cambioletra').style.fontSize='10px'}

function mediano()
{document.getElementById('cambioletra').style.fontSize='16px'}

function pulsar()
{document.getElementById('demo').innerHTML = 'gracias por pulsar el boton'}


function cambio(disco)

{if (disco === 'debut')
{document.getElementById('foto').src='debut.jfif'; window.alert('taylor swift')}
if (disco === 'fearless')
{document.getElementById('foto').src='fearless.jfif'; window.alert('faerless')}
if (disco === 'speaknow')
{document.getElementById('foto').src='speaknow.jfif'; window.alert('speak now')}
if (disco === 'red')
{document.getElementById('foto').src='red.jfif'; window.alert('red')}
if (disco === 'milnovecientos')
{document.getElementById('foto').src='1989.jfif'; window.alert('1989')}
if (disco === 'reputation')
{document.getElementById('foto').src='reputation.jfif'; window.alert('reputation')}
if (disco === 'lover')
{document.getElementById('foto').src='lover.jfif'; window.alert('lover')}
if (disco === 'folklore')
{document.getElementById('foto').src='folklore.jfif'; window.alert('folklore')}
if (disco === 'evermore')
{document.getElementById('foto').src='evermore.jfif'; window.alert('evermore')}}

function imprimir ()
{window.print ()}

function calcular(){
    let precio =20;
    let iva = 5;
    window.alert(precio + iva);
    window.alert(precio - iva);
    window.alert(precio * iva);
    window.alert(precio / iva);
    window.alert(precio ** iva);
    window.alert(precio % iva);
}

var clicks = 0
function onclick()
    {clicks +=1;
    document.getElementById('clicks').innerHTML = clicks;}