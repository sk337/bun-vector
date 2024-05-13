import { Vector2 } from "./vector2";
import { expect, test } from "bun:test";

test("Vector2", () => {
  expect(new Vector2(3, 4).length()).toBe(5);

  expect(new Vector2(3, 4).normalize()).toEqual(new Vector2(0.6, 0.8));

  expect(new Vector2(3, 4).multiply(1)).toEqual(new Vector2(3, 4));
});

test("Vector2 operands", () => {
  const base = new Vector2(1, 1);
  expect(base.add(new Vector2(1, 1))).toEqual(new Vector2(2, 2));

  expect(base.multiply(new Vector2(1, 2))).toEqual(new Vector2(1, 2));

  expect(base.subtract(base)).toEqual(new Vector2(0, 0));
});
