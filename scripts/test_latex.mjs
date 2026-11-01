function preprocess(text) {
  let s = text;
  s = s.replace(/\\\(([\s\S]*?)\\\)/g, '$$$1$$');
  s = s.replace(/\\\[([\s\S]*?)\\\]/g, '$$$1$$');
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, '$$$1$$');
  // Auto-wrap unwrapped \frac and \sqrt
  s = s.replace(/(?<!\$)\\frac\{[^{}]+\}\{[^{}]+\}(?!\$)/g, '$$$&$$');
  s = s.replace(/(?<!\$)\\sqrt\{[^{}]+\}(?!\$)/g, '$$$&$$');
  // Auto-wrap unwrapped commands
  s = s.replace(/(?<!\$)\\(lim|int|sum|vec|alpha|beta|gamma|theta|lambda|pi|sigma|omega|Delta|times|div|pm|leq|geq|neq|approx|rightleftharpoons|rightarrow)(?:_\{[^}]+\}|_[a-zA-Z0-9]+|\^\{[^}]+\}|\^[a-zA-Z0-9]+|\{[^}]+\}|[a-zA-Z0-9\s=\+\-\/\(\)]*?)(?=\s*[,\.]?(?:\s|$|\$))/g, (m) => '$$' + m.trim() + '$$');
  return s;
}

console.log('1:', preprocess('Solve \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1.'));
console.log('2:', preprocess('What is \\( x^2 + y^2 = r^2 \\)?'));
console.log('3:', preprocess('Reaction: A + B \\rightleftharpoons C + D'));
console.log('4:', preprocess('Value of \\Delta H is negative.'));
console.log('5:', preprocess('Already wrapped: $\\frac{1}{2}$ is good.'));
