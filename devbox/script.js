function toggleAgenda(id) {

    const content = document.getElementById("content" + id);

    if (content.style.display === "block") {

        content.style.display = "none";

    } else {

        content.style.display = "block";

    }

}
function changeIcon(element) {

    let icon = element.querySelector("i");

    if (icon.classList.contains("bi-chevron-down")) {

        icon.classList.remove("bi-chevron-down");
        icon.classList.add("bi-chevron-up");

    } else {

        icon.classList.remove("bi-chevron-up");
        icon.classList.add("bi-chevron-down");

    }

}
