document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalctr = document.getElementById("modal-container");

    fetch('modal.html')
        .then(response => response.text())
        .then(data => {
            modal.innerHTML = data;

            modal.classList.remove("close");
            document.getElementById('ok').addEventListener('click', () => {
                modal.classList.add('close');
                setTimeout(() => {
                    modal.style.display = 'none'
                }, 100)
            });
            document.getElementById('cancel').addEventListener('click', () => {
                modal.classList.add('close');
                setTimeout(() => {
                    modal.style.display = 'none'
                }, 100)
            });
            document.getElementById('allow').addEventListener('click', () => {
                modalctr.classList.add('close');
                setTimeout(() => {
                    modal.style.display = 'none'
                }, 100)
            });
            document.getElementById('dismiss').addEventListener('click', () => {
                modalctr.classList.add('close');
                setTimeout(() => {
                    modal.style.display = 'none'
                }, 100)
            });
        })
        .catch(error => console.error("Error fetching header:", error));
});
