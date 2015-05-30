/*for (var bottlesOfBeer = 99; bottlesOfBeer > 1; bottlesOfBeer = bottlesOfBeer - 1) {
	console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer, take one down, pass it around, " + (bottlesOfBeer - 1) + "bottles of beer on the wall!");
}*/

/*console.log("1 bottle of beer on the wall, 1 bottle of beer, take one down, pass it around, no more bottles of beer on the wall!");*/

/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Syntax: for ([initialization]; [condition]; [final-expression])
   statement*/

function singAboutBeer(bottlesOfBeer) {
  return bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer, take one down, pass it around, " + (bottlesOfBeer - 1) + "bottles of beer on the wall!"
}

for (var bottlesOfBeer = 99; bottlesOfBeer > 1; bottlesOfBeer --) {
  console.log (singAboutBeer(bottlesOfBeer));
}

console.log("1 bottle of beer on the wall, 1 bottle of beer, take one down, pass it around, no more bottles of beer on the wall!");