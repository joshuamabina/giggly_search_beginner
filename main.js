let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function (e) {
    e.preventDefault();

    let searchInput = document.getElementById("searchInput");
    let searchInputValue = searchInput.value.trim();

    if (searchInputValue == "" || searchInputValue == null) return false;

    alert(`You have searched for: ${searchInput.value}`);
});
