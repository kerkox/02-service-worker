self.addEventListener('fetch',event => {

    // if ( event.request.url.includes('style.css')) {
    //     event.respondWith( null );
    // } else {
    //     event.respondWith( fetch(event.request ));
    // }

    if ( event.request.url.includes('.jpg')) {
        console.log(event.requst.url);

        // let fotoReq = fetch('img/main.jpg');
        // let fotoReq = fetch( event.request.url);
        let fotoReq = fetch( event.request);
        
        event.respondWith( fotoReq)

    }



})