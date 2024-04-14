"use strict";

import { Task } from "./Task.js";
import { User } from "./User.js";

const task = new Task("example task");
const user = new User(task);

user.do();
