let rnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'select a number';
  }

  //   greater then 20
  else if (guess > 20) {
    document.querySelector('.message').textContent = 'select number 1 to 20';
  }
  //   tooo high
  else if (guess > rnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }

  //   to low
  else if (guess < rnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }

  //   correct
  else if (guess === rnumber) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('.head-msg').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#3CB043';
    document.querySelector('.number').textContent = rnumber;
    document.querySelector('.number').style.width = '30rem';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  score = 20;
  rnumber = Math.trunc(Math.random() * 20) + 1;
});
