let baseURL = "https://ezzze28.github.io/wdd230/";
let linksURL = "data/links.json";

const ul = document.getElementById("weekLinks");

const displayLinks = (weeks) => {
  weeks.forEach((weeks) => {
    const li = document.createElement("li");

    li.innerHTML = `${weeks.week}: ${weeks.links
      .map((link) => `<a href="${link.url}">${link.title}</a>`)
      .join(" | ")}`;

    ul.appendChild(li);
  });
};

const getLinks = async () => {
  try {
    const response = await fetch(baseURL + linksURL);
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      displayLinks(data.weeks);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

getLinks();
