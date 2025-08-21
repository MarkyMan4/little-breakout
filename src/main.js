import { engineInit, EngineObject, vec2, randColor, cameraPos, canvasFixedSize, drawRect, Color, mousePos, clamp, setCameraPos, setCanvasFixedSize } from "littlejsengine";

const levelSize = vec2(38, 20);

class Paddle extends EngineObject {
    constructor() {
        super(vec2(0, 1), vec2(6, 0.5));
    }

    update() {
        this.pos.x = mousePos.x;
        this.pos.x = clamp(this.pos.x, this.size.x / 2, levelSize.x - this.size.x / 2);
    }
}

///////////////////////////////////////////////////////////////////////////////
function gameInit() {
    setCanvasFixedSize(vec2(1280, 720));

    const brickWidth = 2;
    const brickHeight = 1;

    for(let x = 2; x <= levelSize.x - 2; x += brickWidth) {
        for(let y = 12; y <= levelSize.y - 2; y += brickHeight) {
            const brick = new EngineObject(vec2(x, y), vec2(brickWidth, brickHeight));
            brick.color = randColor();
        }
    }

    setCameraPos(levelSize.scale(0.5));

    new Paddle();
}

///////////////////////////////////////////////////////////////////////////////
function gameUpdate()
{
    // called every frame at 60 frames per second
    // handle input and update the game state
    drawRect(cameraPos, vec2(100, 100), new Color(0.5, 0.5, 0.5));
    drawRect(cameraPos, levelSize, new Color(0.1, 0.1, 0.1));
}

///////////////////////////////////////////////////////////////////////////////
function gameUpdatePost()
{
    // called after physics and objects are updated
    // setup camera and prepare for render
}

///////////////////////////////////////////////////////////////////////////////
function gameRender()
{
    // called before objects are rendered
    // draw any background effects that appear behind objects
}

///////////////////////////////////////////////////////////////////////////////
function gameRenderPost()
{
    // called after objects are rendered
    // draw effects or hud that appear above all objects
}

///////////////////////////////////////////////////////////////////////////////
// Startup LittleJS Engine
engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost);
