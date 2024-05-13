import { Vector3 } from "./vector3";
import { expect, test } from "bun:test";

test("Vector3", () => {
  expect(new Vector3(3, 4, 0).length()).toBe(5);

  expect(new Vector3(3, 4, 0).normalize()).toEqual(new Vector3(0.6, 0.8, 0));

  expect(new Vector3(3, 4, 0).multiply(1)).toEqual(new Vector3(3, 4, 0));
});

test("Vector3 operands", () => {
  const base = new Vector3(1, 1, 1);
  expect(base.add(new Vector3(1, 1, 1))).toEqual(new Vector3(2, 2, 2));

  expect(base.multiply(new Vector3(1, 2, 3))).toEqual(new Vector3(1, 2, 3));

  expect(base.subtract(base)).toEqual(new Vector3(0, 0, 0));
});
