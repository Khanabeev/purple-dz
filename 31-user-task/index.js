"use strict";

import { Task } from "./task.js";
import { User } from "./user.js";

const task = new Task("example task");
const user = new User(task);

user.do();
