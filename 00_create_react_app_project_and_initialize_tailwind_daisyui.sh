#/bin/bash
echo "################################################################" ; 
echo ">> NOTE: This program will create a CREATE-REACT_APP PROJCT and ..." ; 
echo "...configure TailwindCSS in your chosen React-app project directory." ;
echo "################################################################" ; 

#######################################################################
function confirmUserInput () {
    echo ">> If all is okay, press Y/y key, and press ENTER ..." ;
    read -n1 -p "Do that? [y/Y,n]" doit ; 
    case $doit in  
    y|Y) echo "Alright, the program will proceed ..." ;; 
    n|N) exit 1 ;; 
    *) exit 1 ;; 
    esac
}
########################################################################

echo; echo ">> Creating Create-React-App Project with chosen name. What project name to use? " ;
echo ">> ENTER PROJECT NAME" ; 
read projectName ; 
echo ">> Chosen project directory name = $projectName" ;

## Confirm and create app
confirmUserInput ; 
npx create-react-app ${projectName} ; 

echo "################################################################" ; 
## Select the project directory from the list
echo ">> Choose project directory to install TailWindCSS: " ; 
cd $(fd -t d -d1 | fzf) ;

##############
echo ">> PROJECT DIRECTORY CHOSEN = $(pwd)" ;
confirmUserInput ; 

###############
echo ; 
echo ">> Installing Tailwind CSS ..." ;
npm install -D tailwindcss postcss autoprefixer daisyui ;
npx tailwindcss init -p ;

########################
## Configuring template paths in tailwind.config.js
echo ">> Configuring template paths in tailwind.config.js" ; 
echo "module.exports = {
  content: [
    \"./src/**/*.{js,jsx,ts,tsx}\",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('daisyui'),
  ],
}" > tailwind.config.js ;
########################

## Appending the Tailwind directives to your CSS
echo ">> Appending the Tailwind directives to your CSS" ; 
echo '@tailwind base;
@tailwind components;
@tailwind utilities;' >> ./src/index.css
########################

## Adding example tailwindCSS component in App
echo ">> Adding example tailwindCSS component in App" ; 
echo 'export default function App() {
  return (
  <div>
    <div class="grid grid-cols-10 gap-2">
      <div class="bg-violet-50 aspect-square">TAILWIND TEST</div>
      <div class="bg-violet-100 aspect-square"></div>
      <div class="bg-violet-200 aspect-square"></div>
      <div class="bg-violet-300 aspect-square"></div>
      <div class="bg-violet-400 aspect-square"></div>
      <div class="bg-violet-500 aspect-square"></div>
      <div class="bg-violet-600 aspect-square"></div>
      <div class="bg-violet-700 aspect-square"></div>
      <div class="bg-violet-800 aspect-square"></div>
      <div class="bg-violet-900 aspect-square"></div>
    </div>

    <div class="p-4 lg:p-10 gap-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <div class="card shadow-lg bg-secondary">
        <div class="card-body">
          <h2 class="card-title">no border with shadow</h2> 
          <p>Rerum reiciendis beatae tenetur excepturiRerum reiciendis beatae tenetur </p>
        </div>
      </div>
      <div class="card shadow-lg bg-primary">
        <div class="card-body">
          <h2 class="card-title">no border with shadow</h2> 
          <p>Rerum reiciendis beatae tenetur</p>
        </div>
      </div>
    </div>
  </div>
  )
}' > ./src/App.js ;

## Everything setup
echo ">> Run `npm start` to see TailwindCSS in action ..." ; 