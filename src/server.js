const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express: app,
    noCache: true
});

const proffys = [

    {
        img: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        name: "Diego Fernandes",
        subject: "Química",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        cost: "20,00",
        whatsapp: "329999-8888"
    },

    {
        img: "https://t1.uc.ltmcdn.com/pt/images/2/5/1/como_se_chama_mickey_mouse_em_diferentes_paises_11152_600.jpg",
        name: "John Campos",
        subject: "Matematica",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        cost: "20,00",
        whatsapp: "32   9999-8888",
        weekday: [],
        time_from: [720],
        time_to: [1228]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]



app.use(express.static("public"));

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

app.get('/', pageLanding);

app.get('/study', pageStudy);

app.get('/give-classes', pageGiveClasses);

const Port = process.env.Port || 9000;

app.listen(Port, () => {
    console.log(`api rodando na porta ${Port}`);
})