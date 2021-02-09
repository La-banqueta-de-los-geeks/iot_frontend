import React from 'react';
import { Card, Container, H1, ButtonActions,ButtonPrimary,ButtonSecondary } from '../../styles'
export default () => {
  return (

    <Container>
      <Card>
        <H1>login</H1>
        <form>
          <input type="email" name="email" id="email" placeholder="email"/>
          <input type="password" name="password" id="password" placeholder="password"/>
          <ButtonActions>
            <ButtonSecondary type="reset">reset</ButtonSecondary>
            <ButtonPrimary type="submit">Crear</ButtonPrimary>
          </ButtonActions>
        </form>
      </Card>
    </Container>

  )
};