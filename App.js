let counter = 0;
let RedisConsole = document.getElementById("RedisConsole");
data = {}

onload = () =>{
    make_new_session();
}

make_new_session =()=>{
    let session = document.createElement("div");
    session.setAttribute("class","session");

    let port = document.createElement("label");
    port.setAttribute("style", "color:white");
    port.innerText = '127.0.0.1:6379>'

    let inputLine = document.createElement("div");
    inputLine.setAttribute("id","inputLine")
    inputLine.appendChild(port)

    let userInput = document.createElement("input");
    userInput.setAttribute("id",counter );
    userInput.setAttribute("type", "text");
    userInput.autofocus= true;
    inputLine.appendChild(userInput)

    let outputLine = document.createElement("p");
    outputLine.setAttribute("id",`output_line${counter}`)
    outputLine.setAttribute("style", "color:white");

    session.appendChild(inputLine);
    session.appendChild(outputLine);
    RedisConsole.appendChild(session);
    RedisConsole.setAttribute("onclick","inputFocus()")

    userInput.addEventListener(
        "keyup" ,
        (event)=> {
        doAction(event)
    });
}

doAction=(event)=>{
    if (event.key === "Enter") {
        // parse the input and then show some output and create new element
        let user_input = document.getElementById(counter).value;
        if (user_input !== ""){
            check_input(user_input)
            execute(user_input)
        }
        document.getElementById(counter).disabled = true;
        counter++;
        make_new_session()
        RedisConsole.scrollTop = RedisConsole.scrollHeight;
    }

}

inputFocus =()=>{
    document.getElementById(counter).focus();
}


