//05-arrays/05-walk-three/script.js - 5.5: parcours de tableau (3)

let go = document.getElementById("run");
go.addEventListener("click", function (el) {
    const people = [{firstname: "Garald", lastname: "Freschi", email: "gfreschi0@discuz.net"},
                    {firstname: "Bendicty", lastname: "Foster-Smith", email: "bfostersmith1@mysql.com"},
                    {firstname: "Michelle", lastname: "Draude", email: "mdraude2@csmonitor.com"},
                    {firstname: "Cathee", lastname: "Meineck", email: "cmeineck3@t-online.de"},
                    {firstname: "Marianna", lastname: "Coal", email: "mcoal4@creativecommons.org"},];
    people.forEach(element => {
        console.log(element.firstname)
    })
})