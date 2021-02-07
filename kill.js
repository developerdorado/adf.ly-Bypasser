var int = setInterval(() => {
    console.log("Kill Adf.ly está activado.");
        var link = document.location.href;

        if (link.includes("adfly")) {
            clearInterval(int);
            var obj = link.split("https")[2];
            var permalink = "https" + decodeURIComponent(obj);

            try {
                window.location.href = permalink;
            } catch (e) {
                window.location.replace(permalink);
            }
        }

}, 500);