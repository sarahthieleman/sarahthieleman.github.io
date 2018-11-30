class KeyBoardListener {

    private leftPressed: boolean;
    private upPressed: boolean;
    private rightPressed: boolean;
    private downPressed: boolean;

    /**
    * Create a keyboardListener
    */
    constructor() {
        this.leftPressed = false;
        this.upPressed = false;
        this.rightPressed = false;
        this.downPressed = false;
        window.addEventListener("keydown", this.keyDownHandler);
        window.addEventListener("keyup", this.keyUpHandler);
    }

    private keyDownHandler = (event: KeyboardEvent) => {
        if (event.keyCode == 37) {
            this.leftPressed = true;
        }
        if (event.keyCode == 38) {
            this.upPressed = true;
        }
        if (event.keyCode == 39) {
            this.rightPressed = true;
        }
        if (event.keyCode == 40) {
            this.downPressed = true;
        }
    }

    private keyUpHandler = (event: KeyboardEvent) => {
        if (event.keyCode == 37) {
            this.leftPressed = false;
        }
        if (event.keyCode == 38) {
            this.upPressed = false;
        }
        if (event.keyCode == 39) {
            this.rightPressed = false;
        }
        if (event.keyCode == 40) {
            this.downPressed = false;
        }
    }

    public getLeftPressed(): boolean
    {
        return this.leftPressed;
    }

    public getUpPressed(): boolean
    {
        return this.upPressed;
    }

    public getRightPressed(): boolean
    {
        return this.rightPressed;
    }

    public getdownPressed(): boolean
    {
        return this.downPressed;
    }
}
