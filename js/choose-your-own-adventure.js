var story = {
    "start": "You open your eyes to an alarm. Get up or snooze button?",
    "snooze": "You open your eyes to an alarm. Get up or snooze?",
    "up": "As you wipe your eyes you can smell the coffee brewing. Go downstairs or skip breakfast?",
    "downstairs": "Pancakes are waiting! Coffee black or with cream?",
    "black": "Enjoy",
    "cream": "Yuck",
    "skipBreakfast": "Getting dressed for the day your cell phone rings. Answer the phone or ignore it?",
    "answerPhone": "It's your mom yelling GET TO BREAKFAST!",
    "ignoreIt": "Your cell phone rings.",

};

var choice = prompt( story.start );
var output = document.querySelector( "#output" );


if( choice === "snooze" ){
    output.textContent = story.snooze;
}
else if( choice === "up" ){
    choice = prompt( story.up );

    if( choice === "up" ){
        output.textContent = story.up;
    }
    else{
        output.textContent = "That's not an option yo!";

  
