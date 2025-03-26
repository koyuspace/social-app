#!/bin/sh
magick convert -background none icon.svg -resize 16x16 favicon-16x16.png
magick convert -background none icon.svg -resize 32x32 favicon-32x32.png
magick convert -background none icon.svg -resize 64x64 favicon.png
magick convert -background none icon.svg -resize 180x180 apple-touch-icon.png