"use strict"

window.onload = init;

var mapCanvas;
var mapCtx;

var tilSY;
var tilSX;
var tilSO;

var tilY;
var tilX;
var tilO;

var parFilK;

function init()
{
	tilSY = 4.0;
	tilSX = tilSY * 0.875;
	tilSO = tilSY * 0.5;
	
	tilY = tilSY + tilSO + 2;	//8
	tilX = tilSX + tilSX + 2;	//9
	tilO = tilSX + 1;			//4.5
	
	parFilK = 1.0;
	
	mapCanvas = document.querySelector('#mapCanvas');
	mapCtx = mapCanvas.getContext('2d');
	
	mapCtx.canvas.width  = window.innerWidth;
	mapCtx.canvas.height = window.innerHeight;
	
	tilY *= 4.0;
	tilX *= 4.0;
	tilO *= 4.0;/**/
	
	tilY += 4.0;
	
	console.log(tilX, tilY, "giggles_A");
	
	drawHex(50.5, 50);
	drawHex(86.5, 50);
	drawHex(122.5, 50);
	
	drawHex(68.5, 77);
	drawHex(104.5, 77);
	
	drawHex(50.5, 104);
	drawHex(86.5, 104);
	drawHex(122.5, 104);
	
	//drawHex(50, 120);
	//drawHex(50, 120);
}

function fillHex(x, y)
{
	mapCtx.fillStyle = "#00ffff";
	
	mapCtx.fillRect(
		x, y + 2,
		19, 6
	);
	
	mapCtx.fillRect(
		x + 2, y + 1,
		6, 8
	);
	mapCtx.fillRect(
		x + 11, y + 1,
		7, 8
	);
	
	mapCtx.fillRect(
		x + 4, y,
		2, 10
	);
	mapCtx.fillRect(
		x + 13, y,
		3, 10
	);
}

function drawHex(x, y)
{
	//mapCtx.lineWidth = 2;
	mapCtx.beginPath();
	mapCtx.moveTo(
		x, 
		y - (tilY / 2)// - 0.5
	);
	mapCtx.lineTo(
		x + (tilX / 2), 
		y - (tilY / 4)// - 0.5
	);
	mapCtx.lineTo(
		x + (tilX / 2), 
		y + (tilY / 4)// + 0.5
	);
	mapCtx.lineTo(
		x, 
		y + (tilY / 2)// + 0.5
	);
	mapCtx.lineTo(
		x - (tilX / 2), 
		y + (tilY / 4)// + 0.5
	);
	mapCtx.lineTo(
		x - (tilX / 2), 
		y - (tilY / 4)// - 0.5
	);
	mapCtx.lineTo(
		x, 
		y - (tilY / 2)// - 0.5
	);/*
	mapCtx.lineTo(
		x + (tilX / 2), 
		y - (tilY / 4)
	);*/
	//mapCtx.fill();
	mapCtx.stroke();
}