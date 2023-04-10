#!/bin/bash  

## PARAMETERS [$1 $2] for example: to create route files for payment

## run `bash ./create.sh payments Payment`

# 1. Create Route Folder
mkdir -p -v src/containers/$1/spec
mkdir -p -v src/app/$1

# 2. Create Crud Files
touch src/app/$1/Create$2.ts
touch src/app/$1/Delete$2.ts
touch src/app/$1/Get$2.ts
touch src/app/$1/Get$2s.ts
touch src/app/$1/Update$2.ts


# 3. Create spec files
touch src/containers/$1/spec/$2Repository.spec.ts
touch src/containers/$1/spec/$2.spec.ts
touch src/containers/$1/spec/MOCK_DATA.ts

# 2. Create CRUD Files
touch src/containers/$1/$2Controller.ts
touch src/containers/$1/$2Entity.ts
touch src/containers/$1/$2Model.ts
touch src/containers/$1/$2Repository.ts
touch src/containers/$1/$2Route.ts
touch src/containers/$1/$2Validation.ts
touch src/containers/$1/$2Types.ts

npx ts-node src/scripts/gen/index.ts $1 $2


