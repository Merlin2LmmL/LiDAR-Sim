export class Obstacle {
    constructor(shape, color = "rgba(255, 0, 0, 0.5)", ...args) {
        this.shape = shape;
        this.color = color;
        switch (shape) {
            case "rectangle":
                this.x = args[0];
                this.y = args[1];
                this.width = args[2];
                this.height = args[3];
                break;
            case "circle":
                this.x = args[0];
                this.y = args[1];
                this.radius = args[2];
                break;
            case "polygon":
                this.points = args[0];
                break;
            case "line":
                this.x1 = args[0];
                this.y1 = args[1];
                this.x2 = args[2];
                this.y2 = args[3];
                break;
        }
    }

    // Draw the obstacle on the canvas
    draw(ctx, scrollX = 0, scrollY = 0) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "rgba(255, 0, 0, 1)";
        switch (this.shape) {
            case "rectangle":
                ctx.fillRect(this.x + scrollX, this.y + scrollY, this.width, this.height);
                ctx.strokeRect(this.x + scrollX, this.y + scrollY, this.width, this.height);
                break;
            case "circle":
                ctx.beginPath();
                ctx.arc(this.x + scrollX, this.y + scrollY, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                break;
            case "polygon":
                ctx.beginPath();
                ctx.moveTo(this.points[0].x + scrollX, this.points[0].y + scrollY);
                for (let i = 1; i < this.points.length; i++) {
                    ctx.lineTo(this.points[i].x + scrollX, this.points[i].y + scrollY);
                }
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                break;
            case "line":
                ctx.beginPath();
                ctx.moveTo(this.x1 + scrollX, this.y1 + scrollY);
                ctx.lineTo(this.x2 + scrollX, this.y2 + scrollY);
                ctx.stroke();
                break;
        }
        ctx.restore();
    }

}