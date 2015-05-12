// ==UserScript==
// @name       Add show/hide to Bitbucket
// @namespace  https://github.com/adonomay
// @version    0.1
// @description  enter something useful
// @match      https://bitbucket.org/*pull-request*
// @copyright  2014, Adam Gardner
// ==/UserScript==

window.setTimeout(function() {
    // console.log('running show/hide');
    
    var contentToMinimize = '.refract-container, .content-container';

	var htmlToAdd = function(index) {
		return '&nbsp;&nbsp;<span style="font-weight:bold; cursor:pointer" class="diff-minimizer" data-index="' + index + '">hide</span>';
	}
	$('h1.filename').append(htmlToAdd);
    
    $('h1.filename .diff-minimizer').click(function() {
        $(this).closest('.diff-container').find(contentToMinimize).toggle();
        var newText = $(this).text() === 'hide' ? 'show' : 'hide';
        $(this).text(newText);
    });
}, 10000); // wait 10 seconds for slow loading of big PRs
