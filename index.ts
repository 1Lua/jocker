import { Jocker } from "./jocker"
import {Command, Option} from 'commander'

const program = new Command()

program.version('1.0', '-v')
program.addOption(new Option('-c, --category <category>').default('no'))
program.parse()

const options = program.opts()

function showCategories(){
    Jocker.getJokeCategories()
    .then(categories=>{
        console.log('Допустимые категории шуток:', ...categories)
    })
    .catch(console.log)
}

if(options.category !== 'no'){
    Jocker.getJokeByCategory(options.category)
    .then(console.log)
    .catch(err=>{
        switch(err){
            case 'incorrect_category':{
                console.log('Выбранная категория не существует!')
                showCategories()
                break
            }
        }
    })
}else{ // пользователь не указал категорию
    console.log('Необходимо указать категорию шутки!')
    showCategories()
}