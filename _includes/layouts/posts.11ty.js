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
	<body>${
		data.content
		}
		<ul>
		${
			data.collections.post.map(post => `<li><a href="${post.page.url}">${post.data.title}</a> ${new Date(post.page.date).toLocaleDateString()}</li>`).join("\n")
		}
		</ul>
	</body>
</html>
`.trim();
  }
}
