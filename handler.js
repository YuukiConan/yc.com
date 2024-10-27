document.addEventListener('DOMContentLoaded', () => {

    // Jika Anda melihat galat YCERR-1000 di halaman selain index.html, abaikan saja.
    const cek_hari = document.getElementById('suasana');
    
    if (cek_hari) {
        let time = new Date();
        const hours = time.getHours();

        if (hours >= 0 && hours < 11) {
            cek_hari.innerHTML = "Selamat pagi";
        }
        else if (hours >= 11 && hours < 15) {
            cek_hari.innerHTML = "Selamat siang";
        }
        else if (hours >= 15 && hours < 18) {
            cek_hari.innerHTML = "Selamat sore";
        }
        else {
            cek_hari.innerHTML = "Selamat malam";
        }

    } else {
        console.error("YCERR-1000: Gagal mengambil hari.")
    }
    try {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);

        const setDisplay = (element, displayValue) => {
            element.style.display = displayValue;
        };

        // Loading event
        var loadingContent = document.getElementById("loading-container");
        var bodyContent = document.getElementById("body-content");
    
        const isOnline = window.navigator.onLine;
        
        loadingContent.style.animation = "opacity 2s";
        loadingContent.style.animationPlayState = "paused";
    
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        const executeLoading = async () => {
            if (isOnline) {
                loadingContent.style.animationPlayState = "running";
                setDisplay(loadingContent, 'none');
                await delay(300);
                setDisplay(bodyContent, 'block');
            }
            else {
                setDisplay(bodyContent, 'none');
                setDisplay(loadingContent, 'none');
            } 
        };

        setTimeout(async () => {
            await executeLoading();
        }, 2300);

        const images = document.querySelectorAll('img');
        images.forEach(image => {
            image.setAttribute('loading', 'lazy');
            image.setAttribute('draggable', 'false');
        });
    } catch (error) {
        console.error('An error occurred:', error);
        // Handle the error as needed
    }
});