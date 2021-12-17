.PHONY: component
component:
	mkdir ${PWD}/src/components/$(name) && \
  echo -e "import { Container } from \x22./style\x22;"\
  "\n"\
  "\nexport function $(name)() {"\
  "\n\treturn ("\
  "\n\t\t<Container>"\
  "\n"\
  "\n\t\t</Container>"\
  "\n\t)"\
  "\n};"\
  > ${PWD}/src/components/$(name)/$(name).tsx && \
  echo -e "import styled from \x22styled-components\x22;"\
  "\n"\
  "\nexport const Container = styled.div\x60"\
  "\n"\
  "\n\x60;"\
  > ${PWD}/src/components/$(name)/styles.ts &&
