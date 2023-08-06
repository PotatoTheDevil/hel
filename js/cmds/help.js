export default function(output) {
    output.innerHTML += `\
    
<span data-color="#6ea8f0">Current CMDs:</span>
    <span data-color="pink">help</span> <span data-color="grey">-</span> <span data-color="white">Displays this list.</span>
    <span data-color="pink">clear</span> <span data-color="grey">-</span> <span data-color="white">Clears the terminal.</span>
    <span data-color="pink">neofetch</span> <span data-color="grey">-</span> <span data-color="white">View system information.</span>
    <span data-color="pink">lain</span> <span data-color="grey">-</span> <span data-color="white">Let's all love Lain.</span>
    <span data-color="pink">history</span> <span data-color="grey">-</span> <span data-color="white">Prints Your Command History.</span>
    <span data-color="pink">cowsay</span> <span data-color="grey">-</span> <span data-color="white">Make a cow speak!</span> 
    <span data-color="pink">hostname</span> <span data-color="grey">-</span> <span data-color="white">Eye Spy</span>   
    <span data-color="pink">echo [text]</span> <span data-color="grey">-</span> <span data-color="white">Prints [text].</span>
    <span data-color="pink">eval [code]</span> <span data-color="grey">-</span> <span data-color="white">Eval [code] As JS. | EX: "eval 2+2" returns 4</span>
    <span data-color="pink">cute [name]</span> <span data-color="grey">-</span> <span data-color="white">View how cute someone is :3</span>

`;
}
