import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';

export function ForgotPasswordScreen() {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    reset({
      title: 'As instruções para resetar sua senha foram enviadas!',
      description:
        'Um email com as informações para resetar a sua senha foi enviado, em alguns minutos você deve recebe-lo. Por favor, siga os passos para resetar a sua senha!',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Recuperar Senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Entre com o seu email registrado que enviaremos os próximos passos para
        resetar a sua senha!
      </Text>
      <FormTextInput
        control={control}
        name="email"
        boxProps={{mb: 's40'}}
        label="Email"
        placeholder="Type your email"
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar Senha"
      />
    </Screen>
  );
}
