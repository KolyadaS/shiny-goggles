export default createRateButton;

function createRateButton(id, rateValue, rateButtonDiv, changeableBoolean) {
        let newClassName = '';
        newClassName = rateButtonDiv.classList[0] + "_" + String(id);
        rateButtonDiv.classList.add(newClassName);

        let newFieldset = document.createElement('fieldset');
        newFieldset.classList.add("rate-button__fieldset");
        newClassName = "rate-button__fieldset_" + String(id);       
        newFieldset.classList.add(newClassName);

        rateButtonDiv.append(newFieldset);

        createFiveStars();
        function createFiveStars() {
                let fiveStarsMap = new Map();
                for (let i=1; i<6; i++) {
                        let starDiv = document.createElement('div');
                        starDiv.classList.add("star");
                        starDiv.classList.add("star-value_" + String(i));
                        if ( rateValue >= i ) {
                                starDiv.classList.add("star_checked");
                        }
                        newFieldset.append(starDiv);
                        fiveStarsMap.set(i, starDiv);

                        starDiv.onclick = function () {
                                if (changeableBoolean) {
                                        if (starDiv.classList.contains("star_checked")) {
                                                for (let star of fiveStarsMap.values()) {
                                                                star.classList.remove("star_checked");
                                                }
                                                starDiv.classList.remove("star_checked");
                                        }
                                        else {
                                                for (let star of fiveStarsMap.values()) {
                                                        if (star === starDiv) {
                                                                starDiv.classList.add("star_checked");
                                                                break;
                                                        } else { star.classList.add("star_checked"); }
                                        }
                                }
                        }
                }
        }

  
}
}