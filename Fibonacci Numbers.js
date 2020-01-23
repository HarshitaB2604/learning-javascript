var MAX = 1000;

function start()
{
    var num1 = 1;
    var num2 = 1;
    
    var fibNum = 0;
    while(fibNum < MAX)
    {
        num2 = num1;
        num1 = fibNum;
        
        //prints the fibonacci number
        fibNum = num1 + num2;
        if(fibNum < MAX)
        {
            println(fibNum);
        }
    }
	
}
