#!/bin/bash

# This bash script executes the demo.js program with Node.js

INFILE=data/activity_twin_cities_marathon.tcx
OUTFILE=data/demo.json

grunt # "transpile" the CoffeeScript source code into JavaScript

rm $OUTFILE

echo 'wc of the input file:'
wc $INFILE

node demo.js $INFILE $OUTFILE

echo 'done'
