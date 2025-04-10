let text = "-It's Tomosori Ayomide a web developer";
let current = 0;

function type() {
  if (current < text.length) {
    document.getElementById("below").innerHTML += text.charAt(current);
    current++;
    setTimeout(type, 200);
  }
}
type();
let full = "about";
let present = 0;

function add() {
  if (present < full.length) {
    document.getElementById("title").innerHTML += full.charAt(present);
    present++;
  }
  setTimeout(add, 300);
}
add();

let end = document.getElementById("ham");
let closeDisplay = document.getElementById("navigation");
let close = document.getElementById("bgt");
let closes = document.getElementById("bgt");
function cancel() {
  // closes.style.animation = "scale 2s ease forwards ";
  // KeyframeEffect(scale);

  closeDisplay.style.display = "none";
  close.style.display = "none";
  end.style.display = "block";
}
function display() {
  close.style.display = "block";
  closeDisplay.style.display = "block";
  end.style.display = "none";
}
const name = "tomosoriayomide";
const repoCon = document.getElementById("myrepo");

async function myRepo() {
  const response = await fetch(`https://api.github.com/users/${name}/repos`);
  const repository = await response.json();
  console.log(repository);
  // const imageSrc = projectImages[repo.name] || "images/default.jpg";

  repository.forEach((repo) => {
    const repoElement = document.createElement("div");
    repoElement.id = "style";
    repoElement.innerHTML = `
      <h3><a href="${repo.homepage}" target="_blank">${repo.name}</a></h3>
      <p>${repo.description || "No description available"}</p>
      <p><strong>Language:</strong> ${repo.language || "N/A"}</p>
      <hr/>
    `;
    repoCon.appendChild(repoElement);
    if (repo.language === "CSS") {
      // repoElement.style.color='red'
      repoElement.innerHTML = `<h3><a href="${repo.html_url}" target="_blank">${
        repo.name
      }</a></h3>
      <p>${repo.description || "No description available"}</p>  
     <p><strong>Language:</strong> HTML,CSS</p> 
     <hr/>`;
      //  "HTML,CSS"
    }
    if (repo.hompage === "null") {
      repoCon.innerHTML = "none";
    }
  });
}
{
  /* <script> */
}
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("main-content");

  preloader.style.display = "none";
  content.style.display = "block";
});
{
  /* </script> */
}

const form = document.getElementById("form");
const loader = document.getElementById("form-preloader");

form.addEventListener("submit", function (e) {
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    form.reset();
  }, 5000);
});

myRepo();
