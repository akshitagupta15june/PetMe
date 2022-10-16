// Script for to get Github contributors list
const contributors = document.getElementById("contributors");
const repo = "PetMe";
const owner = "akshitagupta15june";
const apiURL = `https://api.github.com/repos/${owner}/${repo}/contributors`;


function displayContributors(contributorsList) {
  contributorsList.forEach((contributor) => {
    // create anchor tag and set relevant attributes
    const link = document.createElement("a");
    link.setAttribute("href", contributor.html_url);
    link.setAttribute("target", "_blank");

    // create image element and set relevant attributes
    const avatar = document.createElement("img");
    avatar.setAttribute("class", "avatar");
    avatar.setAttribute("src", contributor.avatar_url);
    avatar.setAttribute("title", contributor.login);
    avatar.setAttribute("alt", contributor.login);

    link.appendChild(avatar);
    contributors.appendChild(link);
  });
}

// get contributors list  from github API
async function getContributorsList() {
  try {
    const response = await fetch(apiURL);
    const contributors = await response.json();
    displayContributors(contributors);
  } catch (error) {
    console.log(error);
  }
}

getContributorsList();

