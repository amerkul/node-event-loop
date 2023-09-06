class AsyncOperationManager {

   /*
   The setTimeout method belongs to the timer phase. A new function moves to the Callback Queue,
   when the setTimeout method finishes, waits when all microtasks completes within a
   current phase and the Call Stack gets empty. The delay time is the minimum time after
   which the function might be executed.
    */
    simulateAsyncOperation(delayTimeMs) {
        setTimeout(() => {
            console.log("Hello, it's me")
        }, delayTimeMs);
    }

    /*
    The setImmediate callback executes after the Poll phase and belongs to the Check phase.
    The immediate callback is always executed first if it is in a I/O cycle.
     */
    scheduleImmediate() {
        setImmediate(() => {
            console.log("You'd like to meet, to go over");
        })
    }


    scheduleSetTimeoutWithNextTick(delayTimeMs) {
        setTimeout(() => {
            process.nextTick(() => {
                console.log("They say that time's supposed to heal yas");
            });
            console.log("Everything");
            /*
            It's a microtask. the event loop processes the micro-task queue entirely,
            after processing one macro-task from the macro-task queue.
            All callbacks passed to process.nextTick() will be resolved before the event loop continues
            (In short, on the current phase). So, it will be executed first.
            */
        }, delayTimeMs);
    }

    scheduleSetImmediateWithNextTick() {
        setImmediate(() => {
            process.nextTick(() => {
                console.log("Hello, can you hear me?");
            });
            console.log("But I ain't done much healing");
        });
    }

}

export default AsyncOperationManager;