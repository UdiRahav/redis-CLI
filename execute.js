execute= (user_input)=> {
    user_input = user_input.split(' ')
    const command = user_input[0].toUpperCase()
    const rest_command = user_input.slice(1)
    switch (command) {
        case 'KEYS':
            execute_keys(rest_command[0])
            break;
        case 'DEL':
            execute_delete(rest_command);
            break;
        case 'EXIST':
            execute_exists(rest_command)
            break;
        case 'EXPIRE':
            execute_expire(rest_command[0],rest_command[1])
            break;
        case 'GET':
            execute_get(rest_command[0])
            break;
        case 'SET':
            execute_set(rest_command[0], rest_command[1])
            break;
    }
}

execute_keys =(pattern) =>{
    console.log(pattern)
    let result = []
    result.push('<ol>')
    pattern = pattern !== '*' ?  RegExp(pattern) : pattern ;
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        if (pattern === '*' || keys[i].match(pattern) ) {
            result.push('<li>')
            result.push(keys[i]);
            result.push('</li>')
        }
    };
    result.push('</ol>')
    document.getElementById(`output_line${counter}`).innerHTML = result.length == 2 ? "(empty list or set)" : result.join("")
}

execute_delete =(keys)=>{
    let counter = 0
    for (let i = 0; i < keys.length; i++){
        if (data[keys[i]] !== undefined){
            delete data[keys[i]]
            counter++;
        }
    }
    document.getElementById(`output_line${counter}`).innerText = `(integer) ${counter}`;
}

execute_exists =(keys)=>{
    let counter = 0
    for (let i = 0; i < keys.length; i++){
        if (data[keys[i]] !== undefined){
            counter++;
        }
    }
    document.getElementById(`output_line${counter}`).innerText = `(integer) ${counter}`;
}

execute_expire =(key,seconds)=>{
    if(data[key] === undefined){
        document.getElementById(`output_line${counter}`).innerText = `(integer) 0`;
        return;
    }
    setTimeout(()=>{
        delete data[key];
    },seconds * 1000)
    document.getElementById(`output_line${counter}`).innerText = `(integer) 1`;
}

execute_get= (key)=>{
    const keyExist = data[key] !== undefined
    document.getElementById(`output_line${counter}`).innerText = keyExist ? `\\"${data[key]}\\"` : "(nil)";
}

execute_set =(key,value)=>{
    data[key]= value;
    document.getElementById(`output_line${counter}`).innerText = "OK";
}