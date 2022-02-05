setInterval(Game,16);
window.addEventListener('keydown',this.checkDown,false);
window.addEventListener('keyup',this.checkUp,false);
let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

let ballR = window.innerHeight * 0.03/2;
let BALLSPEED = 0.5; // velocidade bola
let randY = BALLSPEED*Math.cos(Random(0,6.283));
let randX = BALLSPEED*-Math.sin(Random(0,1.571));
let ballX = window.innerWidth/2-(ballR); // bola x
let ballY = window.innerHeight/2-(ballR);// bola y
let playerSpeed = 0.5; // jogador velocidade 
let player1X = window.innerWidth * 0.1;
let player1Y = window.innerHeight/2;
let player2X = window.innerWidth * 0.9;
let player2Y = window.innerHeight/2;
let playerH = window.innerHeight * 0.2;
let playerW = window.innerWidth * 0.015;
let KU1 = 0;
let KD1 = 0;
let KU2 = 0;
let KD2 = 0;

let Score1 = 0;
let Score2 = 0;

while(randY < -10 && randY > 10 && randY > 8 && randY < -8) {
randY = Random(-8,8)*2;
}
while(randX > -10 && randX < 10) {
randX = Random(-8,8)*1.5;
}


function Reset() {
c.clearRect(0, 0, canvas.width, canvas.height);
randY = BALLSPEED*Math.cos(Random(0,6.283));
randX = BALLSPEED*-Math.sin(Random(0,1.571));
ballX = window.innerWidth/2-(ballR);
ballY = window.innerHeight/2-(ballR);
player1Y = window.innerHeight/2;
player2Y = window.innerHeight/2;
playerSpeed = 8.5;
while(randY < -10 && randY > 10 && randY > 8 && randY < -8) {
randY = Random(-8,8)*2;
player1Y = window.innerHeight/2;
}
while(randX > -10 && randX < 10) {
randX = Random(-8,8)*1.5;
}
c.fillRect(player1X, player1Y-playerH/2, playerW, playerH);
c.fillRect(player2X, player2Y-playerH/2, playerW, playerH);
Ball();

}

function checkDown(e) {
	if(e.keyCode == 87) {
		KU1 = 1;
	} else if(e.keyCode == 83) {
		KD1 = 1;
	}
	if(e.keyCode == 73) {
		KU2 = 1;
	} else if(e.keyCode == 75) {
		KD2 = 1;
	}
}
function checkUp(e) {
	if(e.keyCode == 87) {
		KU1 = 0;
	} else if(e.keyCode == 83) {
		KD1 = 0;
	}
	if(e.keyCode == 73) {
		KU2 = 0;
	} else if(e.keyCode == 75) {
		KD2 = 0;
	}
}

function Ball() {
	c.fillStyle="#FFFFFF";
	c.fillRect(ballX, ballY, ballR * 2, ballR * 2);

}
function GetCor() {
	var cor = document.getElementById('cor').value;
	c.fillStyle = cor;
	return cor;
}
function Game() {
	Score = Score1 + " x " + Score2;
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	c.fillStyle = document.getElementById('colores').value;
	
	
	c.font="100px font";
	c.fillText(Score,window.innerWidth/2-90, window.innerHeight* 0.1);
	
	c.fillRect(player1X, player1Y-playerH/2, playerW, playerH);
	c.fillRect(player2X, player2Y-playerH/2, playerW, playerH);
	Ball();

	ballX += randX;
	ballY += randY;
	
	if(KU1 == 1 && player1Y-playerH/2 > 0) {
		player1Y-=playerSpeed*1.5;
	} else if(KD1 == 1 && player1Y+playerH/2 < window.innerHeight) {
		player1Y+=playerSpeed*1.5;
	}
	if(KU2 == 1 && player2Y-playerH/2 > 0) {
		player2Y-=playerSpeed*1.5;
	} else if(KD2 == 1 && player2Y+playerH/2 < window.innerHeight) {
		player2Y+=playerSpeed*1.5;
	}
	
	if(ballX > window.innerWidth) {
		Reset();
		Score1+=1;
	} else if(ballX*2 < 0) {
		Reset();
		Score2+=1;
	}
	
	if(ballY + ballR*2 > window.innerHeight || ballY*2 - ballR < 0) {
		randY = -randY;
	}
	
	if (ballX < player1X + playerW  && ballX + ballR*2  > player1X && ballY < (player1Y-playerH/2) + playerH && ballY + ballR*2 > (player1Y-playerH/2)) {
		randX = -randX;
		randX = randX * 1.08 + Random(0,1);
		randY = randY * 1.08 + Random(0,1);
		playerSpeed += Random(0.2,0.5);
	}
	if (ballX < player2X + playerW  && ballX + ballR*2  > player2X && ballY < (player2Y-playerH/2) + playerH && ballY + ballR*2 > (player2Y-playerH/2)) {
		randX = -randX;
		randX = randX * 1.08 + Random(0,1);
		randY = randY * 1.08 + Random(0,1);
		playerSpeed += Random(0.8,1.2);
	}
	
}

function Random(min, max) {
    return (Math.random() * (max - min)) + min;
}


