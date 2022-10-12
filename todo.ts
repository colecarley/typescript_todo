import * as readline from "node:readline/promises"
import { exit, stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

class ListItem {
    item: string;
    done: boolean = false;
    dateCreated: Date;
    dateAccomplish: Date;

    markDone() {
        this.done = true;
        return;
    }
};

let list: ListItem[] = [];

async function toDoIt() {
    let selection: number;
    do {
        showMenu();
        selection = await returnSelection();
        switch (selection) {
            case 1:
                showList();
                break;
            case 2:
                let newTask: string = await getTodo();
                addList(newTask);
                break;
            case 3:
                let toDelete: number = await returnSelectionToDelete();
                toDelete = toDelete - 1;
                removeList(toDelete);
                break;
            case 4:
                let toMarkDone: number = await returnSelectionToMarkDone();
                toMarkDone = toMarkDone - 1;
                markItemDone(toMarkDone);
                break;
            case 5:
                exit();
        }
    } while (selection != 5);
}

toDoIt();

async function getTodo() {
    let answer: string = await (await rl.question("What do you want to do? \n")).toString();
    return answer;
}

async function returnSelection() {
    let selection: number = parseInt(await rl.question("Select from above: \n"))
    return selection;
}

async function returnSelectionToDelete() {
    showList();
    let selection: number = parseInt(await rl.question("Select item to delete: \n"))
    return selection;
}

async function returnSelectionToMarkDone() {
    showList();
    let selection: number = parseInt(await rl.question("Select item to mark done: \n"))
    return selection;
}


function showMenu(): void {
    console.log("MENU:");
    console.log("1. show todo list");
    console.log("2. add new item to todo list");
    console.log("3. remove item from todo list");
    console.log("4. mark item as done");
    console.log("5. exit program");
}

function showList() {
    if (list.length == 0) {
        console.log("You don't have anything in your list yet!");
        return;
    }
    else {
        let i: number = 1;
        console.log("\t\t\t" + "TODO LIST:\n")
        for (let item of list) {
            if (item.done == true) {
                console.log("\t\t\t" + "✓" + " " + item.item);

            } else {

                console.log("\t\t\t" + i + ". " + item.item);
            }
            i++;
        }
    }
}

async function addList(newTask: string) {
    const task: ListItem = new ListItem;
    task.item = newTask;
    list.push(task);
    return;
}

function removeList(toDelete: number) {
    list = list.filter(item => item != list[toDelete]);
    return;
}

function markItemDone(toMarkDone: number) {
    list[toMarkDone].markDone();
    return;
}