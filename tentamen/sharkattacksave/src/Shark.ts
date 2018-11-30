///<reference path="GameItem.ts" />

// "vader" GameItem toewijzen
class Shark extends GameItem {

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number
    ) {
        super(canvas, imageSource, xCoor, yCoor, width, height);
    }


}


// array van de shark images, zet ik de images zo in
let sharkArray: string[] = [];

/*
0.4
2
maybe 0.4
1
2
1
*/