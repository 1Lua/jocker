import { Jocker } from "../jocker";

const N: number = 10

async function main(){
    console.time()
    let proms = []
    for(let i = 0; i < N; i++){
        
        let prom = Jocker.getJoke()

        prom.then(joke=>{
            console.log(joke + '\n\n')
        })
        prom.catch(console.log)

        proms.push(prom)
    }
    await Promise.all(proms)
    console.timeEnd()
}

main()