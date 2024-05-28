class Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  multiply(scalar: Vector3 | number): Vector3 {
    if (typeof scalar === "number") {
      return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    } else {
      return new Vector3(
        this.x * scalar.x,
        this.y * scalar.y,
        this.z * scalar.z
      );
    }
  }

  add(vector: Vector3): Vector3 {
    return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }

  subtract(vector: Vector3): Vector3 {
    return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  }

  divide(scalar: Vector3 | number): Vector3 {
    if (typeof scalar === "number") {
      return new Vector3(this.x / scalar, this.y / scalar, this.z / scalar);
    } else {
      return new Vector3(
        this.x / scalar.x,
        this.y / scalar.y,
        this.z / scalar.z
      );
    }
  }

  dot(vector: Vector3): number {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }

  length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }

  lengthSquared(): number {
    return this.x ** 2 + this.y ** 2 + this.z ** 2;
  }

  abs(): Vector3 {
    return new Vector3(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
  }

  clamp(min: Vector3, max: Vector3): Vector3 {
    return new Vector3(
      Math.max(min.x, Math.min(max.x, this.x)),
      Math.max(min.y, Math.min(max.y, this.y)),
      Math.max(min.z, Math.min(max.z, this.z))
    );
  }

  normalize(): Vector3 {
    return this.divide(this.length());
  }

  distance(vector: Vector3): number {
    return this.subtract(vector).length();
  }

  distanceSquared(vector: Vector3): number {
    return this.subtract(vector).lengthSquared();
  }

  lerp(vector: Vector3, t: number): Vector3 {
    return this.add(vector.subtract(this).multiply(t));
  }

  max(vector: Vector3): Vector3 {
    return new Vector3(
      Math.max(this.x, vector.x),
      Math.max(this.y, vector.y),
      Math.max(this.z, vector.z)
    );
  }

  min(vector: Vector3): Vector3 {
    return new Vector3(
      Math.min(this.x, vector.x),
      Math.min(this.y, vector.y),
      Math.min(this.z, vector.z)
    );
  }

  reflect(vector: Vector3): Vector3 {
    return this.subtract(
      vector.multiply((2 * this.dot(vector)) / this.lengthSquared())
    );
  }

  sqrt(): Vector3 {
    return new Vector3(Math.sqrt(this.x), Math.sqrt(this.y), Math.sqrt(this.z));
  }

  squareRoot(): Vector3 {
    return this.sqrt();
  }

  toString(): string {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }

  toAngle(deg?: boolean): { pitch: number; yaw: number } {
    const pitch = Math.atan2(this.y, this.x);
    const yaw = Math.atan2(this.z, Math.sqrt(this.x ** 2 + this.y ** 2));
    if (deg)
      return { pitch: (pitch * 180) / Math.PI, yaw: (yaw * 180) / Math.PI };
    return { pitch, yaw };
  }
}

const zero = new Vector3(0, 0, 0);
const unitX = new Vector3(1, 0, 0);
const unitY = new Vector3(0, 1, 0);
const unitZ = new Vector3(0, 0, 1);
const one = new Vector3(1, 1, 1)

export { Vector3, zero, unitX, unitY, unitZ, one };
