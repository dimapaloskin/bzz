const {EOL} = require('os');

const bzz = (gitter, templateString) => {
  if (!templateString) {
    templateString = gitter;
    gitter = 0;
  }

  const splitted = templateString.split(EOL);
  splitted.shift();
  splitted.pop();

  const cleaned = splitted
    .filter(line => Boolean(line.length) && line !== EOL);

  const minStringGitter = cleaned.reduce((accum, line) => {
    const lineSpaces = line.length - line.trimLeft().length;
    return (accum < lineSpaces ? accum : lineSpaces);
  }, (cleaned[0].length - cleaned[0].trimLeft().length) || 0);

  const trimNum = (minStringGitter - gitter < 0) ? 0 : minStringGitter - gitter;
  const trimmed = splitted.map(line => {
    return line.substr(trimNum);
  });

  return trimmed.join(EOL);
};

module.exports = bzz;
