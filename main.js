const linksSocialMedia = {
  github: "RaffaelOliveira-dev",
  instagram: "ffaeloliveira_",
  youtube: "channel/UCWPA33eHLkY-d_lgv4OOouQ",
  linkedin:"in/raffaeloliveira-/"
}

function changeSocialMediaLinks() {
  
  for(let li of socialLinks.children){

    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  
  }

}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url) //Função que vai pegar as informações da API
  .then(response => response.json ()) //Pega o que veio do fatch e transforma em JSON.
  .then(data => { userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userLogin.textContent = data.login 
    userImage.src = data.avatar_url              
  }) //Guarda todo o objeto do JSON e armazena em data.

}

getGitHubProfileInfos();