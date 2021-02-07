var int = setInterval(() => {
    
    var a = document.querySelectorAll("a")[0].href;
    "undefined" != typeof a && "" != a && go(a)
  
}, 500);

function go(a){
    clearInterval(int);
    try {
        window.location.href = a;
    } catch (e) {
        window.location.replace(a);
    }
}