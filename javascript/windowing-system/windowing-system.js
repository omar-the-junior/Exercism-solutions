// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width, height) {
  width = width < 1 ? 1 : width
  height = height < 1 ? 1 : height
  this.width = width || 80
  this.height = height || 60
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
}

export function Position(x, y) {
  if (x < 0) x = 0
  if (y < 0) y = 0
  this.x = x || 0
  this.y = y || 0
}

Position.prototype.move = function (newX, newY) {
  this.x = newX
  this.y = newY
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(newSize) {
    let maxResizeHeight = this.screenSize.height - this.position.y
    let maxResizeWidth = this.screenSize.width - this.position.x

    if ((newSize.height > maxResizeHeight) && (newSize.width > maxResizeWidth)) {
      this.size = new Size(maxResizeWidth, maxResizeHeight)
    } else if ((newSize.height > maxResizeHeight) || (newSize.width > maxResizeWidth)) {
      if (newSize.height > maxResizeHeight) this.size = new Size(maxResizeWidth, newSize.height)
      if (newSize.width > maxResizeWidth) this.size = new Size(newSize.width, maxResizeHeight)
    } else {
      this.size = newSize
    }
  }

  move(newPosition) {
    let maxYPosition = this.screenSize.height - this.size.height;
    let maxXPosition = this.screenSize.width - this.size.width;

    if ((newPosition.x > maxXPosition) && (newPosition.y > maxYPosition)) {
      this.position = new Position(maxXPosition, maxYPosition)
    } else if ((newPosition.x > maxXPosition) || (newPosition.y > maxYPosition)) {
      if (newPosition.x > maxXPosition) this.position = new Position(maxXPosition, newPosition.y)
      if (newPosition.y > maxYPosition) this.position = new Position(newPosition.x, maxYPosition)
    } else {
      this.position = newPosition
    }
  }

}

export function changeWindow(newProgramWindow) {
  newProgramWindow.resize(new Size(400, 300))
  newProgramWindow.move(new Position(100, 150))

  return newProgramWindow
}


