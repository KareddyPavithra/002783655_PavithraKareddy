var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);
form.addEventListener("reset", resetted);

const titles = document.querySelectorAll('input[name="title"]');
var validFirstName = false;
var validLastName = false;
var validEmailId = false;
var validPhoneNumber = false;
var validStreetAddress = false;
var validCity = false;
var validState = false;
var validZipCode = false;
var validSocial = false;
var validValueB = true;
var validIceCream = false;
var validComments = false;
var validTitleValueB = false;

var regExName = /^[a-zA-Z ]+$/;
var regExEmailId = /^[a-z0-9]+@northeastern.edu+$/;
var regExPhoneNumber = /\d{3}-?\d{3}-\d{4}$/;
var regExZipCode = /\d{5}/;

var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var streetAddress1 = document.getElementById("streetAddress1");
streetAddress1.addEventListener("input", validate);

var city = document.getElementById("city");
city.addEventListener("input", validate);

var state = document.getElementById("state");
state.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

var social = document.getElementById("social");
social.addEventListener("input", validate);

var comments = document.getElementById("comments");
comments.addEventListener("input", validate);

//function validate
function validate(e){
    var value = e.target.value;
    var type = this.id;
    var em = "error_" + type;

    switch(type){
        case "firstName":
            if(!value.trim().match(regExName)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validFirstName = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validFirstName = true;
            }
            break;
        case "lastName":
            if(!value.trim().match(regExName)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validLastName = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validLastName = true;
            }
            break;
        case "emailId":
            if(!value.trim().match(regExEmailId)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validEmailId = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validEmailId = true;
            }
            break;
        case "phoneNumber":
            if(!value.trim().match(regExPhoneNumber)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validPhoneNumber = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validPhoneNumber = true;
            }
            break;
        case "streetAddress1":
            if(value.trim().length == 0){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validStreetAddress = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validStreetAddress = true;
            }
            break;
        case "city":
            if(value.trim().length == 0){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validCity = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validCity = true;
            }
            break;
        case "state":
            if(value.trim().length == 0){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validState = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validState = true;
            }
            break;
        case "zipcode":
            if(!value.trim().match(regExZipCode)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validZipCode = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validZipCode = true;
            }
            break;
        case "social":
            if(value.trim().length == 0){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validSocial = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validSocial = true;
            }
            break;
        
        case "comments":
            if(value.trim().length == 0){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validComments = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validComments = true;
            }
            break;
    }
}

//function for ice cream
const myIceCreams = document.getElementById("myIceCreams");
const addSyrup = document.getElementById("addSyrup");
const size = document.getElementById("size");
const Syrup = document.getElementById("Syrup");

size.style.display = "none";
addSyrup.style.display = "none";
size.innerHTML = "";

myIceCreams.onchange = (e) => {
    if(e.target.value == "Hot Black Tea"){
        validIceCream = true;
        size.style.display = "block";
        addSyrup.style.display = "none";

        document.getElementById("size").innerHTML = `<br>
        <label for="hear">Hot Black Tea - Large <br> ($2 extra):</label>
      <input type='checkbox' id="checkbox1" name="drinksss" value="Hot Black Tea" />
            <br><br>
        `;

        const msg1 = document.getElementById("checkbox1");
        msg1.addEventListener("click", () => {
            if(msg1.checked){
                addSyrup.style.display = "block";
                if(Syrup.value.length == 0){
                    validValueB = false;
                }
                else{
                    Syrup.value = "";
                    validValueB = true;
                }
            }
            else{
                addSyrup.style.display = "none";
                validValueB = true;
            }
        });
    }
    else if(e.target.value == "Cold Coffee"){
        validIceCream = true;
        size.style.display = "block";
        addSyrup.style.display = "none";

        document.getElementById("size").innerHTML = `<br>
        <label for="hear">Cold Coffee - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox2" name="drinksss" value="Cold Coffee" />
            <br><br>
        `;

        const msg2 = document.getElementById("checkbox2");
        msg2.addEventListener("click", () => {
            if(msg2.checked){
                addSyrup.style.display = "block";
                if(Syrup.value.length == 0){
                    validValueB = false;
                }
                else{
                    Syrup.value = "";
                    validValueB = true;
                }
            }
            else{
                addSyrup.style.display = "none";
                validValueB = true;
            }
        });
    }
    else if(e.target.value == "Lemon Iced Tea"){
        validIceCream = true;
        size.style.display = "block";
        addSyrup.style.display = "none";

        document.getElementById("size").innerHTML = `<br>
        <label for="hear">Lemon Iced Tea - Large <br> ($2 extra):</label>
      <input type='checkbox' id="checkbox3" name="drinksss" value="Lemon Iced Tea" />
            <br><br>
        `;

        const msg3 = document.getElementById("checkbox3");
        msg3.addEventListener("click", () => {
            if(msg3.checked){
                addSyrup.style.display = "block";
                if(Syrup.value.length == 0){
                    validValueB = false;
                }
                else{
                    Syrup.value = "";
                    validValueB = true;
                }
            }
            else{
                addSyrup.style.display = "none";
                validValueB = true;
            }
        });
    }
    else if(e.target.value == "Expresso"){
        validIceCream = true;
        size.style.display = "block";
        addSyrup.style.display = "none";

        document.getElementById("size").innerHTML = `<br>
        <label for="hear">Expresso - Large <br> ($2 extra):</label>
      <input type='checkbox' id="checkbox4" name="drinksss" value="Expresso" />
            <br><br>
        `;

        const msg4 = document.getElementById("checkbox4");
        msg4.addEventListener("click", () => {
            if(msg4.checked){
                addSyrup.style.display = "block";
                if(Syrup.value.length == 0){
                    validValueB = false;
                }
                else{
                    Syrup.value = "";
                    validValueB = true;
                }
            }
            else{
                addSyrup.style.display = "none";
                validValueB = true;
            }
        });
    }
    else if(e.target.value == "Latte"){
        validIceCream = true;
        size.style.display = "block";
        addSyrup.style.display = "none";

        document.getElementById("size").innerHTML = `<br>
        <label for="hear">Latte - Large <br> ($1 extra):</label>
      <input type='checkbox' id="checkbox5" name="drinksss" value="Latte" />
            <br><br>
        `;

        const msg5 = document.getElementById("checkbox5");
        msg5.addEventListener("click", () => {
            if(msg5.checked){
                addSyrup.style.display = "block";
                if(Syrup.value.length == 0){
                    validValueB = false;
                }
                else{
                    Syrup.value = "";
                    validValueB = true;
                }
            }
            else{
                addSyrup.style.display = "none";
                validValueB = true;
            }
        });
    }
    else{
        size.style.display = "none";
        addSyrup.style.display = "none";
        validIceCream = false;
    }
    
}




//function resetted

function resetted(e){
    e.target.reset();
    size.style.display = "none";
    addSyrup.style.display = "none";
}

//function submitted

function submitted(e){
    let title;
    for(let i=0; i<titles.length; i++ ){
        if(titles[i].checked){
            validTitleValueB = true;
            title = titles[i].value;
        }
    }

    e.preventDefault();
    //console.log(validValueB, Syrup.value.length);
    if(validValueB == false && Syrup.value.length != 0){
        validValueB = true;
    }
    if(validFirstName && validLastName && validEmailId && validPhoneNumber && validStreetAddress && validCity && validState && validZipCode && validSocial && validIceCream && validValueB && validComments){
        detailsOfTheTable.innerHTML += `
        <tr>
      		<td>${title.charAt(0).toUpperCase() + title.slice(1)}. ${
            document.getElementById("firstName").value
          } ${document.getElementById("lastName").value}</td>
      		<td>${document.getElementById("emailId").value}</td>
      		<td>${document.getElementById("phoneNumber").value}</td>
      		<td>${document.getElementById("streetAddress1").value}</td>
      		<td>${document.getElementById("streetAddress2").value}</td>
      		<td>${document.getElementById("city").value}</td>
      		<td>${document.getElementById("state").value}</td>
      		<td>${document.getElementById("zipcode").value}</td>
            <td>${document.getElementById("social").value}</td>
      		<td>${document.getElementById("myIceCreams").value}</td>
      		<td>${document.getElementById("Syrup").value}</td>
      		<td>${document.getElementById("comments").value}</td>
      	</tr>
      	`;
        alert("Data entered successfully");
        e.target.reset();
        size.style.display = "none";
        addSyrup.style.display = "none";
    }
    else if(validFirstName == false){
        alert("Please enter first name");
    }
    else if(validLastName == false){
        alert("Please enter last name");
    }
    else if(validEmailId == false){
        alert("Please enter email id");
    }
    else if(validPhoneNumber == false){
        alert("Please enter phone number");
    }
    else if(validStreetAddress == false){
        alert("Please enter street address");
    }
    else if(validCity == false){
        alert("Please enter city");
    }
    else if(validState == false){
        alert("Please enter state");
    }
    else if(validZipCode == false){
        alert("Please enter zip code");
    }
    else if(validSocial == false){
        alert("Please enter how did you hear about us");
    }
    else if(validIceCream == false){
        alert("Please select a drink");
    }
    else if(validValueB == false){
        alert("Please enter any customizations you want");
    }
    else if(validComments == false){
        alert("Please enter comments");
    }
    else{
        alert("Please fill all the fields as specified");
    }
}