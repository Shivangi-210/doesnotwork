camera = document.getElementById("cam");
 Webcam.set({
   width : 360 , 
   height : 250 , 
   image_format : "png" ,
   png_qaulity : 90
 });
Webcam.attach("cam");
function tt(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';});}
    console.log("ml5 version" , ml5.version);

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Fxb5NYW5a/model.json" , modelLoaded);

    function modelLoaded(){
        console.log("Model loaded");
    }
   function S(){
   img = document.getElementById("selfie_image");
   classifier.classify(img, gotseven);
   }
   function gotseven(error , result){
     if(error){
       console.error(error);
     }else{
       console.log(result);
       document.getElementById("O").innerHTML = result[0].label;
       document.getElementById("A").innerHTML = result[0].confidence.toFixed(3);
     }
   }