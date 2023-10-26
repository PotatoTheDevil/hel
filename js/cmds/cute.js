export default function(output, _hist, ...args) {
    try {
      if (args.length === 0) {
        output.innerHTML += '<span data-color="#6ea8f0">Please provide a name as an argument.</span>';
        return;
      }
    
      const name = args[0].toLowerCase();
      const exceptions = ["potato"];
      let rating = 0;
    
      if (exceptions.includes(name)) {
        rating = 100;
      } else {
        // Calculate the rating based on name length
        rating = Math.min(100, Math.floor((name.length / 10) * 100));
      }
    
      const cuteRating = `<span data-color="pink">${args[0]}</span> is <span data-color="#6ea8f0">${rating}%</span> cute.`;
    
      output.innerHTML += cuteRating;
    } catch (e) {
      output.innerHTML += '<span data-color="red">' + e + '</span>';
    }
  }
  
