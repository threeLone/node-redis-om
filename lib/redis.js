import { Client, Entity, Repository, Schema, } from "redis-om";


const clinet = new Client();

async function connect() {
    if (!clinet.isOpen()) {
        await clinet.open(process.env.[REDIS_URL,URL])
       
    }
}

class Car extends Entity {}

let schema = new Schema(
    Car,
    {
    fullname: {type: 'string', textSearch: true},
    email: {type: 'string'},
    resume: {type: 'string'},   
    },
    {
        dataStructure: 'JSON'
    }
)

export async function createCar(data){
    await connect();

    const repository = new Repository(schema, clinet);

    const car = repository.createEntity(data);

    const id = await repository.save(car);

    console.log(id)
}


export async function createIndex(){
    await connect();
    const repository = new Repository(schema,clinet)
    const data = repository.createIndex()
}


export async function search(q){
    await connect();

    const repository = new Repository(schema,clinet);
   
    const data = await repository.search();

    return data 
        
    }