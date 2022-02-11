import { Client, Entity, Repository, Schema, } from "redis-om";


const clinet = new Client();

async function connect() {
    if (!clinet.isOpen()) {
        await clinet.open(process.env.REDIS_URL)
       
    }
}

class Form extends Entity {}

let schema = new Schema(
    Form,
    {
    fullname: {type: 'string', textSearch: true},
    email: {type: 'string'},
    resume: {type: 'string'},   
    },
    {
        dataStructure: 'JSON'
    }
)

export async function createForm(data){
    await connect();

    const repository = new Repository(schema, clinet);

    const form = repository.createEntity(data);

    const id = await repository.save(form);

    console.log(id)
}


export async function createIndex(){
    await connect();
    const repository = new Repository(schema,clinet)
    const data = repository.createIndex()
}

class FeedBack extends Entity{}
let feedbackformschema = new Schema(
    FeedBack,
    {
    formname: {type: 'string'},
    formemail: {type: 'string'},
    formmessage: {type: 'string'}
    },
    {
        dataStructure: 'JSON'
    }
)

export async function createfeedbackForm(data) {
    await connect();
    const repositoryform = new Repository(feedbackformschema, clinet) 
    const feedform = repositoryform.createEntity(data)
    const ids = repositoryform.save(feedform)
    console.log(ids)
};

export async function search(q){
    await connect();

    const repository = new Repository(schema,clinet);
   
    const data = await repository.search();

    return data 
        
    }