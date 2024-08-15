const form = document.querySelector('form')
// console.log(form)

// console.log(results);
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')
    //let results;
    if(isNaN(height) || height < 0 || height == ''){
      results.innerHTML = " please enter valid Height"
    }else if(isNaN(weight) || weight < 0 || weight == ''){
      results.innerHTML = " please enter valid Weight"
    }else{
      const bmi = weight/((height*height)/10000).toFixed(2);
      results.innerHTML = `<span>${bmi}</span>`
    }
    // document..style.innerHTML = `Your Body mass index is: ${results}`;

})