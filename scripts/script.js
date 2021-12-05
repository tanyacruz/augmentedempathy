$(document).ready(function(){
    var theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
    var ctnt = " Augmented Empathy"; // Your text goes here
    var speed = 25; // ms per frame
    var increment = 3; // frames per step. Must be >2
    
        
    var clen = ctnt.length;       
    var si = 0;
    var stri = 0;
    var block = "";
    var fixed = "";

    var intervalID = window.setInterval(myCallback, 500);

    function myCallback() {
        // Your code here
       }
    //Call self x times, whole function wrapped in setTimeout
    (function rustle (i) {          
    setTimeout(function () {
      if (--i){rustle(i);}
      nextFrame(i);
      si = si + 1;        
    }, speed);
    })(clen*increment+1); 
    function nextFrame(pos){
      for (var i=0; i<clen-stri; i++) {
        //Random number
        var num = Math.floor(theLetters.length * Math.random());
        //Get random letter
        var letter = theLetters.charAt(num);
        block = block + letter;
      }
      if (si == (increment-1)){
        stri++;
      }
      if (si == increment){
      // Add a letter; 
      // every speed*10 ms
      fixed = fixed +  ctnt.charAt(stri - 1);
      si = 0;
      }
      $("#title").html(fixed + block);
      block = "";
    }
});


$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
    console.log('works')
	});
});

$("#mobilemenu").click(function() {
  $('.toggle').toggleClass('toggle-hidden');
  $('.mobilemenu').toggleClass('mobilemenu-visible');
  console.log('this tooworks')
});


$(document).ready(function(){
  var theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
  var ctnt = " Augmented Empathy"; // Your text goes here
  var speed = 25; // ms per frame
  var increment = 3; // frames per step. Must be >2
  
      
  var clen = ctnt.length;       
  var si = 0;
  var stri = 0;
  var block = "";
  var fixed = "";

  var intervalID = window.setInterval(myCallback, 500);

  function myCallback() {
      // Your code here
     }
  //Call self x times, whole function wrapped in setTimeout
  (function rustle (i) {          
  setTimeout(function () {
    if (--i){rustle(i);}
    nextFrame(i);
    si = si + 1;        
  }, speed);
  })(clen*increment+1); 
  function nextFrame(pos){
    for (var i=0; i<clen-stri; i++) {
      //Random number
      var num = Math.floor(theLetters.length * Math.random());
      //Get random letter
      var letter = theLetters.charAt(num);
      block = block + letter;
    }
    if (si == (increment-1)){
      stri++;
    }
    if (si == increment){
    // Add a letter; 
    // every speed*10 ms
    fixed = fixed +  ctnt.charAt(stri - 1);
    si = 0;
    }
    $("#title-small").html(fixed + block);
    block = "";
  }
});


$(document).ready(function(){
$('#mobilemenu').click(function(){
  $(this).toggleClass('open');
  // $('.toggle').toggleClass('toggle-hidden');
  $('.toggle-content').toggleClass('toggle-content-hidden');
  // $('.mobilemenu').toggleClass('mobilemenu-visible');
});
});

// $("#mobilemenu").click(function() {
// // $('.toggle').toggleClass('toggle-hidden');
// // $('.mobilemenu').toggleClass('mobilemenu-visible');
// });


$(document).ready(function(){
  $("#week1").click(function() {
    $('.filter1').toggleClass('filter1-desktop');
    $('.filter2').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
    $('.filter-questions1').toggleClass('filter-questions');
    $('.filter-button').toggleClass('filter-button-inactive');
  });
})

$(document).ready(function(){
  $("#responses1").click(function() {
    $('.questionnaire').toggleClass('questionnaire-inactive');
    $('.responses-inactive').toggleClass('responses');
    $('.text-responses').toggleClass('text-responses-inactive');
    $('.text-questionnaire-inactive').toggleClass('text-questionnaire');
  });
})

$(document).ready(function(){
  $("#close-q1").click(function() {
    $('.filter-questions1').toggleClass('filter-questions');
    $('.filter-button').toggleClass('filter-button-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
    $('.filter1').toggleClass('filter1-desktop');
    console.log('close')
  });
})

$(document).ready(function(){
  $("#qr1").click(function() {
    $('.filter2').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
    $('.filter-qr1').toggleClass('filter-qr');
    $('.filter-button').toggleClass('filter-button-inactive');
  });
})

$(document).ready(function(){
  $("#close-qr1").click(function() {
    $('.filter-qr1').toggleClass('filter-qr');
    $('.filter-button').toggleClass('filter-button-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
  });
})






$(document).ready(function(){
  $("#week2").click(function() {
    $('.filter1').toggleClass('week-inactive');
    $('.filter2').toggleClass('filter1-desktop');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
    $('.filter-questions2').toggleClass('filter-questions');
    $('.filter-button').toggleClass('filter-button-inactive');
  });
})

$(document).ready(function(){
  $("#responses2").click(function() {
    $('.questionnaire2').toggleClass('questionnaire-inactive2');
    $('.responses-inactive2').toggleClass('responses2');
    $('.text-responses2').toggleClass('text-responses-inactive2');
    $('.text-questionnaire-inactive2').toggleClass('text-questionnaire2');
  });
})

$(document).ready(function(){
  $("#close-q2").click(function() {
    $('.filter-questions2').toggleClass('filter-questions');
    $('.filter-button').toggleClass('filter-button-inactive');
    $('.filter1').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
    $('.filter2').toggleClass('filter1-desktop');
    console.log('close')
  });
})

$(document).ready(function(){
  $("#qr2").click(function() {
    $('.filter1').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
    $('.filter-qr2').toggleClass('filter-qr');
    $('.filter-button').toggleClass('filter-button-inactive');
  });
})

$(document).ready(function(){
  $("#close-qr2").click(function() {
    $('.filter-qr2').toggleClass('filter-qr');
    $('.filter-button').toggleClass('filter-button-inactive');
    $('.filter1').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
  });
})



// 
$(document).ready(function(){
  $("#week3").click(function() {
    $('.filter1').toggleClass('week-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter3').toggleClass('filter1-desktop');
    $('.filter4').toggleClass('week-inactive');
    $('.filter-questions3').toggleClass('filter-questions');
    $('.filter-button').toggleClass('filter-button-inactive');
  });
})

$(document).ready(function(){
  $("#responses3").click(function() {
    $('.questionnaire3').toggleClass('questionnaire-inactive3');
    $('.responses-inactive3').toggleClass('responses3');
    $('.text-responses3').toggleClass('text-responses-inactive3');
    $('.text-questionnaire-inactive3').toggleClass('text-questionnaire3');
  });
})

$(document).ready(function(){
  $("#close-q3").click(function() {
    $('.filter-questions3').toggleClass('filter-questions');
    $('.filter-button').toggleClass('filter-button-inactive');
    $('.filter1').toggleClass('week-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
    $('.filter3').toggleClass('filter1-desktop');
    console.log('close')
  });
})

$(document).ready(function(){
  $("#qr3").click(function() {
    $('.filter1').toggleClass('week-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
    $('.filter-qr3').toggleClass('filter-qr');
    $('.filter-button').toggleClass('filter-button-inactive');
  });
})

$(document).ready(function(){
  $("#close-qr3").click(function() {
    $('.filter-qr3').toggleClass('filter-qr');
    $('.filter-button').toggleClass('filter-button-inactive');
    $('.filter1').toggleClass('week-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter4').toggleClass('week-inactive');
  });
})




// 
$(document).ready(function(){
  $("#week4").click(function() {
    $('.filter1').toggleClass('week-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('filter1-desktop');
    $('.filter-questions4').toggleClass('filter-questions');
    $('.filter-button').toggleClass('filter-button-inactive');
  });
})

$(document).ready(function(){
  $("#responses4").click(function() {
    $('.questionnaire4').toggleClass('questionnaire-inactive4');
    $('.responses-inactive4').toggleClass('responses4');
    $('.text-responses4').toggleClass('text-responses-inactive4');
    $('.text-questionnaire-inactive4').toggleClass('text-questionnaire4');
  });
})

$(document).ready(function(){
  $("#close-q4").click(function() {
    $('.filter-questions4').toggleClass('filter-questions');
    $('.filter-button').toggleClass('filter-button-inactive');
    $('.filter1').toggleClass('week-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter4').toggleClass('filter1-desktop');
    console.log('close')
  });
})

$(document).ready(function(){
  $("#qr4").click(function() {
    $('.filter1').toggleClass('week-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
    $('.filter-qr4').toggleClass('filter-qr');
    $('.filter-button').toggleClass('filter-button-inactive');
  });
})

$(document).ready(function(){
  $("#close-qr4").click(function() {
    $('.filter-qr4').toggleClass('filter-qr');
    $('.filter-button').toggleClass('filter-button-inactive');
    $('.filter1').toggleClass('week-inactive');
    $('.filter2').toggleClass('week-inactive');
    $('.filter3').toggleClass('week-inactive');
  });
})