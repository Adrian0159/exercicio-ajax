document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const repos = document.getElementById("repos");
  const seguidores = document.getElementById("seguidores");
  const seguindo = document.getElementById("seguindo");
  const avatar = document.getElementById("avatar");
  const link = document.getElementById("link");

  fetch("https://api.github.com/users/Adrian0159")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      name.innerText = json.name;
      username.innerText = json.login;
      seguidores.innerText = json.followers;
      seguindo.innerText = json.following;
      repos.innerText = json.public_repos;
      link.href = json.html_url;
      avatar.src = json.avatar_url;
    });
});
