
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let compare = document.getElementsByClassName("fight")[0];
let name1;
let name2;
var repo1;
var repo2;
var follower1;
var follower2;

compare.addEventListener("click", () => {
 
  
  fetch(`https://api.github.com/users/${input1.value}`)
    .then((res) => res.json())
    .then((data) => {
      name1 = data.login;
      repo1 = parseInt(data.public_repos);
      follower1 = parseInt(data.followers);
      document
        .getElementsByClassName("img")[0]
        .setAttribute("src", data.avatar_url);
      document.getElementsByClassName("name")[0].innerHTML = "name :" + name1;
      document.getElementsByClassName("follower")[0].innerHTML =
        "follower :" + follower1;
      document.getElementsByClassName("number")[0].innerHTML =
        "number of repo :" + repo1;

      fetch(`https://api.github.com/users/${input2.value}`)
        .then((res) => res.json())
        .then((data) => {
          name2 = data.login;
          repo2 = +data.public_repos;
          follower2 = +data.followers;
          document
            .getElementsByClassName("img")[1]
            .setAttribute("src", data.avatar_url);
          document.getElementsByClassName("name")[1].innerHTML =
            "name :" + name2;
          document.getElementsByClassName("follower")[1].innerHTML =
            "follower :" + follower2;
          document.getElementsByClassName("number")[1].innerHTML =
            "number of repo :" + repo2;

          if (repo2 > repo1) {
            document.getElementsByClassName("result")[1].innerHTML =
              "result : Winner";
            document.getElementsByClassName("result")[0].innerHTML =
              "result : Loser";
              document
                .getElementsByClassName("card")[1]
                .setAttribute("style", "background-color :#c5e8b7");
              document
                .getElementsByClassName("card")[0]
                .setAttribute("style", "background-color :#f07470");
          } else if (repo1 > repo2) {
            document.getElementsByClassName("result")[0].innerHTML =
              "result : Winner";
            document.getElementsByClassName("result")[1].innerHTML =
              "result : Loser";
              document
                .getElementsByClassName("card")[0]
                .setAttribute("style", "background-color :#c5e8b7");
              document
                .getElementsByClassName("card")[1]
                .setAttribute("style", "background-color :#f07470");
          } else if (repo1 == repo2) {
            if (follower2 > follower1) {
              document.getElementsByClassName("result")[1].innerHTML =
                "result : Winner";
              document.getElementsByClassName("result")[0].innerHTML =
                "result : Loser";
                document
                  .getElementsByClassName("card")[1]
                  .setAttribute("style", "background-color :#c5e8b7");
                document
                  .getElementsByClassName("card")[0]
                  .setAttribute("style", "background-color :#f07470");
            } else if (follower1 > follower2) {
              document.getElementsByClassName("result")[0].innerHTML =
                "result : Winner";
              document.getElementsByClassName("result")[1].innerHTML =
                "result : Loser";
                document
                  .getElementsByClassName("card")[0]
                  .setAttribute("style", "background-color :#c5e8b7");
                document
                  .getElementsByClassName("card")[1]
                  .setAttribute("style","background-color :#f07470");
            } else if (follower1 == follower2) {
              document.getElementsByClassName("result")[0].innerHTML =
                "result : Draw";
              document.getElementsByClassName("result")[1].innerHTML =
                " result : Draw";
                document
                  .getElementsByClassName("card")[1]
                  .setAttribute("style", "background-color :#f2f2ae");
                document
                  .getElementsByClassName("card")[0]
                  .setAttribute("style", "background-color :#f2f2ae");
            }
          }
        
               document.getElementsByClassName("card")[1].style.color ="#24292f";
               document.getElementsByClassName("card")[0].style.color ="#24292f";
      
        });
    });



  });

document.getElementById("hum").addEventListener("click",()=>{
if(document.getElementsByClassName("links")[0].style.display == "none"){
document.getElementsByClassName("links")[0].style.display = "flex";
}
else{
   document.getElementsByClassName("links")[0].style.display = "none"; 
}});































// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let compare = document.getElementsByClassName("fight")[0];
// let name1;
// let name2;
// var repo1;
// var repo2;
// var follower1;
// var follower2;


// compare.addEventListener("click",()=>{
// fetch(`https://api.github.com/users/${input1.value}`)
//   .then((res) => res.json())
//   .then((data) => {
//     name1 = data.login;
//     repo1 = parseInt(data.public_repos);
//     follower1 = parseInt(data.followers);
//     document
//       .getElementsByClassName("img")[0]
//       .setAttribute("src", data.avatar_url);
//     document.getElementsByClassName("name")[0].innerHTML="name :"+name1;
//     document.getElementsByClassName("follower")[0].innerHTML="follower :"+follower1;
//     document.getElementsByClassName("number")[0].innerHTML="number of repo :"+repo1;
//   });
// fetch(`https://api.github.com/users/${input2.value}`)
//   .then((res) => res.json())
//   .then((data) => {
//     name2 = data.login;
//     repo2 = +data.public_repos;
//     follower2 = +data.followers;
//     document
//       .getElementsByClassName("img")[1]
//       .setAttribute("src", data.avatar_url);
//     document.getElementsByClassName("name")[1].innerHTML="name :"+name2;
//     document.getElementsByClassName("follower")[1].innerHTML="follower :"+follower2;
//     document.getElementsByClassName("number")[1].innerHTML = "number of repo :" + repo2;
//   });

// if(repo2 > repo1){
// document.getElementsByClassName("result")[1].innerHTML = "result :  Winner";
// document.getElementsByClassName("result")[0].innerHTML = "result : Loser";
// }else if(repo1 > repo2){
// document.getElementsByClassName("result")[0].innerHTML ="result :  Winner";
// document.getElementsByClassName("result")[1].innerHTML = "result : Loser";

// }else if (repo1==repo2){
// if(follower2 > follower1){
// document.getElementsByClassName("result")[1].innerHTML = "result :  Winner";
// document.getElementsByClassName("result")[0].innerHTML = "result : Loser";
// }
// else if( follower1 > follower2){
//     document.getElementsByClassName("result")[0].innerHTML = "result :  Winner";
//     document.getElementsByClassName("result")[1].innerHTML = "result : Loser";
// }
// else if( follower1 == follower2){
// document.getElementsByClassName("result")[0].innerHTML = "result : Draw";
// document.getElementsByClassName("result")[1].innerHTML = " result : Draw";
// }else{
//     console.log("amer")
// }
// }



// })

