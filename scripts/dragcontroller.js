const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const Scene = require('Scene');
const Reactive = require('Reactive');

// Replace 'yourUIRectangle' with the actual name of your UI rectangle in the Scene panel
//const yourUIRectangle = Scene.root.findFirst('rectangle0');
(async function() { // Enable async/await in JS [part 1]

  
  // Locate the plane and material in the project
  const [BlockInteraction0, ColorPickerTarget] = await Promise.all([
    Scene.root.findFirst('BlockInteraction0'),
    Scene.root.findFirst('rectangle0'),
    
  ]);
  
  Diagnostics.log(ColorPickerTarget.transform.x);

 
function checkPosition() {
    if (BlockInteraction0.transform.y>= ColorPickerTarget.transform.y) {


  }
  else {
    // Check again after a delay
    Time.setTimeout(checkPosition, 100); // Adjust the delay as needed
    Diagnostics.log("fuck");
  }
}
checkPosition();
})();  