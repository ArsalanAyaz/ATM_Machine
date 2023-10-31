#!\usr\bin\env node
import inquirer from "inquirer";


interface userType {
 name: string;
 pin:number;
 balance:number;

}
let user:userType={

    name:'Arsalan',
    pin:5555,
    balance:100000

}
let resp = await inquirer.prompt([

    {
     message:"please enter your pin",
      name:"pin",
      type:"password",
    }
       ]);
    
 
       // console.log("Response:",resp)
    


if (Number(resp.pin) !== user.pin) {

    console.log("Incorrect pin") 

}else {

let resp = await inquirer.prompt([

    {
      name:"selectType",
      message:"Please select an option",
      type:"list",
      choices:["withdraw","fastcash","checkbalance"],
    },
    {
       name:"Amount",
       message:"please select amount",
       type:"list",
       choices:['500','1000','5000','10000','100000'],
       when(resp){

        return resp.selectType == "fastcash"
      }
    },{

        name:"Amount",
        message:"please enter amount",
        when(resp){

            return resp.selectType == "withdraw"
          }
    }
     

])
 
//console.log("selected type:",resp);
if (resp.selectType == "checkbalance"){

    console.log(user.balance)
} else {

user.balance = user.balance-resp.Amount;
console.log(`your new balance :  ${user.balance}`);
}


};