#/bin/bash

function createComponent(){
  components_dir="${PWD}/src/components"
  component_dir="$components_dir/$1"
  component_name=$1

  if [[ ! -d "$components_dir" ]]
  then
    mkdir "$components_dir"
  fi

  if [[ ! -d "$component_dir" ]]
  then
    mkdir "$component_dir"
  fi

  echo -e "import { Container } from \x27./styles\x27;"\
  "\n"\
  "\nexport function $component_name() {"\
  "\n\treturn ("\
  "\n\t\t<Container>"\
  "\n"\
  "\n\t\t</Container>"\
  "\n\t)"\
  "\n};"\
  > $component_dir/index.tsx

  echo -e "import styled from \x27styled-components\x27;"\
  "\n"\
  "\nexport const Container = styled.div\x60\x60;"\
  > $component_dir/styles.ts
}

$*
