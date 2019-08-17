const EmployeeModel = require('../model/employee');
const ReportModel = require('../model/reports');
const TaskModel = require('../model/tasks');

module.exports = (app) => {

    app.post('/api/fetchTasks', function(req, res){
       
        TaskModel.find({first_name: req.body.first_name, last_name: req.body.last_name}, (err, tasks) => {
            if (err) {
                console.log("error in fetch tasks")
            }
            else{
                res.json({tasks: tasks})
            }
        })
    })

    app.post('/api/saveReport', function (req, res) {

        let newReport = new ReportModel({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            manager: req.body.manager,
            report_text: req.body.report_text,
            report_date: new Date()

        })

        newReport.save()
    })

    app.get('/api/employees', function (req, res){
        
        EmployeeModel.find({}, (err, employees)=>{
            if (err){
                console.log("error")
            }
            else {
                if ( employees.length == 0) {
                    var Avi = new EmployeeModel({
                        first_name: 'Avi',
                        last_name: 'Cohen',
                        position: 'Administrator',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Moshe = new EmployeeModel({
                        first_name: 'Moshe',
                        last_name: 'Levi',
                        position: 'Salesperson',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Liat = new EmployeeModel({
                        first_name: 'Liat',
                        last_name: 'Vais',
                        position: 'Secretary',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Ben = new EmployeeModel({
                        first_name: 'Ben',
                        last_name: 'Biton',
                        position: 'Executive Assistant',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Dan = new EmployeeModel({
                        first_name: 'Dan',
                        last_name: 'Eyal',
                        position: 'Sales Assistant',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Eran = new EmployeeModel({
                        first_name: 'Eran',
                        last_name: 'Solomon',
                        position: 'Financial Advisor',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Idan = new EmployeeModel({
                        first_name: 'Idan',
                        last_name: 'Levi',
                        position: 'Analyst',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Liel = new EmployeeModel({
                        first_name: 'Liel',
                        last_name: 'Peretz',
                        position: 'Programmer',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Noa = new EmployeeModel({
                        first_name: 'Noa',
                        last_name: 'Birman',
                        position: 'Copywriter',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Omer = new EmployeeModel({
                        first_name: 'Omer',
                        last_name: 'Avitan',
                        position: 'Graphic Designer',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })
                    var Royee = new EmployeeModel({
                        first_name: 'Royee',
                        last_name: 'Shabat',
                        position: 'Marketing Assistant',
                        manager: { first_name: 'Shimon', last_name: 'Cohen' }
                    })

                    Avi.save()
                    Moshe.save()
                    Liat.save()
                    Ben.save()
                    Dan.save()
                    Eran.save()
                    Idan.save()
                    Liel.save()
                    Noa.save()
                    Omer.save()
                    Royee.save()
                    res.json({ employees: employees })
                }
                   else{ res.json({employees: employees})}
                
            }
        })
       

    })

}