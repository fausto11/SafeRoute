import express from "express";

import {
    getUserByID,
    getUserByEmail,
    getSharedReport,
    getReports,
    getReportsByID,
    reportCompleted,
    deleteReport,
    createReport,

}from "./database.js";
import cors from "cors";

const corsOptions = {
    origin: "exp://192.168.100.137:19000", // Remove the space after the URL
    methods: ["POST", "GET","PUT"],
    credentials: true,
};

const app=express();
app.use(express.json());
app.use(cors(corsOptions));

app.get("/reports/:id",async(req,res)=>{
    const reports=await getReportsByID(req.params.id)
    res.status(200).send(reports);
})

app.get("/reports/shared_reports/:id",async(req,res)=>{
    const report=await getReportsByID(req.params.id);
    const author= await getUserByID(report.id);
    const shared_with= await getUserByID(report.shared_with_id)

    res.status(200).send({author,shared_with});
});

app.get("/users/:id", async(req,res)=>{
    const user=await getUserByID(req.params.id);
    res.status(200).send(user);
});

app.put("/reports/:id",async(req,res)=>{
    const {value}=req.body;
    const report= await reportCompleted(req.params.id,value);
    res.status(200).send(report);
});

app.delete("/reports/:id",async(req,res)=>{
    await deleteReport(req.params.id);
    res.send({message:"Report deleted successfully"});
});

app.post("/reports/shared_reports",async(req,res)=>{
    const {report_id,user_id,email}=req.body;
    const userToShare= await getUserByEmail(email);
    const sharedReport= await getSharedReport(report_id,user_id,userToShare.id)
    res.status(201).send(sharedReport);
});

app.post("/reports",async(req,res)=>{
    const {user_id,parroquia,distrito,circuito,delito,hour,shooting,consumo_droga,venta_droga,indice,latitud,longitud,year,location}=req.body;
    const report=await createReport(user_id,parroquia,distrito,circuito,delito,hour,shooting,consumo_droga,venta_droga,indice,latitud,longitud,year,location)
    res.status(201).send(report);
});

app.listen(5143,()=>{
    console.log("Server runing on port 5143");
})