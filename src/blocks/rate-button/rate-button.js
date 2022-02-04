let rateButtonCollection = document.getElementsByClassName('rate-button');
console.log(rateButtonCollection);

let i=0;
[...rateButtonCollection].forEach(function(element){
    let newClassName = '';
    newClassName = element.classList[0] + "_" + String(i);
    element.classList.add(newClassName);

    let newFieldset = document.createElement('fieldset');
    newFieldset.classList.add("rate-button__fieldset");
    newClassName = "rate-button__fieldset_" + String(i);
    newFieldset.classList.add(newClassName);
    element.append(newFieldset);

    console.log(element.className);

    for (let j=5; j>=1; j--) {
        let newInput = document.createElement('input');
        newInput.type = "radio";
        newInput.name = newClassName + "_input";
        newInput.value = String(j);
        newInput.classList.add("rate-button__fieldset_input");
        newInput.setAttribute("id", newClassName + "_value_" + String(j));
        newFieldset.append(newInput);

        let newLabel = document.createElement('label');
        newLabel.title = String(j);
        newLabel.classList.add("rate-button__fieldset_label");
        newLabel.setAttribute("for", newClassName + "_value_" + String(j));
        newFieldset.append(newLabel);
    }

    i++;
})