class AddressBook{
    firstName;
    lastName;
    address;
    city;
    state;
    Mobile_Number;
    email;
    zip;

constructor(firstName,lastName,address,city,state,Mobile_Number,email,zip){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.Mobile_Number = Mobile_Number;
    this.email = email;
    this.zip = zip;
}

}
let addressbook = new AddressBook("Swapnil","Bhoyar","Camp","Pune","Maharashtra","7894561230","swapnil@gmail.com","411001");
console.log(addressbook);