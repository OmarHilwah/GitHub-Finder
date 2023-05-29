let input = document.getElementById("input-name");
let input1 = document.getElementsByClassName("in")[0];
let icon = document.getElementById("icon-secrch");
let icon1 = document.getElementsByClassName("ic")[0];

fetch(`https://api.github.com/users/omarhilwah`) // when the page loaded it will open my own profile
  .then((res) => res.json())
  .then((data) => {
    // console.log(data); for testing
    document.getElementsByClassName("user-name")[0].innerHTML = data.name;
    document.getElementsByClassName("username")[0].textContent = data.login;
    document
      .getElementsByClassName("user-img")[0]
      .setAttribute("src", data.avatar_url);
    document
      .getElementsByClassName("u")[0]
      .setAttribute("src", data.avatar_url);
    document.getElementsByClassName("follower-number")[0].textContent =
      data.followers;
    document.getElementsByClassName("following-number")[0].textContent =
      data.following;
    document.getElementById("location").textContent = data.location;
    document.getElementById("time").textContent = data.created_at;

    fetch(data.repos_url)
      .then((res) => res.json())
      .then((url) => {
        // console.log(url);
        for (let i = 0; i < 6; i++) {
          let vcolor = "color-lan";
          if (url[i].language == "HTML") vcolor = "color-lan-red";
          else if (url[i].language == "CSS") vcolor = "color-lan-drakbule";
          else if (url[i].language == "JavaScript") vcolor = "color-lan-yellow";

          if (url[i].language == null) url[i].language = "";

          let str = `
          <div class="card">
            <div class="as">
              <a src="" class="name-project">
                ${url[i].name}
              </a>
              <div class="pp">${url[i].visibility}</div>
            </div>
             <div class="llll">
                    <div id="${vcolor}"></div>
                    <div class="language">${url[i].language}</div>
            </div>
          </div>`;

          document.getElementsByClassName("container")[0].innerHTML += str;
        }
      });
  });

input.addEventListener("keyup", (e) => {
  let name = e.key;
  if (name === "Enter") {
    fetch(`https://api.github.com/users/${input.value}`)
      .then((res) => res.json())
      .then((data) => {
        document.getElementsByClassName("container")[0].innerHTML = "";
        console.log(data);
        document.getElementsByClassName("user-name")[0].innerHTML = data.name;
        document.getElementsByClassName("username")[0].textContent = data.login;
        document
          .getElementsByClassName("user-img")[0]
          .setAttribute("src", data.avatar_url);
        document
          .getElementsByClassName("u")[0]
          .setAttribute("src", data.avatar_url);
        document.getElementsByClassName("follower-number")[0].textContent =
          data.followers;
        document.getElementsByClassName("following-number")[0].textContent =
          data.following;
        document.getElementById("location").textContent = data.location;
        document.getElementById("time").textContent = data.created_at;

        fetch(data.repos_url)
          .then((res) => res.json())
          .then((url) => {
            console.log(url);

            for (let i = 0; i < 6; i++) {
              let vcolor = "color-lan";
              if (url[i].language == "HTML") vcolor = "color-lan-red";
              else if (url[i].language == "CSS") vcolor = "color-lan-drakbule";
              else if (url[i].language == "JavaScript")
                vcolor = "color-lan-yellow";
              let str = `
          <div class="card">
            <div class="as">
              <a src="" class="name-project">
                ${url[i].name}
              </a>
              <div class="pp">${url[i].visibility}</div>
            </div>
             <div class="llll">
                    <div id="${vcolor}"></div>
                    <div class="language">${url[i].language}</div>
            </div>
          </div>`;

              document.getElementsByClassName("container")[0].innerHTML += str;
            }
          });
      });
  }
});

document.getElementById("hum").addEventListener("click", () => {
  if (document.getElementsByClassName("links")[0].style.display == "none") {
    document.getElementsByClassName("links")[0].style.display = "flex";
  } else {
    document.getElementsByClassName("links")[0].style.display = "none";
  }
});
