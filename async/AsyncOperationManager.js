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

}

export default AsyncOperationManager;