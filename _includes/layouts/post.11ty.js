const html = String.raw;
const data = {
  title: "Lost in Tech",
};

module.exports = class MainPageClass {
  get data() { return {...data}; }
  render(data) {
    return html`
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${data.title}</title>
	</head>
	<body><h1>${data.title}</h1>${
		data.content
	}</body>
</html>
`.trim();
  }
}
