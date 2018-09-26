$('.feed').on('click', ()=>{
    let $hunger = $('.Hunger').val();
    $hunger++;
    // $hunger = Number($hunger);
    $('.Hunger').val($hunger)
  //  console.log($hunger);
});

$('.lightOff').on('click', () =>{
    let $sleepines = $('.Sleepiness').val();
    $sleepines += 1;
    $('.Sleepiness').val($sleepines);
  //  console.log($sleepines);
})

$('.play').on('click', () =>{
    let $playTime = $('.Evilness').val();
    $playTime += 1;
    $('.Evilness').val($playTime);
    // console.log($playTime);
})
