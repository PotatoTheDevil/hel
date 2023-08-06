export default function(output, _hist, ...args) {
    try {
      const message = args.join(" ");
      const messageLength = message.length;
      const dashes = "-".repeat(messageLength + 2);
  
      const cowSaid = `
  <span data-color="#6ea8f0"> ${dashes}</span>
  <span data-color="#6ea8f0">< </span><span data-color="pink">${message}</span><span data-color="#6ea8f0"> ></span>
  <span data-color="#6ea8f0"> ${dashes}</span><span data-color="white">
      \\   ^__^
      \\   (oo)\\_______
          (__)\\       )\\/\\
              ||----w |
              ||     ||</span>
      `;
      
      output.innerHTML += cowSaid;
    } catch (e) {
      output.innerHTML += '<span data-color="red">' + e + '</span>';
    }
  }
  