let universityName = document.getElementById('university-name');
let universityCountry = document.getElementById('university-country');
let universityWebsite = document.getElementById('university-website');

fetch(
  'https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json'
)
  .then(res => res.json())
  .then(res => {
    const universityIndex = Math.floor(Math.random() * res.length + 1);
    console.log(res[universityIndex]);
    universityName.innerHTML = `<a href=${res[universityIndex].web_pages[0]}>${
      res[universityIndex].name
    }</a>`;
    universityCountry.innerHTML = res[universityIndex].country;
  });
