#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";


console.log(chalk.white.bgRed.bold("WELCOME TO MY ATM MACHINE"));



let myBalance: number = 20000; // Rs.
let myPin: number = 1122;

let pinResult = await inquirer.prompt

    (
        [
            {
                name: "pin",
                message: "Please Enter Your Pincode:",
                type: "number",
            },
        ]
    );

if (pinResult.pin === myPin) {
    console.log(chalk.green.bold("LOGIN SUCCESFULL"));

    let operationResult = await inquirer.prompt
        (
            [
                {
                    name: "operation",
                    message: "PLEASE SELECT OPTION:",
                    type: "list",
                    choices: ["withdraw", "check balance", "fast cash"],
                },
            ]
        );

if (operationResult.operation === "withdraw") 
    {
        let amountResult = await inquirer.prompt
        (   
            [
                {
                    name: "amount",
                    message: "PLEASE ENTER YOUR WITHDRAW AMOUNT:",
                    type: "number",
                },
            ]
        );

    if (amountResult.amount <= myBalance) 
    {
        myBalance -= amountResult.amount;
        console.log(chalk.green.bold("WITHDRAW CONFIRMED" ));
        console.log(chalk.magenta.bold("YOUR REMAINING BALANCE IS: " + myBalance));
    } 
    else {
        console.log(chalk.red.bold("INSUFICIENT BALANCE"));
    }
    }
        else if (operationResult.operation === "check balance")
        {
            console.log(chalk.magenta.bold("YOUR CURRENT BALANCE IS: " + myBalance));
        }   
       
        else if (operationResult.operation === "fast cash") 
        {
            let fastResult = await inquirer.prompt
            (
                [
                    {
                        name: "fastOption",
                        message: "PLEASE SELECT YOUR WITHDRAW AMOUNT:",
                        type: "list",
                        choices: [5000, 10000, 15000, 20000],
                    },
                ]
            );

            if (fastResult.fastOption > myBalance) {
                console.log(chalk.red.bold("INSUFICIENT BALANCE!"));
              } else {
                myBalance -= fastResult.fastOption;
                console.log(chalk.green.bold("WITHDRAW CONFIRMED" ));
                console.log(chalk.magenta.bold(`YOUR REMAINING BALANCE IS: ${myBalance}`));
              }
          
        }
    } 
else 
    {
        console.log(chalk.red.bold("INCORRECT PIN CODE"));
    }
console.log(chalk.bgCyan.bold("ALLAH HAFIZ"));
