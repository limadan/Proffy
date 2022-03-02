const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "9494849404",
        bio: "Entusiasta das melhores tecnologias de química avançada<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]  //O tempo NÃO pode ser em hora, deve ser em segundos
    },
    {
        name: "Daniele Envangelhista",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "9494849404",
        bio: "Entusiasta das melhores tecnologias de química avançada<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]  //O tempo NÃO pode ser em hora, deve ser em segundos

    }
] //variável que armazenará os professores. Isto é uma estrutura de dados

//No entanto, o HTML não entende essa estrutura de dados. Para isso, usaremos Template Engine. Para isso, istalaremos o nunjucks, para renderizar templates.

const express = require('express')
const server = express()

//configurando o nunjucks

function pageGiveClasses(req, res){
    if(req.method === "POST"){
        proffys.push({
            name: req.body.name,
            avatar: req.body.avatar,
            whatsapp: req.body.whatsapp,
            bio: req.body.bio,
            subject: req.body.subject,
            cost: req.body.cost,
            weekday: req.body.weekday,
            time_from: req.body.time_from,
            time_to: req.body.time_to
        })
        return res.render("pages/study.ejs", {proffys: proffys})

    }else if(req.method=="GET"){
        return res.render("pages/give-classes.ejs")
    }
}

function pageStudy(req,res){
    proffysFiltered = proffys
    console.log(req.body)
    if(req.body.subject){
        proffysFiltered = proffys.filter((proffy)=>{proffy.subject === req.body.subject})
    }
    if(req.body.weekday){
        proffysFiltered = proffys.filter((proffy)=>{proffy.weekday === req.body.weekday})
    }
    if(req.body.time){
        proffysFiltered = proffys.filter((proffy)=>{proffy.time_from>=req.body.time&&proffy.time_to<=req.body.time})
    }
    return res.render("pages/study.ejs", {proffys: proffysFiltered})
}

function pageLanding(req, res) {
    return res.render("pages/index.ejs")
}//render significa que o nunjucks vai renderizar os arquivos. Nesse caso, basta informar qual o arquivo que será renderizado, sem a nessecidade de usar a variável __dirname
server.use(express.static("public"))
server.use(express.json())
server.use(express.urlencoded({extended: true}))
//configurar arquivos estáticos (css, scripts, imagens e etc.)

//rotas da aplicação
server.set('view engine', 'ejs')
server.listen(3000, ()=>{
    console.log("Servidor rodando")
})

server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)

server.post("/give-classes", pageGiveClasses)
server.post("/study", pageStudy)

