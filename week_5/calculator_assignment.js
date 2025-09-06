const express = require("express");
const app = express();

app.use(express.json());


app.post("/calculator", function(req, res){
    const {num1, num2, operation} = req.body

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Invalid number')
    }
     
    let result;

    switch(operation){
        case 'add':
            result = num1 + num2;
            break;

            case 'substract':
                result =  num1 - num2;
                break;

                case 'multiply':
                    result = num1 * num2;
                    break;

                    case 'Divide':
                        if (num2 == 0) return res.status(400).send('Cannot divide by 0');
                        result = num1 / num2;
                        break;
                      
                    default:
                        return res.status(400).send('Invalid operation');

    }

    res.json({result});
})

app.listen(3000);



