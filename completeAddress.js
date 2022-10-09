function addressAutocomplete(container) {
  let inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute(
    'placeholder',
    'Enter your correct address (eg. Meenawati marg, Lucknow, 209087)'
  );
  container.appendChild(inputElement);

  let clearButton = document.createElement('div');
  clearButton.classList.add('clear-button');
  addIcon(clearButton);
  clearButton.addEventListener('click', (e) => {
    e.stopPropagation();
    inputElement.value = '';
    clearButton.classList.remove('visible');
    closeDropDownList();
  });
  container.appendChild(clearButton);

  let currentItems;
  let currentPromiseReject;
  let focusedItemIndex;

  inputElement.addEventListener('input', function () {
    let currentValue = this.value;

    closeDropDownList();

    if (currentPromiseReject) {
      currentPromiseReject({
        canceled: true,
      });
    }

    if (!currentValue) {
      clearButton.classList.remove('visible');
      return false;
    }

    clearButton.classList.add('visible');

    let promise = new Promise((resolve, reject) => {
      currentPromiseReject = reject;

      let apiKey = '904f9ba57a344e0ab639c46fc67ecb94'; // or your API key
      let url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
        currentValue
      )}&limit=5&apiKey=${apiKey}`;

      fetch(url).then((response) => {
        if (response.ok) {
          response.json().then((data) => resolve(data));
        } else {
          response.json().then((data) => reject(data));
        }
      });
    });

    promise.then(
      (data) => {
        currentItems = data.features;

        let autocompleteItemsElement = document.createElement('div');
        autocompleteItemsElement.setAttribute('class', 'autocomplete-items');
        container.appendChild(autocompleteItemsElement);

        data.features.forEach((feature, index) => {
          var itemElement = document.createElement('DIV');
          itemElement.innerHTML = feature.properties.formatted;

          itemElement.addEventListener('click', function () {
            inputElement.value = currentItems[index].properties.formatted;

            closeDropDownList();
          });

          autocompleteItemsElement.appendChild(itemElement);
        });
      },
      (err) => {
        if (!err.canceled) {
          console.log(err);
        }
      }
    );
  });

  inputElement.addEventListener('keydown', function (e) {
    let autocompleteItemsElement = container.querySelector(
      '.autocomplete-items'
    );
    if (autocompleteItemsElement) {
      let itemElements = autocompleteItemsElement.getElementsByTagName('div');
      if (e.keyCode == 40) {
        e.preventDefault();
        focusedItemIndex =
          focusedItemIndex !== itemElements.length - 1
            ? focusedItemIndex + 1
            : 0;
        setActive(itemElements, focusedItemIndex);
      } else if (e.keyCode == 38) {
        e.preventDefault();

        focusedItemIndex =
          focusedItemIndex !== 0
            ? focusedItemIndex - 1
            : (focusedItemIndex = itemElements.length - 1);
        setActive(itemElements, focusedItemIndex);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (focusedItemIndex > -1) {
          closeDropDownList();
        }
      }
    } else {
      if (e.keyCode == 40) {
        let event = document.createEvent('Event');
        event.initEvent('input', true, true);
        inputElement.dispatchEvent(event);
      }
    }
  });

  function setActive(items, index) {
    if (!items || !items.length) return false;

    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('autocomplete-active');
    }

    /* Add class "autocomplete-active" to the active element*/
    items[index].classList.add('autocomplete-active');

    // Change input value and notify
    inputElement.value = currentItems[index].properties.formatted;
  }

  function closeDropDownList() {
    let autocompleteItemsElement = container.querySelector(
      '.autocomplete-items'
    );
    if (autocompleteItemsElement) {
      container.removeChild(autocompleteItemsElement);
    }

    focusedItemIndex = -1;
  }

  function addIcon(buttonElement) {
    let svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    svgElement.setAttribute('viewBox', '0 0 24 24');
    svgElement.setAttribute('height', '24');

    let iconElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    iconElement.setAttribute(
      'd',
      'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
    );
    iconElement.setAttribute('fill', 'currentColor');
    svgElement.appendChild(iconElement);
    buttonElement.appendChild(svgElement);
  }

  /* Close the autocomplete dropdown when the document is clicked. 
  	Skip, when a user clicks on the input field */
  document.addEventListener('click', function (e) {
    if (e.target !== inputElement) {
      closeDropDownList();
    } else if (!container.querySelector('.autocomplete-items')) {
      // open dropdown list again
      var event = document.createEvent('Event');
      event.initEvent('input', true, true);
      inputElement.dispatchEvent(event);
    }
  });
}

addressAutocomplete(document.getElementById('autocomplete'));
