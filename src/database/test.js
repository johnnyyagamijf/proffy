const Database = require('./db');
const createProffy = require('./createProffy');


Database.then(async(db) => {

    proffyValue = {
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        name: "Diego Fernandes",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        whatsapp: "329999-8888"
    }

    classValue = {
        subject: 1,
        cost: "20,00"
    }

    classScheduleValues = [ 
        {
            weekday: 1,
            time_from: 720,
            time_to : 1220
        },
        {
            weekday: 4,
            time_from: 930,
            time_to : 1350
        }
]

await createProffy(db, {proffyValue, classValue, classScheduleValues})

const selectedProffys = await db.all("select * from proffys");
console.log(selectedProffys);

const selectedClassesAndProffys = await db.all(`
SELECT classes.*, proffys.* 
FROM proffys
join classes on classes.proffy_id = proffys.id 
WHERE classes.proffy_id = 1;`);
console.log(selectedClassesAndProffys)

const selectedClassesSchedules = await db.all(`
SELECT class_schedule.* 
FROM class_schedule
WHERE class_schedule.class_id = "1"
AND class_schedule.weekday = "1"
AND class_schedule.time_from <= "820"
AND class_schedule.time_to <= "820"`);
console.log(selectedClassesSchedules)


});

