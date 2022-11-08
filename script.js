var title = document.getElementById("title");
var button = document.getElementById("button");
var songTitle = document.getElementById("outputText");
var input = document.getElementById("moodList");

var romanticSongs = ["I Will Always Love You by Whitney Houston", "All of Me by John Legend", "Ho Hey by The Lumineers", "Drops of Jupiter by Train", "Beyond by Leon Bridges", "A Thousand Years by Christina Perri", "Just the Way You Are by Bruno Mars", "Us Against the World by Coldplay", "Come to Me by Goo Goo Dolls", "Can't Help Falling in Love by Elvis Presley", "",]

var happySongs = ["Let’s Go Crazy by Prince","I Got You (I Feel Good) by James Brown & The Famous Flames", "Don’t Stop Me Now by Queen", "Walking on Sunshine by Katrina & The Waves", "Dancing Queen by Abba", "Uptown Girl Billie Joel", "Girls Just Wanna Have Fun Cyndi Lauper"]

var angrySongs = ["Immigrant Song by Led Zeppelin", "Master of Puppets by Metallica", "Back in Black by AC/DC", "	Iron Man by Black Sabbath", "Man in a Box by Alice in Chains", "Wait and Bleed by Slipknot"]

var sadSongs = ["Hurt by Johnny Cash", "Only Love Can Break Your Heart by Neil Young", "Teardrop by Massive Attack", "No Distance Left to Run by Blur", "Lazarus by David Bowie",]


button.addEventListener("click", generate);
button.addEventListener("click", restyle);


function generate() {
  if (input == "Romantic") {
    songTitle.innerHTML = romanticSongs[Math.floor(Math.random() * romanticSongs.length)];
  }

  else if (input == "Happy") {
    songTitle.innerHTML = happySongs[Math.floor(Math.random() * happySongs.length)];
  }

  else if (input == "Angry") {
    songTitle.innerHTML = angrySongs[Math.floor(Math.random() * angrySongs.length)];
  }

  else if (input == "Sad") {
    songTitle.innerHTML = sadSongs[Math.floor(Math.random() * sadSongs.length)];
  }

  else {
    songTitle.innerHTML = "Type the mood exactly as is with upper and lowercase"
  }
}

function restyle() {
  var fontNum = Math.floor(Math.random() * 6);
  var fontStr = fontNum.toString() + "vw";
  songTitle.style.fontSize = fontStr;

  var angleNum = Math.floor(Math.random() * 20);
  var angleStr = "rotate(" + angleNum.toString() + "deg)";
  songTitle.style.transform = angleStr;

  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  var colorStr = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  songTitle.style.color = colorStr;

  var rightNum = Math.random() * 25;
  var downNum = Math.random() * 25;
  var blurNum = Math.random() * 25;
  var shadowStr = rightNum + "px " + downNum + "px " + blurNum + "px " + colorStr;
  songTitle.style.textShadow = shadowStr;
}
