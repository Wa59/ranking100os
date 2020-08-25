window.dataLayer = window.dataLayer || [];
function gtag() {
dataLayer.push(arguments);
}
gtag('js', new Date());

// Add custom UA-CODE here

// Code for ALL sites
// NEVER REMOVE THIS CODE
gtag('config', 'UA-64393643-25');
gtag('config', 'UA-64393643-1', {
    linker: {
        domains: [
      '100os.net',
      '100os.app',
			'100os.events',
			'startup.openstartups.net',
			'app.openstartups.net',
			'admin.openstartups.net',
			'dashboard.openstartups.net',
			'www.openstartups.net',
			'www.oiweek.com',
			'oiweek.com',
			'www.opentechs.net',
			'emerge.openstartups.net',
			'www.eventbrite.com.br',
			'www.eventbrite.com'
        ]
    }
});
var trackOutboundLink = function(url) {
    gtag('event', 'click', {
        event_category: 'outbound',
        event_label: url,
        transport_type: 'beacon',
        event_callback: function() {
            document.location = url;
		}
	});
};