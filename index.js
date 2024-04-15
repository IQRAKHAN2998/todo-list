#! /user/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "todoList",
            type: "input",
            message: "what would you like to add in you todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "would you like to add more in your todos?",
            default: "yes"
        }
    ]);
    todos.push(todoQuestions.todoList);
    condition = todoQuestions.addMore;
    console.log(todos);
}
