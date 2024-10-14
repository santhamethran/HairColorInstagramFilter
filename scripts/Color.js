// Load in the required modules
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
export const Diagnostics = require('Diagnostics');

(async function() { // Enables async/await in JS [part 1]

     
    const [ColorPaletteBtn,BlockInteraction,ColorPalette,ColorPickerTarget,RemoveBtn] = await Promise.all([
        Scene.root.findFirst('ColorPaletteBtn'),
        Scene.root.findFirst('BlockInteraction1'),
        Scene.root.findFirst('ColorPalette'),
        Scene.root.findFirst('ColorPickerTarget'),
        Scene.root.findFirst('RemoveBtn')
      ]);
      TouchGestures.onTap(ColorPaletteBtn).subscribe((gesture) => {

        ColorPaletteBtn.hidden=true;
        RemoveBtn.hidden=false;
        ColorPalette.hidden=false;
       // ColorPickerTarget.hidden=false;
        BlockInteraction.hidden=true;
       

      });
      TouchGestures.onTap(RemoveBtn).subscribe((gesture) => {
        RemoveBtn.hidden=true;
        ColorPaletteBtn.hidden=false;
        ColorPalette.hidden=true;
        ColorPickerTarget.hidden=true;
        BlockInteraction.hidden=false;
  
      });

})();