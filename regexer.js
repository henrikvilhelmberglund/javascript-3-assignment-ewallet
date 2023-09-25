import fs from "fs";
import { colors } from "@unocss/preset-mini";
// Create a writable stream to a file
const outputFilePath = "output.txt"; // Change this to your desired file name and path
// fs.writeFileSync(outputFilePath, "", { flag: "w" });
const writeStream = fs.createWriteStream(outputFilePath);

console.log = function (message) {
  writeStream.write(`${message}\n`);
};

const tailwindColorPrefixes = [
  "bg",
  "text",
  "border",
  "ring",
  "divide",
  "from",
  "via",
  "to",
  "placeholder",
  "caret",
  "shadow",
  "accent",
  "fill",
  "stroke",
];
let colorPrefix = "(";
tailwindColorPrefixes.forEach((prefix, i) => {
  if (i !== 0) {
    colorPrefix += "|";
  }
  colorPrefix += prefix;
});
colorPrefix += ")";
// console.log(colorPrefix);

// (?<!\\w)(bg-([a-z-]+)(?:-(\\d{1,3}))?)(?!\\w)
//  {
// "rangeBehavior": 1,
// "borderWidth": "1px",
// "borderColor": "$1",
// "borderRadius": "2px",
// "borderStyle": "solid"
// }

// console.log("{");
for (const colorClass in colors) {
  // console.log(`"${colorClass}": {`);
  for (const shade in colors[colorClass]) {
    if (
      shade === "50" ||
      shade === "100" ||
      shade === "200" ||
      shade === "300" ||
      shade === "400" ||
      shade === "500" ||
      shade === "600" ||
      shade === "700" ||
      shade === "800" ||
      shade === "900" ||
      shade === "950"
    ) {
      let hex;
      hex = colors[colorClass][shade];
      console.log(`"(${colorPrefix}-${colorClass}-${shade})": [`);
      console.log("{");
      console.log(`\t"rangeBehavior": 1,`);
      console.log(`\t"borderWidth": "2px",`);
      console.log(`\t"borderColor": "${hex}",`);
      console.log(`\t"borderRadius": "2px",`);
      console.log(`\t"borderStyle": "solid"`);
      console.log("}");
      console.log("],");

      // console.log(`"${shade}": "${colors[colorClass][shade]}",`);
    }
  }
}

console.log(`"(${colorPrefix}-white)": [`);
// "((bg|text|border|ring|divide|from|via|to|placeholder|caret|shadow|accent|fill|stroke)-red-500)": [
console.log("{");
console.log(`\t"rangeBehavior": 1,`);
console.log(`\t"borderWidth": "2px",`);
console.log(`\t"borderColor": "#ffffff",`);
console.log(`\t"borderRadius": "2px",`);
console.log(`\t"borderStyle": "solid"`);
console.log("}");
console.log("],");

console.log(`"(${colorPrefix}-black)": [`);
// "((bg|text|border|ring|divide|from|via|to|placeholder|caret|shadow|accent|fill|stroke)-red-500)": [
console.log("{");
console.log(`\t"rangeBehavior": 1,`);
console.log(`\t"borderWidth": "2px",`);
console.log(`\t"borderColor": "#000000",`);
console.log(`\t"borderRadius": "2px",`);
console.log(`\t"borderStyle": "solid"`);
console.log("}");
console.log("]");
// console.log("}");
