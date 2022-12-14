const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    console.log(hamburger);
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const options = {
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0',
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.5',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json;charset=utf-8',
      Origin: 'https://playtennis.usta.com',
      DNT: '1',
      Connection: 'keep-alive',
      Referer: 'https://playtennis.usta.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      TE: 'trailers'
    },
    body: '{"options":{"size":100,"from":0,"sortKey":"date","latitude":36.07427978515625,"longitude":-86.76791381835938},"filters":[{"key":"organisation-id","items":[]},{"key":"location-id","items":[]},{"key":"region-id","items":[]},{"key":"publish-target","items":[{"value":1}]},{"key":"level-category","items":[{"value":"junior"}],"operator":"Or"},{"key":"organisation-group","items":[],"operator":"Or"},{"key":"date-range","items":[{"minDate":"2022-07-21T00:00:00.000Z","maxDate":"2022-08-31T23:59:59.999Z"}],"operator":"Or"},{"key":"distance","items":[{"value":200}],"operator":"Or"},{"key":"tournament-level","items":[{"value":"00000000-0000-0000-0000-000000000003"},{"value":"00000000-0000-0000-0000-0000000000b3"},{"value":"00000000-0000-0000-0000-000000000004"},{"value":"00000000-0000-0000-0000-0000000000b4"},{"value":"00000000-0000-0000-0000-000000000005"},{"value":"00000000-0000-0000-0000-0000000000b5"},{"value":"00000000-0000-0000-0000-000000000006"},{"value":"00000000-0000-0000-0000-000000000003"},{"value":"00000000-0000-0000-0000-0000000000b3"},{"value":"00000000-0000-0000-0000-000000000004"},{"value":"00000000-0000-0000-0000-0000000000b4"},{"value":"00000000-0000-0000-0000-000000000005"},{"value":"00000000-0000-0000-0000-0000000000b5"},{"value":"00000000-0000-0000-0000-000000000006"}],"operator":"Or"},{"key":"event-division-gender","items":[{"value":"boys"},{"value":"boys"},{"value":"boys"}],"operator":"Or"},{"key":"event-ntrp-rating-level","items":[],"operator":"Or"},{"key":"event-division-age-category","items":[],"operator":"Or"},{"key":"event-division-event-type","items":[],"operator":"Or"},{"key":"event-court-location","items":[],"operator":"Or"}]}'
  };
  
  fetch('https://prd-usta-kube.clubspark.pro/unified-search-api/api/Search/tournaments/Query?indexSchema=tournament', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));