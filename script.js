  function openModal(name) {
            const modal = document.getElementById("modal");
            document.getElementById("modal-title").innerText = name;
            modal.classList.add("show");
        }

        function closeModal() {
            const modal = document.getElementById("modal");
            modal.classList.remove("show");
        }

        window.onclick = function (event) {
            const modal = document.getElementById("modal");
            if (event.target === modal) {
                closeModal();
            }
        };