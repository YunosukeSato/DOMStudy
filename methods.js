// Initialize an object with properties and methods
const job = {
  position: 'cashier',
  type: 'hourly',
  isAvailable: true,
  showDetails() {
    const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

    console.log(`The ${this.position} posision is ${this.type} and ${accepting}.`);
  }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

// Initialize an object
const employees = {
  boss: 'Michael',
  secretary: 'Pam',
  sales: 'Jim',
  accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);

// Iterate through the keys
Object.keys(employees).forEach(key => {
  let value = employees[key]
  console.log(`${key}: ${value}`);  
});

//Initialize an object
const session = {
  id: 1,
  time: `26-July-2018`,
  device: 'mobile',
  browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);

// Initialize an object
const operatingSystem = {
  name: 'Ubuntu',
  versions: 18.04,
  license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);

// Loop through the results
entries.forEach(entry => {
  let key = entry[0];
  let value = entry[1];
  console.log(`${key}: ${value}`);
});

// Initialize an object
const fullName = {
  firstName: 'Philip',
  lastName: 'Fry'
};

//Initialize another object
const details = {
  job: 'Delivery Boy',
  employer: 'Planet Express'
};

// Merge the objects

// const character = Object.assign(fullName, details); Or
const character = {...fullName, ...details};

console.log(character);

//Initialize an object
const user = {
  username: 'AzureDiamond',
  password: 'hunter2'
};

// Freeze the object
const newUser1 = Object.freeze(user);

newUser1.password = '*******';
newUser1.active = true;

console.log(newUser1);

// Initialize the object
const user2 = {
  username: 'Kato Junichi',
  password: 'emon3'
};

// Seal the object
const newUser2 = Object.seal(user2);

newUser2.password = '*******';
newUser2.active = true;

console.log(newUser2);

// Create array
const months = ['Jan', 'Feb', 'Mar', 'Apr'];
Object.getPrototypeOf(months);
