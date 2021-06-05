import micromark from "micromark";

const m = micromark("\ta", "utf-8", {
  extensions: [{ disable: { null: ["codeIndented"] } }],
});

console.log(m);
