import { connect } from "../config/mysqlconnector";


export async function query(query: string): Promise<Response | any>{

    const connection = await connect();
    let rows = await connection.query(query);
   
    if(rows[0]){
        // connection.end();
        return rows[0];
    }
    else{
        // connection.end();
        return {};
    }
}