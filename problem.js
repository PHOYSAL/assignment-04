// problem-1
/*function signature/sample */
function calculateTax(income, expenses) {
    // You have to write your code here
    if(income<0 || expenses<0 || income<expenses){
        return "Invalid Input";
    }
   
    let tax=(income-expenses)*.2;
    return tax;
}
// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, 15000)); 

// problem2
/*function signature/sample */
function sendNotification(email) {
    
    if(email.includes('@')!==true){
        return 'Invalid Email';
    }
    
    let emailAddress=email.split("@")
    let username=emailAddress[0];
    let domainName=emailAddress[1];
    let massage=username+" "+"sent you an email from"+" "+domainName;
    return massage;
}

// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("zihad.gmail.com"));

// problem-3
/*function signature/sample */
function checkDigitsInName(name) {
    //write your code here
    if(typeof name!=='string'){
        return "Invalid Input";
    }
    for(let i=0;i<name.length;i++){
        if(name[i]>='0' && name[i]<='9'){
            return true;
        }
    }
    return false;
}
// console.log(checkDigitsInName("foysal123"))
// console.log(checkDigitsInName("foysal"))
// console.log(checkDigitsInName(["foysal"]))

// problem-4
/*function signature/sample */
function calculateFinalScore(obj) {
    //write your code here
    if(typeof obj !=="object"){
        return "Invalid Input"
    }
    if(typeof obj.name==="string" && typeof obj.testScore==="number" && obj.testScore<=50 && typeof obj.schoolGrade==="number" && obj.schoolGrade<=30 && typeof obj.isFFamily==="boolean")
    {
        if(obj.isFFamily===true){
            obj.isFFamily=20;
            let passScore=obj.testScore+obj.schoolGrade+obj.isFFamily;
            return passScore>=80;
        }
        else{
            return false;
        }
    }
 }
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 15, isFFamily : true  }));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));
// console.log(calculateFinalScore("hello"));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));


// problem-5
/*function signature/sample */
function  waitingTime(waitingTimes  , serialNumber) {
    
    if(!Array.isArray(waitingTimes) || typeof serialNumber!=="number"){
        return "Invalid Input"
    }
}

// console.log(waitingTime([ 3, 5, 7, 11, 6 ], "10"));
// console.log(waitingTime([13, 2, 6, 7, 10], 6));
// console.log(waitingTime(7 , 10));

// problem-5
/*function signature/sample */
function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber!=="number"){
        return "Invalid Input";
    }
    // You have to write your code here
    // console.log(waitingTimes,serialNumber)
    let totalTime=0;
    let timeLength=0;
    for(let i=0;i<waitingTimes.length;i++){
        totalTime=totalTime+waitingTimes[i];
        timeLength=waitingTimes.length;
    }
    let aveTime=totalTime/timeLength;
    // console.log(aveTime);
    // console.log(totalTime);
    let result=((serialNumber-1)-timeLength)*(Math.round(aveTime));
    return result;
}
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([6], 4));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
// waitingTime([ 3, 5, 7, 11, 6 ], 10);