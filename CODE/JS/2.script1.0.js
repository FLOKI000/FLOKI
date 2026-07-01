
document.querySelector("button#theme").addEventListener("click", (function () {
    "dark" == localStorage.theme ? (document.querySelector("html").classList.remove("dark"),
    localStorage.removeItem("theme")) : (document.querySelector("html").classList.add("dark"), localStorage.theme = "dark")
}));
let controler = document.querySelectorAll(".controler>button"), bodyClass = document.body.classList;
controler.forEach((e => {
    e.addEventListener("click", (function () {
        bodyClass.remove("posts", "about"), bodyClass.add(e.id)
    }))
})),
document.querySelectorAll("#menu,.overlay").forEach((e => {
    e.addEventListener("click", (function () {
        bodyClass.contains("sidebar-open") ? bodyClass.remove("sidebar-open") : bodyClass.add("sidebar-open")
    }))
}));
let sidebarBox = document.querySelectorAll(".sidebar-box>h6:first-of-type");
sidebarBox.forEach((e => {
    e.addEventListener("click", (function () {
        e.parentElement.classList.contains("active") ? e.parentElement.classList.remove("active") : e.parentElement.classList.add("active")
    }))
}));
function like(id) {
    $.ajax({
        url: "/post/" + id + "/like",
        type: 'get',
        success: function(response) {
            if (response) {
                if (response == 'liked' || response == 'disliked') {
                    if ($("#post" + id + " .likeBtn span").html().length && ! isNaN(parseInt($("#post" + id + " .likeBtn span").html()))) {
                        $("#post" + id + " .likeBtn span").html(parseInt($("#post" + id + " .likeBtn span").html()) + ((response == 'liked') ? 1 : -1));
                    }
                    if ($('#post' + id + ' .likeBtn').length) {
                        if (response == 'liked') {
                            $('#post' + id + ' .likeBtn').addClass('liked');
                        }
                        else {
                            $('#post' + id + ' .likeBtn').removeClass('liked');
                        }
                    }
                }
                else {
                    window.open("/post/" + id + "/like", "_blank");
                    return false;
                }
            }
        },
        error: function (response) {
            console.log(response);
        },
    });
}
