///<reference path="GameItem.ts" />

class Boat extends GameItem {

    //verwijst naar class KeyBoardListener
    private _keyboardListener: KeyBoardListener;

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number
    ) {
        super(canvas, imageSource, xCoor, yCoor, width, height);

        this._keyboardListener = new KeyBoardListener();
    }


    // move functie, om de boat te bewegen
    public move() {
        if (this._keyboardListener.getUpPressed()) {
            this._yPos -= 2;
        }
        if (this._keyboardListener.getRightPressed()) {
            this._xPos += 2;
        }
        if (this._keyboardListener.getdownPressed()) {
            this._yPos += 2;
        }
    }
}
