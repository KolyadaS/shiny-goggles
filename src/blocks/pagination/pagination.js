// import { hotelRooms } from '../../hotelRooms.js';
export default paginate;


function paginate(parentNode, htmlCollectionForPaginating){

    let elementsOnPage = 6;
    let currentPage = 1;
    let className = 'page_';

    // const elems = hotelRooms;
    const elems = document.getElementsByClassName('room');
    const myArray = Array.prototype.slice.call(elems);
    const wrapperDiv = document.querySelector('.rooms-wrapper');
    const paginationButtons = document.querySelector('.pagination__buttons');
    const paginationLabel = document.querySelector('.pagination__label');
    wrapperDiv.innerHTML = "";
    
    displayPage(myArray, wrapperDiv, elementsOnPage, currentPage);
    setupPagination(myArray, paginationButtons, elementsOnPage);



    function displayPage (items, wrapper, elemsPerPage, page) {
        wrapperDiv.innerHTML = "";
        page--;

        let start = elementsOnPage * page;
        let end = start + elemsPerPage;
        let paginatedItems = items.slice(start, end);

        for (let i=0; i<paginatedItems.length; i++) {
            let item = paginatedItems[i];
            console.log(item);

            let itemDiv = item;
            // itemDiv.style.border = "2px solid yellowgreen";
            wrapper.appendChild(itemDiv);
        }

        updatePaginationLabel(currentPage, items, paginationLabel);
    }

    function setupPagination (items, wrapper, elemsPerPage) {
        wrapper.innerHTML = "";

        let pageCount = Math.ceil(items.length/elementsOnPage);
        for (let i=1; i<pageCount+1; i++) {
            let btn = paginationButton(i, items);
            wrapper.appendChild(btn);
        }

        createNextButton(wrapper, currentPage, items);
    }

    function createNextButton(wrapper, page, items) {
        let nextButton = document.createElement('button');
        nextButton.classList.add('pagination__button');
        nextButton.classList.add('pagination__button_next');
        wrapper.appendChild(nextButton);

        nextButton.addEventListener('click', function(){
            let currentActiveButton = document.querySelector('.pagination__button_active');
            let newActiveButton = currentActiveButton.nextSibling;
            
            if (currentPage < Math.ceil(items.length/elementsOnPage)) {
                currentPage +=1;
                currentActiveButton.classList.remove('pagination__button_active');
                newActiveButton.classList.add('pagination__button_active');
                updatePaginationLabel(currentPage, items, paginationLabel);
            }
        });
        
    }

    function paginationButton(page, items) {
        let button = document.createElement('button');
        button.classList.add('pagination__button');
        button.innerHTML = page;

        if (currentPage == page) button.classList.add('pagination__button_active');

        button.addEventListener('click', function(){
            currentPage = page;
            displayPage(items, wrapperDiv, elementsOnPage, currentPage);

            let currentBtn = document.querySelector('.pagination__button_active');
            currentBtn.classList.remove('pagination__button_active');

            button.classList.add('pagination__button_active');

            updatePaginationLabel(currentPage, items, paginationLabel);
        });

        return button;
    }

    function updatePaginationLabel(currentPage, elems, wrapper) {
        let startElem = currentPage*elementsOnPage-elementsOnPage+1;
        let endElem = currentPage*elementsOnPage;
        if (endElem > elems.length) endElem = elems.length;
        wrapper.innerHTML = (startElem + '-' + endElem + ' из ' + elems.length + ' вариантов аренды');
    }

}