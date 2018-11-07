window.onload = function() {
    // Put URLs here
    var urls = ["https://www.google.com", "https://youtube.com" ];

    // Code
    var containerBase = document.getElementById("container-base");
    var origin = containerBase.innerHTML;

    for (i = 0; i < urls.length; i++) {
        document.getElementById("title").innerHTML = "<a href='" + urls[i] + "'>" + urls[i] + "</a>";
        document.getElementById("img").src = "https://www.google.com/s2/favicons?domain=" + urls[i];

        document.getElementById("urls").innerHTML += containerBase.innerHTML;

        document.getElementById("container-base").innerHTML = origin;
    }


}