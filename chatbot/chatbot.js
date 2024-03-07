const { dialogflow } = require("actions-on-google");
const dialogflows=require("dialogflow")
const { text } = require("body-parser");
const { googleProjectId } = require("../config/devkey");
const config = require("../config/devkey")

// const privateKey = config.googlePrivateKey;
const projectId=config.googleProjectId

const credentials ={
    client_email :config.googleClientEmail,
    private_key:config.googlePrivateKey
}
const sessionClient = new dialogflows.SessionsClient({projectId,credentials})

const textQuery = async(userText,userId)=>{
    const sessionPath= sessionClient.sessionPath(projectId,userId)
    const request={
        session : sessionPath,
        queryInput:{
            text:{
                text:userText
            }
        }
    }
    try{
        const response= await sessionClient.detectIntent(request)
        console.log(response)
        return response
    }catch(e){
        console.log(e)
        return e;
    }
}

module.exports={
    textQuery}