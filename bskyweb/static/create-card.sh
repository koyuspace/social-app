#!/bin/sh
magick \( -size 1200x630 gradient:"#551A8B"-"#E6399B" \) \
    logo.png -resize 480x480 -gravity center -composite social-card-default.png
cp social-card-default.png social-card-default-gradient.png