const one = 1;
function chooseLineType() {
    var dx, dy;
    if (self.y1 === self.y2) {
        reportShortcut(true);
        self.distance = Math.abs(self.x1 - self.x2);
    } else {
        if (self.x1 === self.x2) {
            reportShortcut(false);
            self.distance = Math.abs(self.y1 - self.y2);
        } else {
            dx = self.x2 - self.x1;
            dy = self.y2 - self.y1;
            self.distance = Math.sqrt(dx * dx + dy * dy);
        }
    }
}
function ctr(x1, y1, x2, y2) {
}
function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function printResult() {
    await pause(1000);
    if (self.distance > 100) {
        console.log('The distance is long', self.x1, self.x2);
    } else {
        console.log('The distance is short', self.y1, self.y2);
    }
}
function reportShortcut(horizontal) {
    if (horizontal) {
        console.log('Horizontal shortcut');
    } else {
        console.log('Vertical shortcut');
    }
}