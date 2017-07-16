/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Task } from "./Task";
import { Tasks } from "./Tasks";
import { TaskContext } from "./TaskContext";

let executeTask = (task, taskContext) => {
    let promise = new Promise((resolve, reject) => {
        
        let handleResolution = () => {
            let children = task.children.all;
            let childrenCount = children.length;
            if (childrenCount == 0) resolve();
            else {
                let childrenDone = 0;
                let taskContextForChildren = new TaskContext(taskContext);
                children.forEach(child => {
                    executeTask(child, taskContextForChildren).then(() => {
                        childrenDone++;
                        if (childrenDone == childrenCount) resolve();
                    });
                });
            }
        };

        let result = task.execute(taskContext);
        if (result instanceof Promise) result.then(handleResolution);
        else handleResolution();
    });
    return promise;
}

/**
 * Represents a system that is capable of running {Task}s
 */
export class TaskExecutor {
    /**
     * Run a collection of {Tasks} and any of its children recursively
     * @param {Task|Tasks} taskOrTasks A single {Task} or a collection of {Tasks} to execute
     * @returns {Promise}
     */
    execute(taskOrTasks) {
        let taskContext = new TaskContext();
        if( taskOrTasks instanceof Task ) {
            return executeTask(taskOrTasks, taskContext);
        }
        let tasks = taskOrTasks;
        let promise = new Promise((resolve, reject) => {
            let tasksDone = 0;
            let allTasks = tasks.all;
            allTasks.forEach(task => {
                executeTask(task, taskContext).then(() => {
                    tasksDone++;
                    if (tasksDone == allTasks.length) resolve();
                });
            });
        });
        return promise;
    }
}