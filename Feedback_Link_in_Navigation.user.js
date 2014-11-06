// ==UserScript==
// @name           GameFAQs Feedback Link in Navigation
// @namespace      OTACON120
// @author         OTACON120
// @version        1.2
// @description    Adds a direct link to the GameFAQs feedback system into the site navigation
// @updateURL      https://greasyfork.org/scripts/616-gamefaqs-feedback-link-in-navigation/code/GameFAQs%20Feedback%20Link%20in%20Navigation.meta.js
// @downloadURL    https://greasyfork.org/scripts/616-gamefaqs-feedback-link-in-navigation/code/GameFAQs%20Feedback%20Link%20in%20Navigation.user.js
// @website        http://otacon120.com/user-scripts/gamefaqs-related/feedback-link-in-navigation/
// @include        http://www.gamefaqs.com/*
// @match          http://www.gamefaqs.com/*
// @grant          none
// ==/UserScript==

var feedbackLink = document.createElement('a'),
	navigation   = document.querySelector( '.masthead_nav nav' ),
	navLinks     = Array.prototype.slice.call( navigation.querySelectorAll( 'a' ) );

// Sort links alphabetically
function sortLinkText( a, b ) {
	if ( a.innerHTML < b.innerHTML ) {
		return -1;
	}

	if ( a.innerHTML > b.innerHTML ) {
		return 1;
	}

	return 0;
}

// Recreate navigation with newly added link and re-alphabetization
function rebuildNav( el ) {
	navigation.appendChild( el );
}

feedbackLink.href      = '/features/feedback/';
feedbackLink.innerHTML = 'Feedback';
navLinks.push( feedbackLink );
navLinks.sort( sortLinkText );
navigation.innerHTML = '';

navLinks.forEach( rebuildNav );
