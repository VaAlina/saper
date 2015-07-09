$(document).ready(function() {
    var correctCounter = 0;
    var danger = [];
    var dangerItem = [];

    for (var j = 0; j < 4; j++) {
        danger.push(Math.round(1 + Math.random() * 36));
        dangerItem.push("#" + danger[j]);

        $(dangerItem[j]).addClass("bomb");
        $("#" + (danger[j] + 1) + " ," + "#" + (danger[j] - 1) + " ," + "#" + (danger[j] + 6) + " ," + "#" + (danger[j] - 6)).addClass("nextToBomb");
        $("#" + (danger[j] + 5) + " ," + "#" + (danger[j] - 5) + " ," + "#" + (danger[j] + 7) + " ," + "#" + (danger[j] - 7)).addClass("nextToBomb");
    }

    $(".bomb").click(function() {
        $(".bomb").css("background-color", "#C6C650");
        document.getElementById("result").innerHTML = "Try again!";
        $("td").not(".bomb").css("background-color", "#254381");
    });
    $("td").not(".bomb").click(function() {
        correctCounter++;
        $(this).css("background-color", "#254381");
        if (correctCounter === 32) {
            alert("You win!");
        }
        document.getElementById("result").innerHTML = "Go on!";
    });
});
