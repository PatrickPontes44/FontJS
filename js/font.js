
function setFont(){
    //fontsDom = document.getElementsByClassName("fontJs");
    fontsDom = document.querySelectorAll('[data-font]');
    console.log(fontsDom);
    let font = "";
    [].forEach.call(fontsDom, a => {
        font += "|"+a.dataset.font;
    });
    font = font.replace(/ /g, "+");
    console.log(font);
    fontUrl = "https://fonts.googleapis.com/css?family=Arial"+font+"&display=swap";
    try {
        document.getElementById("fontURL").href = fontUrl;        
    } catch (error) {
        console.log("Please add an Id of 'fontURL' to the LINK tag in you HTML document that you want to get the Google Fonts URL!");
    }
    [].forEach.call(fontsDom, a => {
        font = a.dataset.font;
        a.style.fontFamily = font;
    });

    //localStorage.setItem('data', [input_text.value, fontUrl, input_tag.value]);
    //location.reload();
}

setFont();
