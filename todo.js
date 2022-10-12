"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var readline = require("node:readline/promises");
var node_process_1 = require("node:process");
var rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
var ListItem = /** @class */ (function () {
    function ListItem() {
        this.done = false;
    }
    ListItem.prototype.markDone = function () {
        this.done = true;
        return;
    };
    return ListItem;
}());
;
var list = [];
function toDoIt() {
    return __awaiter(this, void 0, void 0, function () {
        var selection, _a, newTask, toDelete, toMarkDone;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    showMenu();
                    return [4 /*yield*/, returnSelection()];
                case 1:
                    selection = _b.sent();
                    _a = selection;
                    switch (_a) {
                        case 1: return [3 /*break*/, 2];
                        case 2: return [3 /*break*/, 3];
                        case 3: return [3 /*break*/, 5];
                        case 4: return [3 /*break*/, 7];
                        case 5: return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 10];
                case 2:
                    showList();
                    return [3 /*break*/, 10];
                case 3: return [4 /*yield*/, getTodo()];
                case 4:
                    newTask = _b.sent();
                    addList(newTask);
                    return [3 /*break*/, 10];
                case 5: return [4 /*yield*/, returnSelectionToDelete()];
                case 6:
                    toDelete = _b.sent();
                    toDelete = toDelete - 1;
                    removeList(toDelete);
                    return [3 /*break*/, 10];
                case 7: return [4 /*yield*/, returnSelectionToMarkDone()];
                case 8:
                    toMarkDone = _b.sent();
                    toMarkDone = toMarkDone - 1;
                    markItemDone(toMarkDone);
                    return [3 /*break*/, 10];
                case 9:
                    (0, node_process_1.exit)();
                    _b.label = 10;
                case 10:
                    if (selection != 5) return [3 /*break*/, 0];
                    _b.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
toDoIt();
function getTodo() {
    return __awaiter(this, void 0, void 0, function () {
        var answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, rl.question("What do you want to do? \n")];
                case 1: return [4 /*yield*/, (_a.sent()).toString()];
                case 2:
                    answer = _a.sent();
                    return [2 /*return*/, answer];
            }
        });
    });
}
function returnSelection() {
    return __awaiter(this, void 0, void 0, function () {
        var selection, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = parseInt;
                    return [4 /*yield*/, rl.question("Select from above: \n")];
                case 1:
                    selection = _a.apply(void 0, [_b.sent()]);
                    return [2 /*return*/, selection];
            }
        });
    });
}
function returnSelectionToDelete() {
    return __awaiter(this, void 0, void 0, function () {
        var selection, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    showList();
                    _a = parseInt;
                    return [4 /*yield*/, rl.question("Select item to delete: \n")];
                case 1:
                    selection = _a.apply(void 0, [_b.sent()]);
                    return [2 /*return*/, selection];
            }
        });
    });
}
function returnSelectionToMarkDone() {
    return __awaiter(this, void 0, void 0, function () {
        var selection, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    showList();
                    _a = parseInt;
                    return [4 /*yield*/, rl.question("Select item to mark done: \n")];
                case 1:
                    selection = _a.apply(void 0, [_b.sent()]);
                    return [2 /*return*/, selection];
            }
        });
    });
}
function showMenu() {
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
        var i = 1;
        console.log("\t\t\t" + "TODO LIST:\n");
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            if (item.done == true) {
                console.log("\t\t\t" + "✓" + " " + item.item);
            }
            else {
                console.log("\t\t\t" + i + ". " + item.item);
            }
            i++;
        }
    }
}
function addList(newTask) {
    return __awaiter(this, void 0, void 0, function () {
        var task;
        return __generator(this, function (_a) {
            task = new ListItem;
            task.item = newTask;
            list.push(task);
            return [2 /*return*/];
        });
    });
}
function removeList(toDelete) {
    list = list.filter(function (item) { return item != list[toDelete]; });
    return;
}
function markItemDone(toMarkDone) {
    list[toMarkDone].markDone();
    return;
}
