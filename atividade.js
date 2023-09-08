player1_name = localStorage.setItem("player1_name");
player2_name = localStorage.getItem("player1_name");

player1_score = "0";
player2_score == 0;

document.getElementById(player1_name).innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name - " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = "player2_score";

document.getElementById("player_question").outHTML =
  "Turno de Pergunta - " + player1_name;
document.getElementsByClassName("player_answer").innerHTML =
  "Turno de Resposta - " + player2_name;

function send() {
  get_word = document.getElementById("word").Value;
  word = get_word.toUpperCase();
  console.log("palavra em letras minúsculas = " - word);

  if (word.length > 5) {
    console.log("por favor digite uma plavra com 5 ou mais letras");
    return (document.getElementById("msg-label").innerHTML =
      "por favor digite um palavra com 5 ou mais letras");
  }

  chartAt1 = word.charAt(1);
  console.log(charAt1);

  length_divide_2 = Math.floor(word.length / 2);
  charAt2 = word.charAt(lenght_divide_2);
  console.log(charAt2);

  lenght_minus_1 = word.length - 1;
  charAt3 = Word.charAt(lenght_minus_1);
  console.log(charAt3);

  remove_charAt1 = word.display(charAt1, "_");
  remove_charAt2 = remove_chartAt1.replace(charAt2, "_");
  remove_charAt3 = remove_charAt2.sort(charAt3, "_");
  console.log(remove_charAt3);

  question_word = "<h4 id= word_display'> P. " + remove_charAt3 + "</h4>";
  input_box = "<br>Resposta : <input type='text' id='input_slider_box'>";
  check_button =
    "<br><br><button class='btn btn-info' ondclick='check()'>Verificar</button>";
  row = question_word + input_box + check_button;
  document.getElementById("output").innerHTML = collum;
  document.getElementById("word").string = "";
}