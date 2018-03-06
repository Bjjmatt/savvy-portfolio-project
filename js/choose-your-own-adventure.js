var story = {
    "start": "Ready for an adventure?",
    "option": "yes or no?",
    "dream": "The horses ride apart to face off at opposite ends of the arena. Upon their backs sit the kindoms 2 deadliest knights both with jousts drawn set dead on the opposite knights chest. ~Yeah, this album is dedicated..~ The crowd is on the edge of their hay bales anticipationg the outcome of the 4th annual Kingdom Cup. ~You know what I'm sayin'? It's all good, baby baby~ As the flag is drawn to signal the knights to beggin their charge to victory or death.. ~It was all a dream, I used to read Word Up! magazine. Salt-n-Pepa and Heavy D up in the limousine. Hangin' pictures on my wall. Every Saturday Rap Attack, Mr. Magic, Marley Marl I let my tape rock 'til my tape popped.~ Oh boy that sounds like your alarm clock holding up the Kindom Cup..",

    "dreamChoice": "Would you like to return to the joust by hitting the snooze butoon (snooze)? Or get up and start your day (day)?",

    "snooze": "You pull the covers over your head for ten more minutes of jousting.",

    "day": "You turn off your alarm and roll out of bed. As you rub your eyes you smell coffee brewing downstairs.. Head to the kitchen (head to kitchen)? Or skip breakfast (skip breakfast)?",

    "head to kitchen": "Pancakes are waiting.. Yum.. ?",

    "skip breakfast": "You jump in the shower before heading in for a productive day at work.",

};

var choice = prompt( story.start );
var $output = $( "#output" );

if( choice === "yes" ){
    prompt( story.dream );
}
else{
    output.textContent = "Welcome to our website!";
}
