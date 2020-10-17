function birthYear() {
  var x = prompt('What is your birth year?');
  var daysOld = (2020 - x) * 366;
  var h1 = document.createElement('h1');
  var textA = document.createTextNode('you are ' + daysOld + ' days old!');
  h1.setAttribute('id', 'answer');
  h1.appendChild(textA);
  document.getElementById('flexbox-result').appendChild(h1);
}
function reset() {
  document.getElementById('answer').remove();
}
