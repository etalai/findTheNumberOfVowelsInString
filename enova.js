const fs = require('fs');
let arrValues = [];

fs.readFile('enova.txt', function(err, data) {
    if(err) throw err;
    const websites = data.toString().replace(/\r\n/g,'\n').split('\n');
    for(let w of websites) {
        arrValues.push(w)
    }
    arrValues.forEach(values => {
        getCount(values)
    })
});



function getCount(str){
    console.log(`\n"${str} "`)
    let num_A = num_E = num_I = num_O = num_U = 0;
    let num_a = num_e = num_i = num_o = num_u = 0;

    let num_A_bool = num_E_bool = num_I_bool = num_O_bool = num_U_bool = false;
    let num_a_bool = num_e_bool = num_i_bool = num_o_bool = num_u_bool = false;

    let num_A_bool__ = num_E_bool__ = num_I_bool__ = num_O_bool__ = num_U_bool__ = true;
    let num_a_bool__ = num_e_bool__ = num_i_bool__ = num_o_bool__ = num_u_bool__ = true;



    let vowelList = 'AEIOUaeiou'
    let vowelsCount = 0
    let ind = 0

    for(var i = 0; i < str.length; i++){
        if(vowelList.indexOf(str[i]) !== -1){
            if(str[i] === 'A'){
                num_A++;
                num_A_bool = true
            } else if(str[i] === 'E'){
                num_E++;
                num_E_bool = true
            } else if(str[i] === 'I'){
                num_I++;
                num_I_bool = true
            } else if(str[i] === 'O'){
                num_O++;
                num_O_bool = true
            } else if(str[i] === 'U'){
                num_U++;
                num_U_bool = true
            } else if(str[i] === 'a'){
                num_a++;
                num_a_bool = true
            } else if(str[i] === 'e'){
                num_e++;
                num_e_bool = true
            } else if(str[i] === 'i'){
                num_i++;
                num_i_bool = true
            } else if(str[i] === 'o'){
                num_o++;
                num_o_bool = true
            } else if(str[i] === 'u'){
                num_u++;
                num_u_bool = true
            }
        }
    }

    let arr = [num_A, num_E, num_I, num_O, num_U, num_a, num_e, num_i, num_o, num_u]
    let vowelsArr = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    let newArr = []

    vowelsCount = arr[0]

    arr.forEach(function(elem,index){
        if(vowelsCount < elem){
            vowelsCount = elem
            ind = vowelsArr[index]
            newArr.length = index
        }
    })

    if(ind === 'A'){
        num_A_bool__ = false
    }
    if(ind === 'E'){
        num_E_bool__ = false
    }
    if(ind === 'I'){
        num_I_bool__ = false
    }
    if(ind === 'O'){
        num_O_bool__ = false
    }
    if(ind === 'U'){
        num_U_bool__ = false
    }
    if(ind === 'a'){
        num_a_bool__ = false
    }
    if(ind === 'e'){
        num_e_bool__ = false
    }
    if(ind === 'i'){
        num_i_bool__ = false
    }
    if(ind === 'o'){
        num_o_bool__ = false
    }
    if(ind === 'u'){
        num_u_bool__ = false
    }


    if(num_A_bool && num_A_bool__){
        console.log(`letter A appears ${num_A} ${num_A == 1 ? 'time' : 'times'}`);
    } 
    if(num_E_bool && num_E_bool__){
        console.log(`letter E appears ${num_E} ${num_E == 1 ? 'time' : 'times'}`);
    } 
    if(num_I_bool && num_I_bool__){
        console.log(`letter I appears ${num_I} ${num_I  ==  1 ? 'time' : 'times'}`);
    } 
    if(num_O_bool && num_O_bool__){
        console.log(`letter O appears ${num_O} ${num_O  ==  1 ? 'time' : 'times'}`);
    } 
    if(num_U_bool && num_U_bool__){
        console.log(`letter U appears ${num_U} ${num_U  ==  1 ? 'time' : 'times'}`);
    } 
    if(num_a_bool && num_a_bool__){
        console.log(`letter a appears ${num_a} ${num_a  ==  1 ? 'time' : 'times'}`);
    } 
    if(num_e_bool && num_e_bool__){
        console.log(`letter e appears ${num_e} ${num_e  ==  1 ? 'time' : 'times'}`);
    }
    if(num_i_bool && num_i_bool__){
        console.log(`letter i appears ${num_i} ${num_i  ==  1 ? 'time' : 'times'}`);
    } 
    if(num_o_bool && num_o_bool__){
        console.log(`letter o appears ${num_o} ${num_o  ==  1 ? 'time' : 'times'}`);
    } 
    if(num_u_bool && num_u_bool__){
        console.log(`letter u appears ${num_u} ${num_u  ==  1 ? 'time' : 'times'}`);
    }


    if(vowelsCount > vowelsCount-1){
        console.log(`letter ${ind} appears the most: ${vowelsCount} times`)
    }
}

