function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qY0fvoHMy/model.json' , modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error , results)
{
    if(error){
    console.log(error);
    }else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById('result_confidence').innerHTML = 'I can hear - '+results[0].label;

    img = document.getElementById("aliens-01");

    if (results[0].label == 'CAT') {
    img.src = 'cat.jpg';
   document.getElementById('ff').innerHTML = 'I DECTECTED CAT AROUND';
   document.getElementById('fff').innerHTML = 'THERE IS NO DOG';


    } else if (results[0].label == 'DOG') {
        img.src = 'dog.jpg';
        document.getElementById('fff').innerHTML = 'I DECTECTED DOG AROUND';
        document.getElementById('ff').innerHTML = 'THERE IS NO CAT';
    
    
  }else {
        img.src = 'ear-29773.png';
        document.getElementById('fff').innerHTML = 'NO CAT';
        document.getElementById('ff').innerHTML = 'NO DOG';
        }


}

}