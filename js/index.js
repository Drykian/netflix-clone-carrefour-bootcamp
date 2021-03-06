// mostra opções da conta
var trailer = $('<video class="movie-trailer" width="600" height="338" controls><source src="videos/trailer.mp4" type="video/mp4">Your browser does not support the video tag.</video>')

$(".profile").hover(() => {
    $("path").attr("d", "M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z")
    $(".acc-box").show(500)
}, () => {
    $("path").attr("d", "M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z")
    $(".acc-box").hide(500)
})

// mostra informações do filme ou série

$(".info").on("click", () => {
    $(".movie-box").show(500)
})

$(".close").on("click", () => {
    $(".movie-box").hide(500)
})

// mostra o trailer

$(".play").on("click", () => {
    $(".trailer").append(trailer)
    $(".trailer").show(500)
})

$(".close-trailer").on("click", () => {
    $(".movie-trailer").remove()
    $(".trailer").hide(500)
})