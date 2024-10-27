document.addEventListener("DOMContentLoaded", async () => {
    fetch("/Element/header.html") 
    .then(response => response.text())
    .then(data => {
            document.querySelector('header').innerHTML = data;
            const cbx = document.querySelector("#checkbox");
            const darkMode = localStorage.getItem("darkMode") === "true";

            if (darkMode) {
                document.body.classList.add("dark-mode");
                cbx.checked = true;
            }

            cbx.addEventListener("change", () => {
                cbx.disabled = true;

                setTimeout(() => {
                    if (cbx.checked) {
                        document.body.classList.add("dark-mode");
                        localStorage.setItem("darkMode", "true");
                    }
                    else {
                        document.body.classList.remove("dark-mode");
                        localStorage.setItem("darkMode", "false");
                    }

                    cbx.disabled = false;
                }, 250)
                .catch(error => console.error("Failed to save local storage of" + error))
            });
            const del = document.getElementById("delete-notify");
            const modal = document.getElementById("modal");

            del.addEventListener("click", () => {
                modal.classList.remove('close')
                modal.classList.remove("hidden");
            })

            document.getElementById('ok').addEventListener('click', () => {
                modal.classList.add('close');
                setTimeout(() => {
                    modal.classList.add("hidden")
                }, 100)
            });
            document.getElementById('cancel').addEventListener('click', () => {
                modal.classList.add('close');
                setTimeout(() => {
                    modal.classList.add("hidden")
                }, 100)
            });

            const dropdown_btn = document.getElementById("dropdown-btn");
            const navMenu = document.getElementById("navigationMenu");
            const search_btn = document.getElementById("search-click");
            const searchMenu = document.getElementById("searchMenu");
            const notify_btn = document.getElementById("notify-btn");
            const notifyMenu = document.getElementById("notifyMenu");
            const overlay = document.querySelector('.overlay');
            
            dropdown_btn.addEventListener("click", (event) => {
                event.stopPropagation();
                navMenu.classList.toggle("show");
                navMenu.classList.remove("hidden")
                
            });
            
            search_btn.addEventListener("click", (event) => {
                event.stopPropagation();
                searchMenu.classList.toggle("show");
                searchMenu.classList.remove("hidden")
                setTimeout(() => {
                    overlay.classList.add("showOverlay");
                }, 300)
            });

            notify_btn.addEventListener("click", (event) => {
                event.stopPropagation();
                notifyMenu.classList.toggle("show");
                notifyMenu.classList.remove("hidden")
                setTimeout(() => {
                    overlay.classList.add("showOverlay");
                }, 300)
            });
        
            const dropdowns = document.getElementsByClassName("dropdown-content");
            const searchDropDown = document.getElementsByClassName("search-content");
            const notifyContent = document.getElementsByClassName("notify-content");
        
            window.addEventListener('click', (event) => {
                if (!event.target.matches('#dropdown-button') && !event.target.matches('#dropdown-button i') && !event.target.matches('.dropdown-content *')) {
                    for (const opendrop of dropdowns) {
                        if (opendrop.classList.contains('show')) {
                            opendrop.classList.remove('show');
                            setTimeout(() => {
                                navMenu.classList.add("hidden");
                            }, 300);
                        }
                    }
                }
                if (!event.target.matches('#search-click') && !event.target.matches('#search-click i') && !event.target.matches('.search-content *')) {
                    for (const opendrop of searchDropDown) {
                        if (opendrop.classList.contains('show')) {
                            opendrop.classList.remove('show');
                            setTimeout(() => {
                                searchMenu.classList.add("hidden")
                            }, 300);
                        }
                    }
                }
                if (!event.target.matches('#notify-btn') && !event.target.matches('#notify-btn i') && !event.target.matches('.notify-content *')) {
                    for (const opendrop of notifyContent) {
                        if (opendrop.classList.contains('show')) {
                            opendrop.classList.remove('show');
                            setTimeout(() => {
                                notifyMenu.classList.add("hidden")
                            }, 300);
                        }
                    }
                }
            });
            
            var acc_username = document.getElementById('account-username');
            var header_username = document.getElementById('nav-current-username');
            
            function adjustUsername() {
                // Synchronize username on the header with the username in account-panel one.
                const maxCharsSmall = 10;
                const maxCharsMid = 20;
                const maxCharsLarge = 30;
                if (acc_username && header_username) {
                    let accpanelUserName = acc_username.innerText.trim();
                    header_username.innerText = accpanelUserName.split(" ")[0];
                    
                    // if (window.innerWidth < 600) {
                    //     header_username.innerText = accpanelUserName.length > maxCharsSmall 
                    //     ? accpanelUserName.substring(0, maxCharsSmall) + ' ' 
                    //     : accpanelUserName;
                    // } else if (window.innerWidth < 1100) {
                    //     header_username.innerText = accpanelUserName.length > maxCharsMid 
                    //     ? accpanelUserName.substring(0, maxCharsMid) + ' ' 
                    //     : accpanelUserName;
                    // } else {
                    //     header_username.innerText = accpanelUserName.length > maxCharsLarge 
                    //         ? accpanelUserName.substring(0, maxCharsLarge) + '...' 
                    //         : accpanelUserName;
                    // }
                }
            }
            adjustUsername();
            window.addEventListener('resize', adjustUsername);
        })
        .catch(error => console.error("Error fetching header:", error));
});
