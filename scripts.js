function Contact(name, phone, email, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
   
    this.address = address;
}
var contact1 = new Contact("🟢 Christian", "323-555-1234", "christian@yahoo.com", "6539 Wilton Ave. Culver City CA 90234");
var contact2 = new Contact("🟢 Rich", "323-555-1234", "rich@tripod.com", "6539 Wilton Ave. Culver City CA 90234");
var contact3 = new Contact("🟢 Scott", "323-555-1234", "scott@mailinator.com", "6539 Wilton Ave. Culver City CA 90234");
var contact4 = new Contact("🟢 Danny", "323-555-1234", "danny@hotmail.com", "6539 Wilton Ave. Culver City CA 90234");
var contact5 = new Contact("🔴 Taka", "323-555-1234", "taka@mailinator.com", "6539 Wilton Ave. Culver City CA 90234");
var contact6 = new Contact("🟡 Tim", "323-555-1234", "tim@netscape.com", "6539 Wilton Ave. Culver City CA 90234");
var contact7 = new Contact("🟢 Patrick", "323-555-1234", "patrick@live.com", "6539 Wilton Ave. Culver City CA 90234");
var contact8 = new Contact("🟡 Jacques", "323-555-1234", "jacques@aol.com", "6539 Wilton Ave. Culver City CA 90234");

var contacts = [contact1, contact2, contact3, contact4, contact5, contact6, contact7, contact8];

function displayContacts(contacts){

  for(var i = 0; contacts.length > i; i++){

    var tr = document.createElement("tr");
   
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td2.setAttribute("class", "block");
    var td3 = document.createElement("td");
    td3.setAttribute("class", "hide");
    var td4 = document.createElement("td");
    td4.setAttribute("class", "hide");


    td1.appendChild(document.createTextNode(contacts[i].name));
    td2.appendChild(document.createTextNode(contacts[i].phone));
    td3.appendChild(document.createTextNode(contacts[i].email));
    td4.appendChild(document.createTextNode(contacts[i].address));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("contactTable").appendChild(tr);
  }

};

function displayByEmail(contacts){

  if (document.getElementById("select").value == "phone"){
    location.reload();
  }
  else{
  
    document.getElementById("contactTable").innerHTML = "";
  
    for(var i = 0; contacts.length > i; i++){
  
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      td2.setAttribute("class", "block");
      var td3 = document.createElement("td");
      td3.setAttribute("class", "hide");
      var td4 = document.createElement("td");
      td4.setAttribute("class", "hide");
  
      td1.appendChild(document.createTextNode(contacts[i].name));
      td2.appendChild(document.createTextNode(contacts[i].email));
      td3.appendChild(document.createTextNode(contacts[i].phone));
      td4.appendChild(document.createTextNode(contacts[i].address));
  
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
  
      document.getElementById("contactTable").appendChild(tr);
    }
  }
  }