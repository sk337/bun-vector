class Vector2 {

  x: number;
  y: number;

  /**
   * Initilize a Vector2
   * @param x The x component of the vector
   * @param y The y component of the vector
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * multiply Vector by another vector or scale by number
   * @param scalar The scalar to multiply the vector by either number or vector2
   * @returns The vector product
   */
  multiply(scalar: Vector2 | number): Vector2 {
    if (typeof scalar == "number") {
      return new Vector2(this.x * scalar, this.y * scalar);
    } else {
      return new Vector2(this.x * scalar.x, this.y * scalar.y);
    }
  }

  /**
   * add two Vectors
   * @param vector The vector to add
   * @returns Sum of the 2 vectors
   */
  add(vector: Vector2): Vector2 {
    return new Vector2(this.x + vector.x, this.y + vector.y);
  }

  /**
   * Subtract two Vectors
   * @param vector The vector to subtract
   * @returns Difference of the 2 vectors
   */
  subtract(vector: Vector2): Vector2 {
    return new Vector2(this.x - vector.x, this.y - vector.y);
  }

  /**
   * divide vectors or by number
   * @param scalar The scalar to divide the vector by or vector2
   * @returns The vector product
   */
  divide(scalar: Vector2 | number): Vector2 {
    if (typeof scalar == "number") {
      return new Vector2(this.x / scalar, this.y / scalar);
    } else {
      return new Vector2(this.x / scalar.x, this.y / scalar.y);
    }
  }

  /**
   * Get the dot product of 2 vectors
   * @param vector The vector to claculate the dot product of
   * @returns The dot product of the 2 vectors
   */
  dot(vector: Vector2): number {
    return this.x * vector.x + this.y * vector.y;
  }

  /**
   * gets the length of the vector'
   * @returns The length of the vector
   */
  length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  /**
   * retuns the length of the vector squared
   * @returns the lengeth of the vector squared
   */
  lengthSquared(): number {
    return this.x ** 2 + this.y ** 2;
  }

  /**
   * gets the absolute value of the vector
   * @returns the aboslute value of the vector
   */
  abs(): Vector2 {
    return new Vector2(Math.abs(this.x), Math.abs(this.y));
  }

  /**
   * Clamps the vector to a min and max value
   * @param min The min vector2 to clamp to
   * @param max The max vector2 to clamp to
   * @returns the clamped vector
   */
  clamp(min: Vector2, max: Vector2): Vector2 {
    return new Vector2(
      Math.max(min.x, Math.min(max.x, this.x)),
      Math.max(min.y, Math.min(max.y, this.y))
    );
  }

  /**
   * Normalizes the vector
   * @returns The normalized vector
   */
  normalize(): Vector2 {
    return this.divide(this.length());
  }

  /**
   * gets the distance between 2 vectors
   * @param vector The vector to get the distance to
   * @returns The distance between the 2 vectors
   */
  distance(vector: Vector2): number {
    return this.subtract(vector).length();
  }

  /**
   * gets the distance between 2 vectors squared
   * @param vector The vector to get the distance squared to
   * @returns the vecotor distance squared
   */
  distanceSquared(vector: Vector2): number {
    return this.subtract(vector).lengthSquared();
  }

  /**
   * linearly interpolates between 2 vectors
   * @param vector The vector to interpolate to
   * @param t The amount to interpolate by
   * @returns The interpolated vector
   */
  lerp(vector: Vector2, t: number): Vector2 {
    return this.add(vector.subtract(this).multiply(t));
  }

  /**
   * gets the max of 2 vectors
   * @param vector The vector to get the max of
   * @returns the max of the 2 vectors
   */
  max(vector: Vector2): Vector2 {
    return new Vector2(Math.max(this.x, vector.x), Math.max(this.y, vector.y));
  }

  /**
   * get the min of 2 vectors
   * @param vector the vector to get the min of
   * @returns the max of the 2 vectors
   */
  min(vector: Vector2): Vector2 {
    return new Vector2(Math.min(this.x, vector.x), Math.min(this.y, vector.y));
  }

  reflect(vector: Vector2): Vector2 {
    return this.subtract(
      vector.multiply((2 * this.dot(vector)) / this.lengthSquared())
    );
  }

  sqrt(): Vector2 {
    return new Vector2(Math.sqrt(this.x), Math.sqrt(this.y));
  }

  squareRoot(): Vector2 {
    return this.sqrt();
  }

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  toAngle(deg?: boolean) {
    let angle = Math.atan2(this.y, this.x);
    if (deg) angle *= 180 / Math.PI;
    return angle;
  }
}

export { Vector2 };
