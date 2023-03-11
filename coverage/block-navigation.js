/* eslint-disable */
const jumpToCode = (function init() {
  // Classes of code we would like to highlight in the file view
  const missingCoverageClasses = ['.cbranch-no', '.cstat-no', '.fstat-no'];

  // Elements to highlight in the file listing view
  const fileListingElements = ['td.pct.low'];

  // We don't want to select elements that are direct descendants of another match
  const notSelector = `:not(${missingCoverageClasses.join('):not(')}) > `; // becomes `:not(a):not(b) > `

  // Selecter that finds elements on the page to which we can jump
  const selector = `${fileListingElements.join(', ')
  }, ${
    notSelector
  }${missingCoverageClasses.join(`, ${notSelector}`)}`; // becomes `:not(a):not(b) > a, :not(a):not(b) > b`

  // The NodeList of matching elements
  const missingCoverageElements = document.querySelectorAll(selector);

  let currentIndex;

  function toggleClass(index) {
    missingCoverageElements
      .item(currentIndex)
      .classList.remove('highlighted');
    missingCoverageElements.item(index).classList.add('highlighted');
  }

  function makeCurrent(index) {
    toggleClass(index);
    currentIndex = index;
    missingCoverageElements.item(index).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }

  function goToPrevious() {
    let nextIndex = 0;
    if (typeof currentIndex !== 'number' || currentIndex === 0) {
      nextIndex = missingCoverageElements.length - 1;
    } else if (missingCoverageElements.length > 1) {
      nextIndex = currentIndex - 1;
    }

    makeCurrent(nextIndex);
  }

  function goToNext() {
    let nextIndex = 0;

    if (
      typeof currentIndex === 'number'
            && currentIndex < missingCoverageElements.length - 1
    ) {
      nextIndex = currentIndex + 1;
    }

    makeCurrent(nextIndex);
  }

  return function jump(event) {
    if (
      document.getElementById('fileSearch') === document.activeElement
            && document.activeElement != null
    ) {
      // if we're currently focused on the search input, we don't want to navigate
      return;
    }

    switch (event.which) {
      case 78: // n
      case 74: // j
        goToNext();
        break;
      case 66: // b
      case 75: // k
      case 80: // p
        goToPrevious();
        break;
    }
  };
}());
window.addEventListener('keydown', jumpToCode);
