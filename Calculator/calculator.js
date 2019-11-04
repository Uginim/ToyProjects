var calculators = document.querySelectorAll(".calculator");

if(calculators) {
    Array.prototype.map.call(calculators,function(calculator){
        var display = calculator.querySelector(".display");
        display.value = "0";
        var memory = calculator.querySelector(".memory");
        var curOperator = calculator.querySelector(".operator");        
        var isInputedWholeDigit = true;
        var PLUS = '+';
        var MINUS = '-';
        var MULTIPLICATION_SYMBOL = '×';
        var DIVISION_SYMBOL = '÷';
        var EQUAL_SYMBOL ='=';
        var LEFTARROW_SYMBOL ='←';
        console.log(display)
        var buttons = calculator.querySelectorAll(`input[type="button"]`);
        function finishExpression(){            
            var result = calculate();
            if(result){
                display.value = result;
            }
            isInputedWholeDigit = true;
            clearOnlyMemories();
        }
        function clearOnlyMemories(){
            memory.value="";
            curOperator.value="";
            isInputedWholeDigit = true;
        }
        function calculate(){
            var op1 = parseInt(memory.value);
            var op2 = parseInt(display.value);
            if(curOperator.value===PLUS){                
               return op1+op2;
            }
            if(curOperator.value===MINUS){
                console.log(op1,op2);
                return op1-op2;
            }
            if(curOperator.value===MULTIPLICATION_SYMBOL){
                return op1*op2;
            }
            if(curOperator.value===DIVISION_SYMBOL){
                return op1/op2;
            }
        }
        function doOperation(symbol){
            var result;
            if(memory.value === ""){
                memory.value = display.value;                         
            }else {
                result = calculate();     
                memory.value = display.value=result;         
            }            
            isInputedWholeDigit=true;
            curOperator.value = symbol
        }        
        function clearAll(){
            display.value="0";
            memory.value="";
            curOperator.value="";                 
            isInputedWholeDigit=true;
        }
        function clearDisplay(){
            display.value="0";            
            isInputedWholeDigit=true;
        }
        function doBackspace(){
            if(display.value.length>1)
                display.value=display.value.slice(0,display.value.length-1);
            else {
                clearDisplay();
            }
                
        }
        function inputDigit(digit){
            if(isInputedWholeDigit){
                display.value="";
                isInputedWholeDigit=false;
            }
            display.value= display.value+digit;
        }
        function isDigit(str){
            var CODE_ZERO = "0".charCodeAt(0);
            var CODE_NINE = "9".charCodeAt(0);
            var code;
            var i;
            for(i=0;i<str.length;i++){
                code = str.charCodeAt(i);
                if(!(CODE_ZERO<= code && code <= CODE_NINE))
                    return false;
            }
            return true;
        }
        Array.prototype.map.call(buttons, function(button){
            
            if(isDigit(button.value)) {
                button.addEventListener('click',(e)=>{                
                    inputDigit(button.value);
                });
            }
            if(button.value==="C"){
                button.addEventListener('click',(e)=>{                
                    clearAll(button.value);
                });
            }
            if(button.value===PLUS){
                button.addEventListener('click',(e)=>{                    
                    doOperation(PLUS);
                });
            }
            if(button.value===MINUS){
                button.addEventListener('click',(e)=>{  
                    doOperation(MINUS);                                  
                });
            }
            if(button.value===DIVISION_SYMBOL){
                button.addEventListener('click',(e)=>{                
                    doOperation(DIVISION_SYMBOL);                    
                });
            }
            if(button.value===MULTIPLICATION_SYMBOL){
                button.addEventListener('click',(e)=>{                
                    doOperation(MULTIPLICATION_SYMBOL);                    
                });
            }
            if(button.value===EQUAL_SYMBOL){
                button.addEventListener('click',(e)=>{                
                    finishExpression();
                });
            }
            if(button.value===LEFTARROW_SYMBOL){
                button.addEventListener('click',(e)=>{                
                    doBackspace();
                });
            }
        });
    });
}