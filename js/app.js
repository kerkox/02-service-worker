//Confirmar que podemos usar el SQ
if ( navigator.serviceWorker ) {
    console.log('Podemos usar SW')
    navigator.serviceWorker.register('/sw.js');
}