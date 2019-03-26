import React from 'dom-chef';
import elementReady from 'element-ready';
import features from '../libs/features';

async function init() {
	await elementReady('.CodeMirror'); // *Not* safeElementReady
	document.head.append(<script src={browser.runtime.getURL('resolve-conflicts.js')}/>);
}

features.add({
	id: 'resolve-conflict',
	include: [
		features.isConflict
	],
	load: features.onAjaxedPages,
	init
});