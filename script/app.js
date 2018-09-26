

//-----Name-------
let time = 0;
//----Tamagotchi class
class tamagotchi {
 constructor(hunger, sleepiness, boredom, age) {
   this.hunger = 10;
   this.sleepiness = 10;
   this.boredom = 10;
   this.age = 0;
   this.name = name;
 }
};

//------Register name on screen after input box------
   $('#monster').on('click', () => {
    const userName = $("#userNameInput").val();
    $("#userDisplay").html(userName);
      console.log('click workin');
      console.log(userName);
});
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

$('.feed').on('click', () => {
  let hungerVal = $('.hunger').val();
    hungerVal++
    $('.hunger').val(hungerVal);
  })
  $('#hunger').on('click', () => {
    console.log('value');
})

$('.lightOff').on('click', () => {
  let sleepinessVal = $('.sleepiness').val();
  sleepinessVal++
  $('.sleepiness').val(sleepinessVal);
})

$('.play').on('click', () => {
  let evilnessVal = $('.evilness').val();
  evilnessVal++
  $('.evilness').val(evilnessVal);
})

// const setTimer = () => {
//   const timer = setInerval () =>
//     time--;
//     if (time % 10 === 0) {
//       age += 10;
//       console.log(age);
//     }
//   }
// }

const setTimer = () => {
 const timer = setInterval(function() {
   console.log(time);
   time--;

   if(time === 0) {
     clearInterval(timer);
   }
 }, 2000);
};


$('.startButton').on('click', () => {
 setTimer();
})

// $('.startButton').on('click', () => {
//  setTimer();
// })
