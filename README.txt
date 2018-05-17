This module provides functionality to tie acceptance of the EU Cookie
Compliance module's cookie consent popup to the activation of Google Analytics.
With this module, GA will not be active for a user unless and until they
consent to allow tracking cookies from this website. The purpose of this
functionality is to conform to specific GDPR requirements in the EU.


REQUIREMENTS
---------------

On installation,eu_cookie_compliance module  will be installed and configured
automatically if it is not already.

If the EU Cookie Compliance module is already installed and configured, then
this module will override any custom configuration made to it. It's recommended
to save the module configuration e.g. as a feature, or to simply recreate it.
If exporting configuration to a feature, that feature should have this module
as a dependency.

In order for this module to block Google Analytics tracking, GA must be
provided by the google_analytics module, since the GA ID is retrieved from that
module's configuration. Although, if you'd really just like to have the config-
uration and styling for EU Cookie Compliance that comes with this module, you
can use this module independent of Google Analytics.

Developers are encouraged to modify and extend this module to suit theirs and
their clients' needs.

Due to the expectation that developers will need to tweak the module before
deploying it, there are no plans to release this as a contributed module. It
will remain as a simple sandbox project for the foreseeable future.


INSTALLATION
---------------

Copy the module files into sites/all/modules, preferably a subfolder such as
sites/all/modules/custom

Enable the module, accepting downloads of any dependencies.

After installation and clearing caches there should be a consent popup on the
bottom of your site.


CONFIGURATION
---------------

This module's feature exports override the default configuration provided by
the EU Cookie Compliance module in order to conform to a specific interpre-
tation of what is required by GDPR in regards to Google Analytics specifically.
The provided message also uses the site_name system variable for your website's
name. The configuration absolutely needs to be updated in order to bring it in
line with your website's needs. This configuration should be changed either by
editing the .install file prior to enabling the module, or by editing it via the
EU Cookie Compliance administration page and then exporting the changes using
the Strongarm and Features modules.

One feature included in the default configuration is the distinct pop-ups
between mobile and desktop. The mobile version has a "Decline" button, while
the desktop version does not. The logic is that if a user is browsing on a
desktop screen then the cookie pop-up at the bottom does not interfere with them
using the site to the extent that they would feel obligated to agree to allow
cookies in exchange for being able to use the site. On mobile it's a different
story, as the pop-up is likely to take up most of the screen, so they need an
option to immediately decline it. If a portion of the site audience does not
have the option to decline directly from the pop-up, instead having to express
their non-consent by avoiding the impulse to click the "Agree" button, then many
more users would end up agreeing, thus saving the site analytics from a bigger
hit. Whether this would be considered underhanded or a violation of GDPR may
depend on what their analytics data would be used for, e.g. advertising, and
whether the pop-up has a link to a page where a user may explicitly decline
(see also the LEGAL PAGES section of this readme). If in doubt, disable this
feature by unchecking the "Use a different message for mobile phones" checkbox
in the EU Cookie Compliance admin configuration and by removing the @media CSS
rule in css/f1_gdpr.css.

Additionally, if you change the mobile breakpoint in the module configuration,
the mobile breakpoint will also need to be updated in f1_gdpr.css. Add 1 pixel
for the breakpoint that you set.


LEGAL PAGES
---------------

In order to comply with GDPR, you may need to update your Privacy Policy and/or
Cookie Policy pages. You should consult with your legal counsel to determine
what updates will need to be made. On one of these pages, you can also embed a
button to toggle a user's acceptance of site cookies. The code for this is in
includes/toggle_buttons.html. If you are able to embed PHP directly into the
relevant page then you may call the f1_gdpr_embed_toggle_buttons() function.


AUTHORSHIP
---------------

Developed by Andrew Bielefeldt for Forum One Communications Corporation.
https://www.drupal.org/u/caesius

This module was not developed with the intention of eventually becoming a
contributed module. As such it's very rough around the edges and will not be
especially helpful out of the box. However, this also means that developers can
fork or modify this module as needed without worrying about future changes.

Original sandbox page:
https://www.drupal.org/sandbox/caesius/2973123
