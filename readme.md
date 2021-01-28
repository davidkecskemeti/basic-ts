# TypeScript instructions

## Setup

npm init

npm install --save-dev lite-server

add "start": "lite-server" to the npm scripts then npm start (for updating the application at any change)

## Core types

- number 1, 5.3, -10 (all numbers, so no difference between integers and floats)
- string 'Hi', "Hi", \`Hi\` (all text values)
- boolean true, false
- object {age: 30} (any js object, more specific types)
- array [1,2,3] (can contain anything)
- tuple [1,2] (fixed length array)
- enum {NEW,OLD}
- any (most flexible type)
- union types ( can be more flexible with params)

## Functions

- return types

## Watch node

app.ts -w

tsc --init

Exclusion in tsconfig.json

exclude[]

    "*.dev.ts" //Any file with .dev.ts ending will be excluded
    "**/*.dev.ts"  //Any file in any directory -||-

Inclusion in tsconfig.json

include[] // will be only included everything else will be exclusded
