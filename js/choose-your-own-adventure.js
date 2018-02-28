var story = {
    "start": "You open your eyes to an alarm. Get up or snooze button?",
    "snoozeButton": "You open your eyes to an alarm. Get up or snooze?",
    "getUp": "As you wipe your eyes you can smell the coffee brewing. Go downstairs or skip breakfast?",
    "goDownstairs": "Pancakes are waiting! Coffee black or with cream?",
    "skipBreakfast": "Getting dressed for the day your cell phone rings. Answer the phone or ignore it?",
    "answerPhone": "It's your mom yelling GET TO BREAKFAST!",
    "ignoreIt": "Your cell phone rings.",

};

var choice = prompt( story.start );

if( choice === "snoozeButton" ){
    choice = prompt( story.snoozeButton );
}
else if( choice === "getUp" ){
    choice = prompt( story.getUp );

    if( choice === "getUp" ){
        console.log( story.getUp );
    }
    else{
        console.log( "That's not an option yo!" );
    }
}
else{
    console.log( "That's not an option yo!" );
}
