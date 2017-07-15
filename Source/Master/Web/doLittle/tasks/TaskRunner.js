/*---------------------------------------------------------------------------------------------
 *  Copyright (c) 2008-2017 doLittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Task } from "./Task";

/**
 * Represents a system that is capable of running {Task}s
 */
export class TaskRunner {
    /**
     * Run a specific task and any of its child tasks
     * @param {Task} task Task to run
     */
    run(task) {
        let promise = new Promise((resolve, reject) => {
            let handleResolution = () => {
                let childrenCount = task.children.length;
                if (childrenCount == 0) resolve();
                else {
                    let childrenDone = 0;
                    task.children.forEach(child => {
                        this.run(child).then(() => {
                            childrenDone++;
                            if (childrenDone == childrenCount) resolve();
                        });
                    });
                }
            };
            
            let result = task.execute();
            if (result instanceof Promise) result.then(handleResolution);
            else handleResolution();

        });
        return promise;
    }
}