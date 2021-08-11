import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.outline ? "white" : "#c52b32"};
  color: ${props => props.outline ? "#c52b32" : "white"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #c52b32;
  border-radius: 3px;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);
  }

`;

export default Button;