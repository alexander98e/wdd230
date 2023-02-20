if ('loading' in HTMLImageElement.prototype){
    //Native Lazy Loading Supported!
        
        console. log( 'yay!')
        const images = document.querySelectorAll('img[loading="lazy"]')
        images.forEach (img => {
            img.src = img.dataset.src;
        })
    } else {
            //  Not supported!
            console.log('boo!')
            const script = document.createElement("script")
            script.src ='https://pixabay.com/photos/utah-salt-lake-city-building-usa-720003/'
            document.body.appendchild(script);
    }