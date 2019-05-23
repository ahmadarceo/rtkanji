const scriptElem = document.createElement('script');
scriptElem.text = `
  (function initialize() {
    var CHECK_ID = 'check-answer';
    var checkButtonElem = document.getElementById(CHECK_ID);

    var QUESTION_ID = 'question';
    var questionElem = document.getElementById(QUESTION_ID);

    var observer = new MutationObserver(function(mutations) {
      if (!checkButtonElem.disabled) {
        var translationElem = document.querySelector('#detailed-history > div');

        if (translationElem) {
          console.log(); // sentence to do
          console.log(); // translation to do
        }
      }
    });

    var config = {
      attributes: true,
      childList: true,
      characterData: true
    };

    observer.observe(questionElem, config);
  })();
`;

document.head.insertBefore(scriptElem, document.head.firstChild);

// questionElem.addEventListener('onchange', function(e) {
//   alert("yoees");
// }, false);