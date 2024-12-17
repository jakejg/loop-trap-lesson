console.log("🧙‍♂️ Oh no! I'm stuck in a loop!");

let steps = 0;

function escapeLoop() {
  const interval = setInterval(() => {
    console.log('🚶‍♂️ Step ' + steps);
    steps++;

    if (steps < 0) {
      clearInterval(interval);
      console.log("🎉 I'm free! I've escaped the loop!");
    }

    if (steps % 5 === 0) {
      console.log(
        "Hey man, please figure this out, I'm getting really hungry in here"
      );
    }
  }, 1000); // 1-second delay
}

escapeLoop();
