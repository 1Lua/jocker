import { Jocker } from "../jocker";

const N: number = 10

async function main(){
    console.time()
    for(let i = 0; i < N; i++){
        let joke = await Jocker.getJoke().catch(console.log)
        console.log(joke + '\n\n')
    }
    console.timeEnd()
}

main()