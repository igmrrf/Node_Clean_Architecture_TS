#!/bin/bash  

## PARAMETERS [$1 $2] for example: to create route files for payment

## run `bash ./create.sh payments Payment`

# 1. Create Route Folder
mkdir -p -v src/containers/$1/spec
mkdir -p -v src/app/$1

# 2. Create Crud Files
touch src/app/$1/Create$2.js
touch src/app/$1/Delete$2.js
touch src/app/$1/Get$2.js
touch src/app/$1/Get$2s.js
touch src/app/$1/Update$2.js


# 3. Create spec files
touch src/containers/$1/spec/$2Repository.spec.js
touch src/containers/$1/spec/$2.spec.js
touch src/containers/$1/spec/MOCK_DATA.js

# 2. Create CRUD Files
touch src/containers/$1/$2Controller.js
touch src/containers/$1/$2Entity.js
touch src/containers/$1/$2Model.js
touch src/containers/$1/$2Repository.js
touch src/containers/$1/$2Route.js
touch src/containers/$1/$2Validation.js

node src/scripts/gen/index.js $1 $2


