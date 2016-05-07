"use strict";

export default async function foo() {
  const s = await bar();
  console.log(s);
}

function bar() {
  return "bar";
}