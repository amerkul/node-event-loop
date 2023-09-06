import AsyncOperationManager from "./async/AsyncOperationManager.js";

function combineTasks() {
    const asyncManager = new AsyncOperationManager();
    /*
    It will be executed before last.
    */
    asyncManager.simulateAsyncOperation(0);

    /*
    It will be first.
     */
    process.nextTick(() => {
        console.log("I was wondering if after all these years");
    });
    /*
    It will be executed second.
     */
    asyncManager.scheduleImmediate();

    /*
    last
     */
    asyncManager.scheduleSetTimeoutWithNextTick(10);
    /*
    third
     */
    asyncManager.scheduleSetImmediateWithNextTick();
}

function bonus() {
    // the first
    console.log("Start");

// Microtask 1. It has a higher priority than setImmediate.
    Promise.resolve().then(() => console.log("Microtask 1"));

// Immediate task 1. Executes in a different phase.
    setImmediate(() => console.log("Immediate task 1"));

// Microtask 2. It has a higher priority than setImmediate. Executes after microtask 1.
    Promise.resolve().then(() => console.log("Microtask 2"));

// Immediate task 2. Executes in a different phase and after immediate task 2.
    setImmediate(() => console.log("Immediate task 2"));

    // the second
    console.log("End");

// Immediate task on the current phase. Faster than setImmediate.
    process.nextTick(() => {
        console.log("Next tick");
    });
}

combineTasks();
// bonus();


