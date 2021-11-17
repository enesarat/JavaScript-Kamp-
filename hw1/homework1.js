/* ENES ARAT */
/* JS Kampı - Ödev1 */

function findPrime(...params){
    for (let index = 0; index < params.length; index++) {
        console.log(index+1+".sayı:"+params[index])
        let counter=0;
        for (let i = 2; i < params[index]; i++) {
            if (params[index]%i==0) {
                counter++;
            }
        }
        if(counter!=0 || params[index]==1){
            console.log("(Not a prime number)")
        }
        else{
            console.log("(Prime number)")
        }
    }
}
findPrime(1,2,3,4,5,6,7,8)

function checkFriendNumber(num1,num2){
    let sum1=0;
    let sum2=0;
    for (let index = 1; index < num1; index++) {
        if(num1%index==0){
            sum1=sum1+index
        }
        
    }
    for (let index = 1; index < num2; index++) {
        if (num2%index==0) {
            sum2=sum2+index
        }
        
    }
    if(sum1==num2 && sum2==num1){
        console.log(num1+" and "+num2+" are friend number.")
    }
    else{
        console.log(num1+" and "+num2+" are not friend number.")
    }
}
checkFriendNumber(1184, 1210)

function brilliantNumbersUpTo1000(){
    for (let index = 1; index < 1000; index++) {
        let sum = 0
        for (let i = 1; i <= index; i++) {
            if(index%i==0){
                sum=sum+i
            }
        }    
        if(sum==index*2){
            console.log(index+" is a brilliant number.")
        }    
    }
}
brilliantNumbersUpTo1000()

function primeNumbersUpTo1000(){
    for (let index = 2; index < 1000; index++) {
        let counter=0;
        for (let i = 2; i < index; i++) {
            if (index%i==0) {
                counter+=1;
            }
        }
        if(counter==0){
            console.log(index+"(Prime number)")
        }
    }
}
primeNumbersUpTo1000()