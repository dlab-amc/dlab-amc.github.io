$(document).ready(function () {
  $('.nav-link-research').click(function (e) {
    var linkText = $(this).text().toLowerCase();
    var section = linkText.substring(0, linkText.indexOf(' '));
    var type = linkText.substring(linkText.indexOf(' ') + 1).toLowerCase();

    e.preventDefault();
    toggleParagraph(section, type);
  });
});

function toggleParagraph(sectionId, type) {
  var paperParagraph = $('#' + sectionId + '-paper');
  var patentParagraph = $('#' + sectionId + '-patent');

  var deferred = $.Deferred();

  if (type === 'paper') {
    if (patentParagraph.is(':visible')) {
      patentParagraph.slideUp(800, function () {
        paperParagraph.slideToggle(800, deferred.resolve);
      });
    } else {
      paperParagraph.slideToggle(800, deferred.resolve);
    }
  } else if (type === 'patent') {
    if (paperParagraph.is(':visible')) {
      paperParagraph.slideUp(800, function () {
        patentParagraph.slideToggle(800, deferred.resolve);
      });
    } else {
      patentParagraph.slideToggle(800, deferred.resolve);
    }
  }

  // $.when(deferred).done(function () {
  //     // Code to execute after the animation is complete (if needed)
  // });
}

document.addEventListener('DOMContentLoaded', function () {
  var researchHeader = document.querySelector('.text-over-image');
  // 헤더를 부드럽게 나타내기 위해 setTimeout 사용
  setTimeout(function () {
    researchHeader?.classList.add('visible-header');
  }, 777); // 100ms 딜레이를 주어 부드럽게 표현
});
