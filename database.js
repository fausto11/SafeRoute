import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()

const pool =mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        user:process.env.MYSQL_USER,
        password:process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DATABASE
    })
    .promise();


export async function getUserByID(id){
    const [rows]=await pool.query(
        `
        SELECT * FROM users WHERE id=?;
        `,
        [id]
    );
    return rows[0];
}

export async function getUserByEmail(email){
    const [rows]=await pool.query(
        `
        SELECT * FROM users WHERE email=?;
        `,
        [email]
    );
    return rows[0];
}



export async function getReports(id){
    const [row] = await pool.query(
        `SELECT * FROM reports WHERE id=? ;`,
        [id]
    );
    return row[0];
}

export async function reportCompleted(id, value){
    const newValue=value==true ? "TRUE" : "FALSE";
    const [result]= await pool.query(
        `
        UPDATE reports
        SET completed = ${newValue}
        WHERE id=?;
        `
        [id]
    );
    return result;
}

export async function deleteReport(id){
    const [result]= await pool.query(
        `
        DELETE FROM reports WHERE id=?;
        `
        [id]
    );
    return result;
}

export async function createReport(user_id,parroquia,distrito,circuito,delito,hour,shooting,consumo_droga,venta_droga,indice,latitud,longitud,year,location){
    const [result]=await pool.query(
        `
        INSERT INTO reports(user_id,parroquia,distrito,circuito,delito,hour,shooting,consumo_droga,venta_droga,indice,latitud,longitud,year,location)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);
        `,
        [user_id,parroquia,distrito,circuito,delito,hour,shooting,consumo_droga,venta_droga,indice,latitud,longitud,year,location]
    );
    const reportID= result.insertId;
    return getReports(reportID)
}

export async function getSharedReport(crime_report,user_id,shared_with_id){

    const [result] = await pool.query(
        `
        INSERT INTO shared_reports (crime_report,user_id,shared_with_id)
        VALUES (?,?,?);
        `,
        [crime_report,user_id,shared_with_id]
    );
    return result.insertId;
}


export async function getReportsByID(id){
    const [rows]=await pool.query(
        `
        SELECT reports.*, shared_reports.shared_with_id
        FROM reports
        LEFT JOIN shared_reports ON reports.id = shared_reports.crime_report
        WHERE reports.user_id=? OR shared_reports.shared_with_id=?;
        `,
        [id,id]
    );
    return rows;
}
getReports(1)