// EXPLORE DESIGNS

function exploreDesigns() {

    document.getElementById("explore").scrollIntoView({
        behavior: "smooth"
    });

}


// CATEGORY FILTER

let activeCategory = "all";


function filterCategory(category, button) {

    activeCategory = category;

    // Update active category button

    document.querySelectorAll(".category-card").forEach(function(card) {

        card.classList.remove("active");

    });

    button.classList.add("active");

    // Apply filters

    searchDesigns();

    // Scroll to designs

    document.getElementById("explore").scrollIntoView({
        behavior: "smooth"
    });

}


// SEARCH DESIGNS

function searchDesigns() {

    let input = document
        .getElementById("searchInput")
        .value.toLowerCase();

    let cards = document.querySelectorAll(".design-card");

    let visibleCount = 0;


    cards.forEach(function(card) {

        let title = card.querySelector("h3").innerText.toLowerCase();

        let category = card.dataset.category;

        let matchesSearch = title.includes(input);

        let matchesCategory =
            activeCategory === "all" ||
            category === activeCategory;


        if (matchesSearch && matchesCategory) {

            card.style.display = "block";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    document.getElementById("noResults").style.display =
        visibleCount === 0 ? "block" : "none";

}