let todaysDate = new Date();
let presentMonth = todaysDate.getMonth();

let monthsArray = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemmber", "December"];

let monthName = monthsArray[(presentMonth )];

document.write(`<div class="card">
<h4>Printing Current Month in Browser</h4>
<span>Current Month is : ${monthName}  </span>
</div>`);