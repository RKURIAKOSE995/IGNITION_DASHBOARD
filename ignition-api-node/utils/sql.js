import { response } from 'express';
import {Connection, Request} from 'tedious';
function makeQuery(query, res) {
    let timeout = 900000;
    var config = {  
        server: 'sqlsvrresprod.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'll_data_read', //update me
                password: 'Ebid&ffVt@3*ZzV2cLyGWgh%p'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'dbresprod',
            requestTimeout: timeout,
            connectTimeout: timeout
            // useColumnNames: true,
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("Connected");  
        executeStatement(query,res);  
    });

    connection.connect();


    function executeStatement(query,res) {  
        var request = new Request(query, function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = [];  
        request.on('row', function(columns) {  
            let val = {}
            columns.forEach(function(column) {
            val[column.metadata.colName] = column.value;
            });
            result.push(val); 
        });  

        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
            console.log('request completed');
            res.send(result);
        });
        connection.execSql(request);  
    } 
}

export default makeQuery;