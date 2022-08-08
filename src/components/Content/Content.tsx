import React from "react";

import styles from "./Content.module.scss";
import { Text } from '../Text';
import { Line } from '../Line'
import { Whitecard } from "../WhiteCard";

export const Content: React.FC = () => {
  return (
    <main className={styles.content}>
      <div className={styles.container}>
        <Whitecard color='white' >
          <Text tag='h1' color='accent' font='primary' size='h1'>Заголовок 1</Text>
          <Line color='accent' opacity="o05" />
          <Text tag='h2' color='accent' font='secondary' size='h2'>Заголовок 2</Text>
          <Line color='accent' opacity="o10" />
          <Text tag='h3' color='accent' font='primary' size='h3'>Заголовок 3</Text>
          <Line color='accent' opacity="o25" />
          <Text tag='h4' color='accent' font='secondary' size='h4'>Заголовок 4</Text>
          <Line color='accent' opacity="o50" />
          <Text tag='div' color='black' font='primary' size='large'>Большой текст</Text>
          <Line type='dashed' color='accent' opacity="o100" />
          <Text tag='div' color='black' font='primary' size='body'>Основной текст</Text>
          <Line color='black' opacity="o50" />
          <Text tag='div' color='black' font='primary' size='small'>Маленький текст</Text>
          <Line color='black' opacity="o25" />
          <Text tag='div' color='black' font='primary' size='caption'>Очень маленький текст</Text>
        </Whitecard>
      </div>
    </main>
  );
};
