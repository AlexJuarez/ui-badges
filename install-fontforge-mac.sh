#!/usr/bin/env bash

# in order for this script to work
# you need to install brew
# see https://github.com/sapegin/grunt-webfont#installation
# for full details.

brew link glib pixman cairo gobject-introspection harfbuzz
sudo chown -R $(whoami) /usr/local/lib/
brew install ttfautohint fontforge --with-python
