document.addEventListener("DOMContentLoaded", function() {
    const yearSelect = document.getElementById("year-select");
    const monthSelect = document.getElementById("month-select");
    const calendarBody = document.getElementById("calendar-body");

    // Populate year and month select elements
    populateYears();
    populateMonths();

    // Generate the calendar for the current month and year
    generateCalendar(new Date().getFullYear(), new Date().getMonth());

    // Event listeners for year and month change
    yearSelect.addEventListener("change", function() {
        generateCalendar(yearSelect.value, monthSelect.value);
    });

    monthSelect.addEventListener("change", function() {
        generateCalendar(yearSelect.value, monthSelect.value);
    });

    function populateYears() {
        const currentYear = new Date().getFullYear();
        for (let i = currentYear - 50; i <= currentYear + 50; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;
            yearSelect.appendChild(option);
        }
        yearSelect.value = currentYear;
    }

    function populateMonths() {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        months.forEach((month, index) => {
            let option = document.createElement("option");
            option.value = index;
            option.text = month;
            monthSelect.appendChild(option);
        });
        monthSelect.value = new Date().getMonth();
    }

    function generateCalendar(year, month) {
        calendarBody.innerHTML = "";
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let date = 1;

        for (let i = 0; i < 6; i++) {
            let row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    let cell = document.createElement("td");
                    row.appendChild(cell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    let cell = document.createElement("td");
                    cell.textContent = date;
                    row.appendChild(cell);
                    date++;
                }
            }

            calendarBody.appendChild(row);
        }
    }
});