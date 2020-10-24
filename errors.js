

check_input = (user_input) => {
    console.log('check_input')
    const supported_values = ['KEYS', 'DEL', 'EXISTS', 'EXPIRE', 'GET', 'SET']
    user_input = user_input.split(' ')
    const command = user_input[0].toUpperCase()
    console.log(command)
    if (!supported_values.includes(command)) {
        unknown_command_error(user_input[0])
        return;
    }
    switch (command){
        case 'KEYS':
            if(user_input.length !== 2){
                wrong_number_of_arguments_error()
            }
            break;
        case 'DEL':
            if(user_input.length < 2){
                wrong_number_of_arguments_error()
            }
            break;
        case 'EXISTS':
            if(user_input.length < 2){
                wrong_number_of_arguments_error()
            }
            break;
        case 'EXPIRE':
            if(user_input.length !== 3){
                wrong_number_of_arguments_error()
            }

            break;
        case 'GET':
            if(user_input.length !== 2){
                wrong_number_of_arguments_error()
            }
            break;
        case 'SET':
            if(user_input.length !== 3){
                wrong_number_of_arguments_error()
                break;
            }
            integer_validation(user_input[2])
            break;
    }
}
//need to check range
integer_validation =(seconds)=>{
    let pattern = RegExp('[^0-9]');
    if(pattern.test(seconds)){
        document.getElementById(`output_line${counter}`).innerText = `(error) ERR value is not an integer or out of range`
        return;
    }

}
unknown_command_error=(command)=>{
    document.getElementById(`output_line${counter}`).innerText = `(error) ERR unknown command '${command}'`
}

wrong_number_of_arguments_error=(command)=>{
    document.getElementById(`output_line${counter}`).innerText = `(error) ERR wrong number of arguments for '${command}' command`
}

