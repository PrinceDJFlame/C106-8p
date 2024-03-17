function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Sl8j1joe-/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('Animal1') 
    img1 = document.getElementById('Animal2')
    img2 = document.getElementById('Animal3')
    img3 = document.getElementById('Animal4')
    img4 = document.getElementById('Animal5')

    if (results[0].label == "Talking") {
      img.src = 'th.jfif';
      img1.src = '';
      img2.src = '';
      img3.src = '';
      img4.src = '';
    } else if (results[0].label == "Barking") {
      img.src = '';
      img1.src = 'dog.jfif';
      img2.src = '';
      img3.src = '';
      img4.src = '';
    } else if (results[0].label == "Meowing") {
      img.src = '';
      img1.src = '';
      img2.src = 'cat.jfif';
      img3.src = '';
      img4.src = '';
    }else{
      img.src = '';
      img1.src = '';
      img2.src = '';
      img3.src = 'cow.jfif';
      img4.src = '';
    }else{
        img.src = '';
        img1.src = '';
        img2.src = '';
        img3.src = '';
        img4.src = 'lion.jfif';
      }
  }
}