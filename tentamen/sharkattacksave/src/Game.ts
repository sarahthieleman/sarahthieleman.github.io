class Game {

    private readonly _canvas: Canvas;
    private readonly _boat: Boat;
    private _shark: Shark;
    private score: number;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(canvasElement);
        // images aanmaken, blijven huge en krijg ze niet kleiner (edit: gelukt!, in canvas scherm minder ingezoomd)
        this._boat = new Boat(canvasElement, './assets/images/boat.png', 100, 100, 32, 32);
        this._shark = new Shark(canvasElement, './assets/images/shark.png', 10, 10, 32, 36);
        // score aanmaken, moet dmv for loop incrementen (++)
        this.score = 0;
        console.log('test test test');
    }

    public draw = () => {
        // score naar het canvas schrijven, later score koppelen met collision (die moet ik nog aanmaken)
        this._canvas.writeTextToCanvas(`Score: ${this.score}`, 15, 50,20, "white", "center");
        this._canvas.clear();
        this._boat.move();
        this._boat.draw();
        this._shark.draw();

    }
}

window.addEventListener('load', init);

// refresh functie, zodat er niet 1 lange streep op het scherm komt als je loopt (: (60fps)
function init(): void {
    const SharkAttack = new Game();
    window.setInterval(SharkAttack.draw, 1000 / 60)
}
