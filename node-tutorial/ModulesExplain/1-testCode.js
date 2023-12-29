const testModule = () => {
  console.log(module);
};
// testModule();
// local (we do not want to share or RESTRICT it)
const peter = "peter";
// share (basically make public)
const john = "john";
const doe = "doe";
const ages = [15, 23];

module.exports = { john, doe };
// alternate method
module.exports.theirAges = ages;
