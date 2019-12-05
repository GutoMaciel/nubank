import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={26} color="#666" />
            <Icon name="visibility-off" size={26} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 74.856.928,33</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferencia de R$98.000,00 recebida de Elon Musk (Mentoria)
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
