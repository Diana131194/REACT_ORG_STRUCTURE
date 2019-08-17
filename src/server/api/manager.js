let ManagerModel = require('../model/manager')
let ReportModel = require('../model/reports')
let TaskModel = require('../model/tasks')

module.exports = (app) => {

    app.post('/api/fetchSubordinates', function (req, res) {
        console.log("this is the manager: ")
        console.log(req.body.manager)
        console.log("this is the first name: " + req.body.manager.first_name)
        console.log("this is the last name: " + req.body.manager.last_name)
        ManagerModel.findOne({ first_name: req.body.manager.first_name, last_name: req.body.manager.last_name})
            .then(doc => {
                console.log("this is doc: ")
                console.log(doc.subordinates)
                res.json({subordinates: doc.subordinates})
            })
    })

    app.post('/api/saveTask', function (req, res){
        let newTask = new TaskModel({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            task_text: req.body.task_text,
            task_dueDate: req.body.task_date,
            task_creationDate: new Date()

        })

        newTask.save()
        TaskModel.find({}, (err, tasks)=>{
            res.json({tasks: tasks})
        })
    })

    app.post('/api/fetchReports', function (req, res) {
        ReportModel.find({ manager: {first_name: req.body.first_name, last_name: req.body.last_name} }, (err, reports) => {
            if (err) {
                console.log("error in fetch tasks")
            }
            else {
                res.json({reports: reports})
            }
        })
    })

    app.get('/api/managers/fetch', function(req, res) {
        ManagerModel.find({}, (err, managers) => {
            if(err) {
                console.log("error")
            }
            else {
                if(managers.length == 0){
                    console.log("im in else!")
                    var Shimon = new ManagerModel({
                        first_name: 'Shimon',
                        last_name: 'Cohen',
                        position: 'Project Manager',
                        manager: { first_name: 'Tomer', last_name: 'Goren' },
                        subordinates: [
                            {
                                first_name: 'Avi',
                                last_name: 'Cohen',
                                position: 'Administrator'
                            },
                            {
                                first_name: 'Moshe',
                                last_name: 'Levi',
                                position: 'Salesperson'
                            },
                            {
                                first_name: 'Liat',
                                last_name: 'Vais',
                                position: 'Secretary'
                            },
                            {
                                first_name: 'Ben',
                                last_name: 'Biton',
                                position: 'Executive Assistant'
                            },
                            {
                                first_name: 'Dan',
                                last_name: 'Eyal',
                                position: 'Sales Assistant'
                            },
                            {
                                first_name: 'Eran',
                                last_name: 'Solomon',
                                position: 'Financial Advisor'
                            },
                            {
                                first_name: 'Idan',
                                last_name: 'Levi',
                                position: 'Analyst'
                            },
                            {
                                first_name: 'Liel',
                                last_name: 'Peretz',
                                position: 'Programmer'
                            },
                            {
                                first_name: 'Noa',
                                last_name: 'Birman',
                                position: 'Copywriter'
                            },
                            {
                                first_name: 'Omer',
                                last_name: 'Avitan',
                                position: 'Graphic Designer'
                            },
                            {
                                first_name: 'Royee',
                                last_name: 'Shabat',
                                position: 'Marketing Assistant'
                            }
                        ]
                    })

                    var Tomer = new ManagerModel({
                        first_name: 'Tomer',
                        last_name: 'Goren',
                        position: 'CEO',
                        subordinates: [
                            {
                                first_name: 'Liel',
                                last_name: 'Peretz',
                                position: 'Programmer'
                            },
                            {
                                first_name: 'Noa',
                                last_name: 'Birman',
                                position: 'Copywriter'
                            },
                            {
                                first_name: 'Omer',
                                last_name: 'Avitan',
                                position: 'Graphic Designer'
                            },
                            {
                                first_name: 'Royee',
                                last_name: 'Shabat',
                                position: 'Marketing Assistant'
                            }
                        ]
                    })
                    Tomer.save(function (err, Tomer) {
                        if (err) {
                            console.log("Tomer" + err)
                        } else {
                            console.log("Tomer success");
                        }
                    })
                    Shimon.save(function (err, Shimon) {
                        if (err) {
                            console.log("Shimon" + err)
                        } else {
                            console.log("Shimon success");
                        }
                    })
                    
                    res.json({ managers: managers })
                    
                }
                
                    else{
                        res.json({managers: managers})}
                
            }
        })
      
        
    })
}