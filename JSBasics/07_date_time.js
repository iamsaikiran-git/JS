let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());


let dateDefinedByMe = new Date(2023,0,22)
console.log(dateDefinedByMe);
console.log(`To Date String method -- ${dateDefinedByMe.toDateString()}`);
console.log(`To ISOS method -- ${dateDefinedByMe.toISOString()}`);


//date formats and their usages
let formattedDate = new Date("2023-01-24")
console.log(formattedDate.toDateString());
let formattedDate1 = new Date("02-31-2023") // dd--mm--yyyy format is invalid in JS also note feb 31st case here in this line it wil increment the value to march month
console.log(formattedDate1.toDateString());


let myTimeStamp = Date.now()
console.log(` Timestamp in integer ${myTimeStamp}`);
console.log(formattedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate1 = new Date("2023-01-12")
console.log(newDate1.getMonth());
console.log(newDate1.getDay());


console.log(newDate1.toLocaleDateString()); //  gives the native representation of date string like "month/date/year"
console.log(newDate1.toDateString()); // Gives the word representation of date like "Thu Jan 12 2023"


// We can also customize the response/ output in the toDateString() method --  not sure doubtful
newDate1.toDateString('default',
{
    weekday: "long"
})
console.log(newDate1.toDateString('default',
{
    weekday:"long"
}));

