import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #CF8F2E;
  padding: 30px;
`

const Text = styled.h3`
  font-size: 1.2rem;
`

const Outerdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`
const Innerdiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`

const Buton = styled.button`
  background-color: ${props => props.primary ? '#ac9980' : '#8f5e1e'};
  border: 1px solid #7e7365;
  color: #ccc;
  width: ${props => props.end ? '10rem' : '5rem'};
  height: 2rem;
  font-size: 1.2rem;
  margin-left: 10px;
`

export { Wrapper, Text, Outerdiv, Innerdiv, Buton }
