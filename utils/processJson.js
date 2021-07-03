const fs = require("fs");
const readFile = async (filePath) => {
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  const currentJson = await readFile("sample_data.json");
  const mappedData = [];
const filtered = currentJson.items.filter((item) => {
  return item.product_name.includes("shoe") || item.meta_keywords.includes('shoe')
})
  console.log(filtered);
})();

