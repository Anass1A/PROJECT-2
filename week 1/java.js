document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById("home");
    const rekeningenSection = document.getElementById("rekeningen");
    const overschrijvingenSection = document.getElementById("overschrijvingen");

    document.getElementById("home-link").addEventListener("click", function () {
        showSection(homeSection);
    });

    document.getElementById("rekeningen-link").addEventListener("click", function () {
        showSection(rekeningenSection);
    });

    document.getElementById("overschrijvingen-link").addEventListener("click", function () {
        showSection(overschrijvingenSection);
    });

    function showSection(section) {
        homeSection.style.display = "none";
        rekeningenSection.style.display = "none";
        overschrijvingenSection.style.display = "none";
        section.style.display = "block";
    }
});
