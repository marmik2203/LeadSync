// JavaScript for Creating the Circular Ring Chart

// Function to extract integer data from HTML element by ID
function getDataById(id) {
    return parseInt(document.getElementById(id).innerText) || 0;
}

// Extracting data dynamically from the HTML
var activeLeads = getDataById("activeLeads");
var unassignedLeads = getDataById("unassignedLeads");
var deletedLeads = getDataById("deletedLeads");
var bookedLeads = getDataById("bookedLeads");
var bookingCancel = getDataById("bookingCancel");
var notInterested = getDataById("notInterested");
var droppedLeads = getDataById("droppedLeads");

// Setting up the chart with dynamic data
var ctx = document.getElementById("leadChart").getContext("2d");
var leadChart = new Chart(ctx, {
    type: "doughnut", // Type of chart
    data: {
        labels: [
            "Active Leads",
            "Unassigned Leads",
            "Deleted Leads",
            "Booked Leads",
            "Booking Cancel",
            "Not Interested",
            "Dropped Leads",
        ],
        datasets: [{
            data: [
                activeLeads,
                unassignedLeads,
                deletedLeads,
                bookedLeads,
                bookingCancel,
                notInterested,
                droppedLeads,
            ], // Your dynamic lead data
            backgroundColor: [
                "#4CAF50", // Green for Active Leads
                "#FFEB3B", // Yellow for Unassigned Leads
                "#F44336", // Red for Deleted Leads
                "#3F51B5", // Blue for Booked Leads
                "#FF9800", // Orange for Booking Cancel
                "#9E9E9E", // Grey for Not Interested
                "#673AB7", // Purple for Dropped Leads
            ],
            borderWidth: 1,
        }, ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%", // Makes it look like a ring
        plugins: {
            legend: {
                display: true,
                position: "right",
            },
            title: {
                display: true, // Enable the title
                text: "Source", // Title text
                font: {
                    size: 18, // Font size for the title
                },
                padding: {
                    top: 10,
                    bottom: 20,
                },
            },
        },
    },
});