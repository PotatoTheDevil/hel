export default function(output, _hist, ...args) {
    try {
        if (args.length === 0) {
            output.innerHTML += '<span data-color="#6ea8f0">Please provide a valid argument.</span>';
            return;
          }

        output.innerHTML += eval(args.join(" "));
    } catch (e) {
        output.innerHTML += '<span data-color="#6ea8f0">' + e + '</span>'
    }
}