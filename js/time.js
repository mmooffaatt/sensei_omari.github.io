        // Function to update the clock display
        function updateTime() {
            const now = new Date(); // Get current date and time
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }

        // Call updateTime initially to set the clock
        updateTime();

        // Set interval to update the clock every second
        setInterval(updateTime, 1000);

        // Get references to modal and buttons
        const modal = document.getElementById('modal');
        const openBtn = document.getElementById('open-btn');
        const closeBtn = document.getElementById('close-btn');

        // Function to open the clock modal
        function openModal() {
            modal.classList.add('show-modal');
        }

        // Event listener for opening the clock modal
        openBtn.addEventListener('click', openModal);

        // Event listener for closing the clock modal
        closeBtn.addEventListener('click',()=>{
    modal.classList.remove("show-modal");
});