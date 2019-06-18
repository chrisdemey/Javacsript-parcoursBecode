// 05-arrays/06-find-in-array/script.js - 5.6: recherche dans un tableau

let go = document.getElementById("run");
go.addEventListener("click", function (el) {
    const people = [{firstname: "Bradford", lastname: "Coldbath", email: "bcoldbath0@wired.com"},
        {firstname: "Nadiya", lastname: "Stendell", email: "nstendell1@nsw.gov.au"},
        {firstname: "Auroora", lastname: "Stapford", email: "astapford2@wsj.com"},
        {firstname: "Berkley", lastname: "McKall", email: "bmckall3@about.me"},
        {firstname: "Wolf", lastname: "McCurley", email: "wmccurley4@yale.edu"},
        {firstname: "Jorrie", lastname: "Canedo",email: "jcanedo5@engadget.com"},
        {firstname: "Bethanne", lastname: "Ackred", email: "backred6@imgur.com"},
        {firstname: "Zorah", lastname: "Whild", email: "zwhild7@sogou.com"},
        {firstname: "Jean", lastname: "Dupont", email: "jdupont@elpais.com"},
        {firstname: "Zulema", lastname: "Ericsson", email: "zericsson9@ed.gov"},
        {firstname: "Brady", lastname: "Scrannage", email: "bscrannagea@google.fr"},
        {firstname: "Isidore", lastname: "Korf", email: "ikorfb@google.com"},
        {firstname: "Bartholomew", lastname: "Stockbridge", email: "bstockbridgec@is.gd"},
        {firstname: "Laney", lastname: "O' Mara", email: "lomarad@forbes.com"},
        {firstname: "Gabe", lastname: "Keatch", email: "gkeatche@google.fr"}];
    let result = people.filter((element) => element.firstname == "Jean");
    console.log(result[0].email);

    const indice = people.findIndex((element, index, tab) => {
        const result2 = element.firstname === "Jean";
        return result2;
    })
    console.log(indice);
})