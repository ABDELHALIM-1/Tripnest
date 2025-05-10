// Search

const searchInput = document.getElementById('searchInput');
const allCountries = document.querySelectorAll('.programs > div');
    
    searchInput.addEventListener('keyup', function () {
        const filter = searchInput.value.toLowerCase();
    
        allCountries.forEach(function (country) {
             const text = country.innerText.toLowerCase();
                if (text.includes(filter)) {
                    country.style.display = 'block'; 
                } 
                else {
                    country.style.display = 'none'; 
                }
            });
        });
// ____________________________________________________________________________________________________
// dark mode

        const toggleBtn = document.getElementById("toggle-theme");
        const icon = document.getElementById("icon");
        const body = document.body;

        toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        body.classList.toggle("light");

        if (body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
     }
    });
