import { createsever} from 'node:http';

const hostname = '127.0.0.1';
const port =3000;

const server = createsever((req,res)=>{
    console.log('received request...',req.url,req.method);

    if(req.url =='/') {
        if(req.method == 'GET') {
            res.statuscode = 200;
            res.setHeader('content-Type','text/plain');
            res.setHeader('Access-control-Allow-orgin,'http://127.0.0.1:5500');
            res.setHeader('Access-control-Allow-Methods',"POST,GET,OPTIONS");
            res.setHeader('Access-control-Allow-Header','*');
            res.end('OK');
        }
        if(req.method =='POST') {
            // console.log(req.body());
            console.log('post method...')
            res.statuscode =200;
            res.setHeader('content-type','text/plain');
            res.setHeader('Access-control-Allow-origin',)
        }
    }
}