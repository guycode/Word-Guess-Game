<script>
    var words = [
        'sharks',
        'kings',
        'oilers',
        'canucks',
        'golden knights',
        'maple leafs',
        'red wings',
        'avalanche'
    ];
    
    var word = words[Math.floor(Math.random()* words.length)];

    var answers = [];
    for (var i = 0 ; i < word.length; i++) {
        answers[i] = '_';
    }

    var lettersLeft = word.length

    while (lettersLeft > 0) {
        alert(answers.join(" "));

        var guess = prompt('Take A Guess!');
        if (guess === null) {
            break;
        }
        elseif (guess.length !== 1)  {
            alert("Please enter a single letter");
        }
        else {
            for (var j = o; j < word.length; j++) {
                if (word[j] === guess) {
                    answers[j] = guess;
                    lettersLeft--;
                }
            }
        }
    }
    
    alert(answers.join(" "));
    alert("Nice! the word was " + word);
</script>