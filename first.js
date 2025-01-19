// console.log(1+2);
// let x=10;
// console.log(x);
// console.log(typeof x);

// let boll = false;
// console.log(typeof boll);

// let a;
// console.log(a);
// console.log(typeof a);

// let b = null;
// console.log(b);
// console.log(typeof b);

// let num1 = 10n;
// console.log(num1);
// console.log(typeof num1);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// console.log(Number.MAX_VALUE*10);

// let num3 = Infinity;
// console.log(num3);

// let ni =10;
// console.log(ni++);
// console.log(ni);

// let x1 = "5";
// let y1 = 2;
// let result = x1 * y1;

// console.log(result === 10);

//Complete the findDuplicate function
// Do not alter the starter code.

//Complete the findDuplicate function
// Do not alter the starter code.

// let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// function findDuplicate(arr){
// //Implement your function here
//     const duplicates = [];
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]==arr[j]){
//                 flag = false;
//                 for(let k=0; k<duplicates.length; k++){
//                     if(duplicates[k] == arr[i]){
//                         flag = true;
//                     }
//                 }
//                 if(flag==false){
//                     duplicates.push(arr[i]);
//                 }
//                 break;
//             }
//         }
//     }
//     return duplicates;
// }

// let arr1 = [1, 2, 3, 4];
// let arr2 = [4, 5, 6, 3];

// let mergedArr = [...arr1, ...arr2];

// console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

// console.log(findDuplicate(mergedArr));

//complete the function mergeArray
//Do not alter the starter code.
// arr1 = [1,2,4,5,7];
// arr2 = [3,4,6,7,9,0];
// function mergeArray(arr1,arr2){
//     let mergedarr = [...arr1, ...arr2];
//     let resultarr = [];
//     for(let i=0; i<mergedarr.length; i++){
//         let Ispresent= false;
//         for(let j=0; j<resultarr.length; j++){
//             if(mergedarr[i] == resultarr[j]){
//                 Ispresent = true;
//                 break;
//             }
//         }
//         if(Ispresent == false){
//             resultarr.push(mergedarr[i])
//         }
//     }
//     return resultarr;
//     //Implemet your function here
// }
// console.log(mergeArray(arr1,arr2));
//Output : [1,2,4,5,7,3,6,9,0]

// function reverseString(str){
//     //Implement Your function here
//     for(let i=1; i<str.length; i++){
//         str = str.charAt(i) + str.slice(0, i) + str.slice(i + 1);
//     }
//     return str;
// }
// console.log(reverseString("Hello"));
//Output : "olleH"

/*
str=Hello
1st itr: i=0
    str = "H" + "" + "ello"
    str = Hello
2nd itr: i=1
    str = "e" + "He" + "llo"
    str = eHllo
3rd itr: i=2
    str = "l" + "eH" + "lo"
    str = leHlo
4th itr: i=3
    str = "l" + "leH" + "o"
    str = lleHo
5th itr: i=4
    str = "o" + "lleH" + ""
    str = olleH


*/

//complete the calculatePrice function
//Do not alter the starter code
// const goods = {
//     apple: { price: 150, quantity: 2 },
//     banana: { price: 75, quantity: 3 },
//     orange: { price: 125, quantity: 1 },
//   };
//   function calculatePrice(goods) {
//     // Hint 1: Initialize a variable to store the total price, e.g., let totalPrice = 0;

//     // Hint 2: Use a for-in loop to iterate over the properties (items) in the goods object
//     // for (let item in goods) { ... }
//       let totalPrice = 0;
//       for (let item in goods){

//           totalPrice += goods[item].price * goods[item].quantity;
//       }
//       return totalPrice;

//     // Hint 3: Use object destructuring to extract the price and quantity of each item

//     // Hint 4: Calculate the total price for each item and add it to the totalPrice

//     // Hint 5: Return the totalPrice after the loop
//   }
//   console.log(calculatePrice(goods));
//   //output : 650
// function multiply(a, b) {
//     return a*b;
// };

// console.log(multiply);

// console.log(`username = ${username}`);
// console.log(`userAge = ${age}`);

// greetUser(username);

// var username = "Ghandev";
// var age = 25;
// console.log(`username = ${username}`);
// console.log(`userAge = ${age}`);

// function greetUser(username){
//     var greet = "I hope you are doing well.";
//     console.log(`Hello, ${username}!, ${greet}`);
//     var currentyear = 2025;
//     const year = currentyear - age;
//     return `Your birth year is ${year}`;
// }

// var birthyear = greetUser(username);
// console.log(birthyear);

// function factorial(n){
//     if(n == 0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// console.log(factorial(5));

// function main() {

//     let userAuth = (
//       function () {
//         // Create an empty array to store user data.
//           let registeredUsers = [];

//         // Define the registerUser function.
//           function registerUser(username, password){
//               if(checkCredentials(username, password)){
//                   return `The user is already registered`;
//               }
//               registeredUsers.push({username:username,password:password});
//               return ` The user have been added to the registeredUser array`;

//           }

//         // Define the checkCredentials function.
//           function checkCredentials(username, password){
//               for(let i=0; i<registeredUsers.length; i++){
//                   if(registeredUsers[i].username == username && registeredUsers[i].password == password){
//                       return true;
//                   }
//               }
//               return false;
//           }

//       // Return the registerUser function as part of the userAuth object
//           return {
//           registerUser: registerUser
//         };
//       }
//     )();

//     // Example usage
//     console.log(userAuth.registerUser("user1", "password123"));
//     // Output: "The user have been added to the registeredUser array"
//     console.log(userAuth.registerUser("user1", "password123"));
//     // Output: "The user is already registered"

//     return userAuth;
// }
// main();

//Refactor the given impure function to pure function.
// function removeVowels(obj) {
//     // Hint: To make this function pure, do not modify the original obj.
//     // Instead, create and return a new object with the modified value.
//     let newobj = {...obj};
//     console.log(newobj);
//     newobj.value = newobj.value.replace(/[aeiou]/gi, "");
//     console.log(obj);
//     return newobj;
// }

// // you don't need to do anything below.
// //you can use it for testing the code.
// let strObj = { value: "Hello World" };
// //For pure function
// //let newObj = removeVowels(strObj);
// removeVowels(strObj);
// console.log(strObj.value);
// //console.log(newObj.value);

// const exampleArray = [1, 2, 3, 4];
// const result = exampleArray.reduce(function(accumulator, currentValue) {
// accumulator.push(currentValue * 2);
// return accumulator;
// }, []);
// console.log(result); // Output: [2, 4, 6, 8]

// let obj = {
//     "key1": "",
//     "key2": "value2"
//   };

//   for (let k in obj) {
//     console.log(k + ": " + obj[k]);
//   }
// Output:
// key1: value1
// key2: value2

//   const contacts = [
//     { name: "Alice", company: "ABC Inc." },
//     { name: "Bob", company: "XYZ Corp." },
//     { name: "Charlie", company: "ABC Inc." }
//   ];

//   function mapContactsToCompanies(contacts) {
//     // The goal is to return an object where each "key" is a company name, and the "value" is an array of names of people who work at that company.
//       let result;
//       result = contacts.reduce(function(accumulator,currval){
//                           if(!accumulator.hasOwnProperty(currval.company)){
//                               accumulator[currval.company] = [currval.name];
//                           }
//                           else{
//                               accumulator[currval.company].push(currval.name);
//                           }
//                           return accumulator;
//                       },{});
//       return result;

// Use the reduce method to iterate through each contact in the array.

// The reduce method takes two arguments:
// 1. A callback function (with two parameters: the accumulator (obj) and the current item (contact)).
// 2. An initial value for the accumulator (in this case, an empty object {}).

// For each contact:
// 1. Check if the company name already exists as a key in the object.
// 2. If it doesn't exist, create a new array for that company.
// 3. Add the contact name to the array of names for that company
// 4. Return the object(accumulator) after processing all contacts.

// Implement your function logic below and return the object as described.
//   }

//   res = mapContactsToCompanies(contacts);
//   console.log("*********************");

//   for(let key in res) {
//       console.log(key + ": " + res[key]);
//   }

// function main(){
//     //Refactor the gadget constructor function
//   const Gadget = (brand, type) => {
//     this.brand = brand;
//     this.type = type;

//     // Refactor the describeGadget() method here
//     this.describeGadget = function(){
//       return `This gadget is a ${this.type} from ${this.brand}.`;
//     };
//   };
//     const gadget1 = new Gadget("sony","laptop");
//     console.log(gadget1.describeGadget());
//     // Do not modify the return statement
//    return Gadget;
//   }
//   main();

// function main(){
//   //Create your constructor funtion with the name Shipment
//       function Shipment(id,location,destination,status,resources){
//           this.id = id;
//           this.location = location;
//           this.destination = destination;
//           this.status = status;
//           this.resources = resources;
//       }

//   //Add the updateStatusAndResources using the object prototype
//       Shipment.prototype.updateStatusandResources = function(newstatus,newresources){
//           this.status = newstatus;
//           this.resources = newresources;
//       }

//   //Add the assignResource methods through Object prototype
//       Shipment.prototype.assignResources = function(...args){
//           this.resources = [...this.resources, ...args];
//       }

//   //Create the object literal with tthe name TrackingSystem
//       const TrackingSystem = {
//           shipments : [],
//           updateStatus(id,status){
//               for(let obj of TrackingSystem.shipments){
//                   if(obj.id == id){
//                       obj.status = status;
//                   }
//               }
//           },
//           viewShipment(id){
//               const myobj = {};
//               for(let obj of TrackingSystem.shipments){
//                   if(obj.id == id){
//                       const {id:shipmentId, status, resources, location, destination} = obj;
//                       console.log(`Shipment ID:${shipmentId}`);
//                       console.log(`Status: ${status}`);
//                       console.log(`Resources:${resources.join(', ')}`);
//                       console.log(`Location:${location}`);
//                       console.log(`Destination:${destination}`);
//                   }
//               }
//           }
//       };

//   return {Shipment,TrackingSystem};
//   //do not modify any other code.
//   }

// const { Shipment, TrackingSystem } = main();

// // Create some shipments
// const shipment1 = new Shipment('12345', 'New York', 'Los Angeles', 'In Transit', ['Forklift', 'Worker']);
// const shipment2 = new Shipment('67890', 'Chicago', 'San Francisco', 'Shipped', ['Truck', 'Driver']);

// TrackingSystem.shipments.push(shipment1, shipment2);

// // Update status and resources for shipment 12345
// shipment1.updateStatusandResources('Delivered', ['Forklift', 'Worker', 'Pallets']);

// // Assign additional resources to shipment 67890
// shipment2.assignResources('Security Guard', 'Packing Crew');

// // View the shipment details
// TrackingSystem.viewShipment('12345');
// TrackingSystem.viewShipment('67890');

//Create the class with ES6 standard with mentioned properties and methods.
//Do not alter the starter Code
// function main(){
//   //Implement your class here
//   class Person{
//       name;
//       age;
//       #gender;
//       constructor(name,age,gender){
//           this.name = name;
//           this.age = age;
//           this.gender = gender;
//       }
//       speak(){
//           console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//       }
//   }

//   class Student{
//       person;
//       major;
//       gpa;
//       constructor(person,major,gpa){
//           this.person = person;
//           this.major = major;
//           this.gpa = gpa;
//       }
//       study(){
//           console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
//       }
//       speak(){
//           console.log(`Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`);
//       }
//   }
//   return {Person,Student};
// }

// const {Person,Student} = main();
// const person1 = new Person("John",20,"M");
// person1.speak();

// const stud1 = new Student(person1,"CS",9);

// stud1.speak();
// stud1.study();

//complete the ExpenseTracker class.
// Do not alter the starter code
//complete the ExpenseTracker class.
// Do not alter the starter code
// function main() {
//   class ExpenseTracker {
//     //Create your private properites here
//       #income;
//       #expenses;
//     //Create a constructor function
//       constructor(income){
//           this.#income = income;
//           this.#expenses = [];
//       }
//     //create your private properties to calculate expenses
//       #calculateTotalExpenses(){
//           const totalamount = this.#expenses.reduce((accumulator, currentValue) => accumulator + currentValue.amount,0);
//           return totalamount;
//       }
//     //Create your public properties here
//       addExpense(name, amount, date){
//           let newobj = {};
//           newobj = {
//               name : name,
//               amount : amount,
//               date : date
//           }
//           this.#expenses = [...this.#expenses, newobj];
//       }
//       calculateBalance(){
//           return this.#income - this.#calculateTotalExpenses();
//       }
//   }
//   //The class should function accordingly.
//   const tracker = new ExpenseTracker(5000);
//   tracker.addExpense("Rent", 1000, "2021-10-01");
//   tracker.addExpense("Groceries", 500, "2021-10-02");
//   console.log(tracker.calculateBalance()); // should output 3500
//   return ExpenseTracker;
// }

// main()

//Create the required Classes with each inheriting Class as specified in the Problem Statement.
// function main() {
//   // Crete your class media with proper constructor properties and methods as mentioned.
//     class Media{
//         title;
//         artist;
//         duration;
//         constructor(title,artist,duration){
//             this.title = title;
//             this.artist = artist;
//             this.duration = duration;
//         }
//         getTitle(){
//             return this.title;
//         }
//         getArtist(){
//             return this.artist;
//         }
//         getDuration(){
//             return this.duration;
//         }
//     }

//   //Create a Class Song extending the Media with proper constructor ,properties and methods
//     class Song extends Media{
//         album;
//         genre;
//         constructor(title,artist,duration,album,genre){
//             super(title,artist,duration);
//             this.album = album;
//             this.genre = genre;
//         }
//         getAlbum(){
//             return this.album;
//         }
//         getGenre(){
//             return this.genre;
//         }
//     }

//   //Create class PopSong and PockSong using Song class
//     class PopSong extends Song{
//         danceability;
//         energy;
//         constructor(title,artist,duration,album,genre,danceability,energy){
//             super(title,artist,duration,album,genre);
//             this.danceability = danceability;
//             this.energy = energy;
//         }
//         getDanceability(){
//             return this.danceability;
//         }
//         getEnergy(){
//             return this.energy;
//         }
//     }
//     class RockSong extends Song{
//         distortion;
//         tempo;
//         constructor(title,artist,duration,album,genre,distortion,tempo){
//             super(title,artist,duration,album,genre);
//             this.distortion = distortion;
//             this.tempo = tempo;
//         }
//         getDistortion(){
//             return this.distortion;
//         }
//         getTempo(){
//             return this.tempo;
//         }
//     }

//   //Create a class Podcast inherting from the Media
//     class Podcast extends Media{
//         host;
//         topic;
//         constructor(title,artist,duration,host,topic){
//             super(title,artist,duration);
//             this.host = host;
//             this.topic = topic;
//         }
//         getHost(){
//             return this.host;
//         }
//         getTopic(){
//             return this.topic;
//         }
//     }

//   //Create NewsPodcast and ComedyPodcast using the Podcast class.
//     class NewsPodcast extends Podcast{
//         source;
//         constructor(title,artist,duration,host,topic,source){
//             super(title,artist,duration,host,topic);
//             this.source = source;
//         }
//         getSource(){
//             return this.source;
//         }
//         getDuration(){
//         	return super.getDuration();
//         }
//     }

//     class ComedyPodcast extends Podcast{
//         comedian;
//         rating;
//         constructor(title,artist,duration,host,topic,comedian,rating){
//             super(title,artist,duration,host,topic);
//             this.comedian = comedian;
//             this.rating = rating;
//         }
//         getComedian(){
//             return this.comedian;
//         }
//         getRating(){
//             return this.rating;
//         }
//     }

//   //Your code will be evaluated on basis of these operation.
//   const popSong = new PopSong(
//     "Shape of You",
//     "Ed Sheeran",
//     235,
//     "÷",
//     "Pop",
//     0.825,
//     0.652
//   );
//   console.log(popSong.getTitle()); // should output 'Shape of You'
//   console.log(popSong.getArtist()); // should output 'Ed Sheeran'
//   console.log(popSong.getDuration()); // should output 235

//   console.log(popSong.getAlbum()); // should output '÷'
//   console.log(popSong.getGenre()); // should output 'Pop'
//   console.log(popSong.getDanceability()); // should output 0.825
//   console.log(popSong.getEnergy()); // should output 0.652

//   const rockSong = new RockSong(
//     "Stairway to Heaven",
//     "Led Zeppelin",
//     482,
//     "Led Zeppelin IV",
//     "Rock",
//     0.056,
//     63.5
//   );
//   console.log(rockSong.getTitle()); // should output 'Stairway to Heaven'
//   console.log(rockSong.getArtist()); // should output 'Led Zeppelin'
//   console.log(rockSong.getDuration()); // should output 482
//   console.log(rockSong.getAlbum()); // should output 'Led Zeppelin IV'
//   console.log(rockSong.getGenre()); // should output 'Rock'
//   console.log(rockSong.getDistortion()); // should output 0.056
//   console.log(rockSong.getTempo()); // should output 63.5

//   const newsPodcast = new NewsPodcast(
//     "The Daily",
//     "The New York Times",
//     30,
//     "Michael Barbaro",
//     "News",
//     "The New York Times"
//   );
//   console.log(newsPodcast.getTitle()); // should
//   // output 'The Daily'
//   console.log(newsPodcast.getArtist()); // should output 'The New York Times'
//   console.log(newsPodcast.getDuration()); // should output 30
//   console.log(newsPodcast.getHost()); // should output 'Michael Barbaro'
//   console.log(newsPodcast.getTopic()); // should output 'News'
//   console.log(newsPodcast.getSource()); // should output 'The New York Times'

//   const comedyPodcast = new ComedyPodcast(
//     "My Favorite Murder",
//     "Karen Kilgariff and Georgia Hardstark",
//     60,
//     "Karen Kilgariff and Georgia Hardstark",
//     "Comedy",
//     "Karen Kilgariff and Georgia Hardstark",
//     4.8
//   );
//   console.log(comedyPodcast.getTitle()); // should output 'My Favorite Murder'
//   console.log(comedyPodcast.getArtist()); // should output 'Karen Kilgariff and Georgia Hardstark'
//   console.log(comedyPodcast.getDuration()); // should output 60
//   console.log(comedyPodcast.getHost()); // should output 'Karen Kilgariff and Georgia Hardstark'
//   console.log(comedyPodcast.getTopic()); // should output 'Comedy'
//   console.log(comedyPodcast.getComedian()); // should output 'Karen Kilgariff and Georgia Hardstark'

//   console.log(comedyPodcast.getRating()); // should output 4.8
//   return {
//     Media,
//     Song,
//     Podcast,
//     PopSong,
//     RockSong,
//     NewsPodcast,
//     ComedyPodcast
//   };
// }
// main();

// function Vehicle(color) {
//   this.wheels = 4;
//   this.doors = 4;
//   this.engine = "V8";
//   this.color = color;
//   this.speed = 0;
//   this.accelerate = function () {
//     this.speed += 10;
//   };
//   this.brake = function () {
//     this.speed -= 5;
//   };
//   this.getSpeed = function () {
//     return this.speed;
//   };
//   this.setColor = function (color) {
//     this.color = color;
//   };
//   this.getColor = function () {
//     return this.color;
//   };
//   this.getDoors = function () {
//     return this.doors;
//   };
//   this.getWheels = function () {
//     return this.wheels;
//   };
//   this.getEngine = function () {
//     return this.engine;
//   };
//   Vehicle.prototype.getVehDetails = function () {
//     return `This vehicle has ${this.wheels} wheels, ${this.doors} doors, ${this.engine} engine, and is ${this.color} in color.`;
//   };
// }
// let veh = new Vehicle("Red");
// console.log(veh.getVehDetails());
// console.log(veh);
// //   this.toString = function(){
// //     return `This vehicle has ${this.wheels} wheels, ${this.doors}
// //     doors, ${this.engine} engine, and is ${this.color} in color.`
// //     }
// //   }
// //   let car = new Vehicle();
// //   console.log(car.toString());

// function Car(){
//   this.wheels = 9;
//   this.doors = 1;
//   this.engine = "V6";
//   Vehicle.call(this, "blue");
// }
// Car.prototype = Object.create(Vehicle.prototype);
// let car1 = new Car();
// // car1.getVehDetails();
// console.log(car1.getVehDetails());
// // console.log(car1.__proto__);


//Do not alter the starter code
// function main(){

//   //Create Character constructor function
//     function Character(health,strength,agility){
//         this.health = health;
//         this.strength = strength;
//         this.agility = agility;
//     }
  
//   //Create Warrior ,Mage, Enemy and Archer constructor function inheriting Character
//     function Warrior(health,strength,agility,weaponType){
//         Character.call(this,health,strength,agility);
//         this.weaponType = weaponType;
//     }
//     Warrior.prototype = Object.create(Character.prototype);
//     function Mage(health,strength,agility,spellType){
//         Character.call(this,health,strength,agility);
//         this.spellType = spellType;
//     }
//     Mage.prototype = Object.create(Character.prototype);
//     function Archer(health,strength,agility,arrowType){
//         Character.call(this,health,strength,agility);
//         this.arrowType = arrowType;
//     }
//     Archer.prototype = Object.create(Character.prototype);
  
//   //Create constructor function for Hero inheriting Hero and Mage
//     function Hero(health,strength,agility,weaponType,spellType,specialAbility){
//         Character.call(this,health,strength,agility);
//         Warrior.call(this,health,strength,agility,weaponType);
//         Mage.call(this,health,strength,agility,spellType);
//         this.specialAbility = specialAbility;
//     }
//     Hero.prototype = Object.create(Character.prototype);
//     Hero.prototype = Object.create(Warrior.prototype);
//     Hero.prototype = Object.create(Mage.prototype);
//     function Enemy(health,strength,agility,enemyType){
//         Character.call(this,health,strength,agility);
//         this.enemyType = enemyType;
//     }
//     Enemy.prototype = Object.create(Character.prototype);
  
//   let warrior1 = new Warrior(100, 50, 30, "sword");
//   let mage1 = new Mage(80, 20, 50, "fireball");
//   let archer1 = new Archer(90, 40, 40, "poison");
//   let hero1 = new Hero(120, 60, 40, "axe", "ice", "double damage");
//   let enemy1 = new Enemy(200, 80, 20, "goblin");
  
//   console.log(warrior1);
//   console.log(mage1);
//   console.log(archer1);
//   console.log(hero1);
//   console.log(enemy1);
  
//   return {Character,Hero,Warrior,Mage,Archer,Enemy};
//   }

// main()

//Do not alter the starter code.
// function main() {
//   //Create your Message Class here with all the properties and methods
// class Message{
//     sender;
//     receiver;
//     messageContent;
//     constructor(sender,receiver,messageContent){
//         this.sender = sender;
//         this.receiver = receiver;
//         this.messageContent = messageContent;          
//     }
//     static totalMessages=0;
//     static status="offline";
//     static recordMessage(){
//         Message.totalMessages++;
//     }
//     static changeStatus(){
//         if(Message.status == "online"){
//             Message.status = "offline";
//             console.log("The status has been changed to offline");
//         }
//         else{
//             Message.status = "online";
//             console.log("The status has been changed to online");
//         }
//     }
//     sendMessage(){
//         console.log(`The message ${this.messageContent} has been sent from ${this.sender} to ${this.receiver}`);
//         Message.recordMessage();
//     }
//     displayDetails(){
//             console.log(`Sender: ${this.sender}`);
//             console.log(`Receiver: ${this.receiver}`);
//             console.log(`Message: ${this.messageContent}`);
//             console.log(`Status: ${Message.status}`);
//             console.log(`Total Messages: ${Message.totalMessages}`);
//     }
// }

//   return Message;
// }
// Message = main();
// Message.changeStatus();
// const myMessage = new Message("John", "Jane", "Hello");
// myMessage.sendMessage();
// myMessage.displayDetails();


//Do not alter the starter code.
// function main(){
//   //Create your class "User" here with all the properties and methods
//   class User{
//       #name;
//       #email;
//       #password;
//       #posts;
//       constructor(name,email,password){
//           this.#name = name;
//           this.#email = email;
//           this.#password = password;
//           this.#posts = [];
//       }
//       get name(){
//           return this.#name;
//       }
//       set name(name){
//           this.#name = name;
//       }
//       get email(){
//           return this.#email;
//       }
//       set email(email){
//           this.#email = email;
//       }
//       get password(){
//           return this.#password;
//       }
//       set password(password){
//           this.#password = password;
//       }
//       addPost(post){
//           this.#posts = [...this.#posts, post];
//       }
//       deletePost(post){
//           this.#posts = this.#posts.filter(obj => obj!=post);
//       }
//       displayPosts(){
//           for(let post of this.#posts){
//               console.log(post.title);
//           }
//       }
//   }
      
//   //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
//       class Post extends User{
//           #title;
//           #content;
//           #date;
//           #likeCount;
//           constructor(name,email,password,title,content,date){
//               super(name,email,password);
//               this.#title = title;
//               this.#content = content;
//               this.#date = date;
//               this.#likeCount = 0;
//           }
//           get title(){
//               return this.#title;
//           }
//           set title(title){
//               this.#title = title;
//           }
//           get content(){
//               return this.#content;
//           }
//           set content(content){
//               this.#content = content;
//           }
//           get date(){
//               return this.#date;
//           }
//           set date(date){
//               this.#date = title;
//           }
//           get likeCount(){
//               return this.#likeCount;
//           }
//           addLike(){
//               this.#likeCount++;
//           }
//           displayDetails(){
//               console.log(`Owner: ${this.name}`);
//               console.log(`Title: ${this.#title}`);
//               console.log(`Content: ${this.#content}`);
//               console.log(`Date: ${this.#date}`);
//               console.log(`Likes: ${this.#likeCount}`);
//           }
//       }
      
      
//     const user1 = new User("John", "john@example.com", "password123");
//     const post1 = new Post(
//       "John", 
//       "john@example.com",
//       "password123",
//       "My first post",
//       "Lorem ipsum dolor sit amet",
//       "2021-01-01"
//     );
//     const post2 = new Post(
//       "John", 
//       "john@example.com",
//       "password123",
//       "My second post",
//       "Consectetur adipiscing elit",
//       "2021-01-02"
//     );
    
//     user1.addPost(post1);
//     user1.addPost(post2);
    
//     post1.addLike();
//     post1.addLike();
    
//     user1.displayPosts();
//     // Output:
//     // Posts by John:
//     // - My first post
//     // - My second post
    
//     post1.displayDetails();
//     // Output:
//     // Owner: John
//     // Title: My first post
//     // Content: Loremipsum dolor sit amet
//     // Date: 2021-01-01
//     // Likes: 2
//     return {User,Post};
//   }
//   main();

console.log(document);
// let document = 20;
console.log(document);