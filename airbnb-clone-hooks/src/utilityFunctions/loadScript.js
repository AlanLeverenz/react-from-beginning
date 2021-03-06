export default (scriptUrl)=> {
new Promise((resolve, reject)=>{
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptUrl;
        // script.src = "https://js.stripe.com/v3/";
        script.onload = ()=>{
            console.log("The script has loaded!")
            resolve();
        }
        document.getElementsByTagName('head')[0].appendChild(script);
        console.log('The script has been added to the head!');
    })
}

// <script src="https://js.stripe.com/v3/"></script>
