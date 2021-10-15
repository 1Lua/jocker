import * as https from 'https';

export class Jocker{
    static getJoke(): Promise<string>{
        return new Promise((resolve, reject)=>{
            let data: string = ""
            https.get("https://v2.jokeapi.dev/joke/Any?format=txt", res=>{
                res.on("data", chunk=>{
                    data += chunk
                })

                res.on("end", ()=>{
                    resolve(data)
                })
                
                res.on("error", err=>{
                    reject(err)
                })
                
            })
        })
    }
}