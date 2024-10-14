const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Patches = require('Patches');
const CameraInfo = require('CameraInfo');



(async function() { // Enable async/await in JS [part 1]
  const [ColorPickerTarget,CrossMarkRightSideControl,ChildBlockInteraction,RemoveBtn,ColorPaletteBtn] = await Promise.all([
    Scene.root.findFirst('ColorPickerTarget'),
    Scene.root.findFirst('CrossMarkRightSideControl'),
    Scene.root.findFirst('ChildBlockInteraction'),
    Scene.root.findFirst('RemoveBtn'),
    Scene.root.findFirst('ColorPaletteBtn'),
  ]);

  var screenScaleValue = await Patches.outputs.getScalar('ScreenScale');
  var screenWidth=CameraInfo.previewSize.width.pinLastValue();
  var screenXvalue=screenWidth/screenScaleValue.pinLastValue();
  // const screenHeight=CameraInfo.previewSize.height.pinLastValue();
  // const screenYvalue=screenHeight/screenScaleValue;
  Diagnostics.log(screenXvalue);
 
 
  var storeColorYValue;
  const StoreCrossMarkRightSideValue=screenXvalue;
  const Xvalue =StoreCrossMarkRightSideValue-20;
  ColorPickerTarget.transform.y.monitor().subscribe(function (ColorYvalue) {

  if (ColorYvalue.newValue > ChildBlockInteraction.transform.y.pinLastValue() || ColorYvalue.newValue <-0.1 ) {
   
    storeColorYValue=ColorYvalue.newValue;
    ColorPickerTarget.hidden=true;
    Diagnostics.log( storeColorYValue);
   //ColorPickerTarget.transform.y=ChildBlockInteraction.transform.y.pinLastValue();

  }
  else if(ColorYvalue.newValue < ChildBlockInteraction.transform.y.pinLastValue() || ColorYvalue.newValue >-0.1){
    ColorPickerTarget.hidden=false;
   // ColorPickerTarget.transform.y=ChildBlockInteraction.transform.y.pinLastValue();

  }
});
ColorPickerTarget.transform.x.monitor().subscribe(function (ColorXvalue) {
 
   if (ColorXvalue.newValue <-0.1 ||ColorXvalue.newValue>Xvalue) {
    Diagnostics.log( Xvalue);
     ColorPickerTarget.hidden=true;
   }
   else if(ColorXvalue.newValue >-0.1){
    ColorPickerTarget.hidden=false;
    
   }
 });
 
 TouchGestures.onTap(RemoveBtn).subscribe((gesture) => {
  if (ColorPickerTarget.transform.y.pinLastValue() > ChildBlockInteraction.transform.y.pinLastValue()) {
    ColorPickerTarget.hidden=true;
  }
});

TouchGestures.onTap(ColorPaletteBtn).subscribe((gesture) => {
  if (ColorPickerTarget.transform.y.pinLastValue() > ChildBlockInteraction.transform.y.pinLastValue()) {
   
    ColorPickerTarget.hidden=true;
  }
  else{
    ColorPickerTarget.hidden=false;
  }
});

})();  



/* ----------Recall Things---------
var Boolean = false;

  Patches.inputs.setBoolean('IsControlCrossMark', Boolean);

 
   // const myString = await Patches.outputs.getString('mytext');
   // const vector = await Patches.outputs.getPoint2D('getVector');
    //Diagnostics.log(myString.pinLastValue());
   // Diagnostics.log(vector.x.pinLastValue());
// Print the scale factor to the console
  var screenScale = Diagnostics.diagonalSizeClass;
 // Diagnostics.log('Screen Scale Factor: ' + screenScale);
 // Diagnostics.log(CameraInfo.previewSize.width.pinLastValue());
  const vv=CameraInfo.previewSize.width.pinLastValue();
  Diagnostics.log(vv);
  const ww=CameraInfo.previewSize.height.pinLastValue();
 // Diagnostics.log(ww/2);


TouchGestures.onTap(RemoveBtn).subscribe((gesture) => {
  if (ColorPickerTarget.transform.y.pinLastValue() > ChildBlockInteraction.transform.y.pinLastValue()) {
    Boolean=true;
    ColorPickerTarget.hidden=true;
    Patches.inputs.setBoolean('IsControlCrossMark', Boolean);
    Diagnostics.log(ColorPickerTarget.transform.y.pinLastValue());
  }
});

// TouchGestures.onTap().subscribe((gesture) => {
//   ColorPickerTarget.hidden=false;
 
//   Boolean=false;
//   Patches.inputs.setBoolean('IsControlCrossMark', Boolean);
//   Diagnostics.log(Boolean);
  
  

// });
// TouchGestures.onPan().subscribe((gesture) => {
//   ColorPickerTarget.hidden=false;
  
//   Boolean=false;
//   Patches.inputs.setBoolean('IsControlCrossMark', Boolean);
//   Diagnostics.log(Boolean);
  
  

// });


*/