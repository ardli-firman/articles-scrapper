const app = require("express");
// const axios = require("axios");
const server = app();
// const cheerio = require("cheerio");

server.get("/user", function(req, res) {
    res.json({ user: "tod" });
});

server.listen(3000);

// axios
//     .get("https://myanimelist.net/topanime.php")
//     .then(response => {
//         const $ = cheerio.load(response.data);

//         const el = $(".top-ranking-table tbody");
//         const ranking = el.find(".ranking-list");
//         for (let i = 0; i < ranking.length; i++) {
//             const element = ranking[i];
//             const rank = $(element).find(".rank span");
//             const Title = $(element).find(".title");
//             const title = $(element).find(".title .detail .di-ib .hoverinfo_trigger");
//             const image = $(Title).find("a img");
//             console.log(image.data("src"));
//         }
//     })
//     .catch(err => {});
