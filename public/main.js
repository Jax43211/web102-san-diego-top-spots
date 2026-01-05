$(document).ready(function () {
    $.getJSON('data.json', function(data){
        $.each(data, function(index, spot){
        const mapLink = `https://www.google.com/maps?q=${spot.location[0]},${spot.location[1]}`;
        const row = `
            <tr>
             <td>${spot.name}</td>
             <td>${spot.description}</td>
             <td><a href="${mapLink}" target="_blank">Open in Google Maps</a></td>
            </tr>
        `;

        $('#table-body').append(row)
    });
}).fail(function() {
    console.error('Failed to load JSON data');
});

});