document.addEventListener('DOMContentLoaded', () => {
    fetch('Element/footer.html')
        .then(responsefooter => responsefooter.text())
        .then(footerData => {
            document.querySelector('footer').innerHTML = footerData;
            
            
            // Check if float-menu element exists before setting event listener
            let floatBtn = document.getElementById("float-button");
            let floatMenu = document.querySelector(".float-menu");
            if (floatMenu) {
                floatBtn.addEventListener('click', (event) => {
                    floatMenu.classList.toggle('showmenu')
                });
            }
            
            // Gets the current year for id "year"
            let year = document.getElementById("year");
            if (year) {
                var getYear = new Date();
                year.innerHTML = getYear.getFullYear();
            }
        })
        .catch(error => console.error("Failed to fetch:", error));
});
