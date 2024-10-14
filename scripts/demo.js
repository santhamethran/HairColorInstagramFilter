const Patches = require('Patches');
export const Diagnostics = require('Diagnostics');

(async function() { // Enable async/await in JS [part 1]

    // Create a boolean variable
    const myBoolean = false;
 var temp=5;
    
    //await Patches.inputs.('IsControlCrossMark', myBoolean);
    // await Patches.inputs.setScalar('values', temp);
    //const myString = await Patches.outputs.getString('mytext');
    var getdatas = await Patches.outputs.getScalar('getdata');
    //var screenScaleValue = await Patches.outputs.getScalar('ScreenScale');
   // const vector = await Patches.outputs.getScalar('ScreenScale');
    // Diagnostics.log(myString.pinLastValue());
     Diagnostics.log(getdatas.pinLastValue());

})();