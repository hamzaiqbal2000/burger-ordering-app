import styled from 'styled-components'

const Wrapper = styled.section`
  background: #703B09;
  width: 100%;
  height: 8vh;
  display: flex
`
const Image = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px;
`
const Links = styled.p`
  color: white;
  margin-left: 20px;
  font-size: 1.25rem;
`
const Section = styled.div`
  display: flex;
  width: 93%;
  justify-content: flex-end;
  align-items: center;
`
export { Wrapper, Image, Links, Section }
