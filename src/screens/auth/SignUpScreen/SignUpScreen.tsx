import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form/';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {SignUpSchema, signUpSchema} from './signUpSchema';

export function SignUpScreen() {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    reset({
      title: 'Sua conta foi criada!',
      description: 'Agora você pode logar na aplicação',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen scrollable canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar minha conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        boxProps={{mb: 's20'}}
        label="Seu usuário"
        placeholder="@"
      />

      <FormTextInput
        control={control}
        name="fullName"
        boxProps={{mb: 's20'}}
        label="Seu nome completo"
        placeholder="Digite seu nome completo"
      />

      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Digite seu email"
      />

      <FormPasswordInput
        control={control}
        name="password"
        boxProps={{mt: 's20'}}
        label="Senha"
        placeholder="Digite sua senha"
      />

      <Button
        mt="s24"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
      />
    </Screen>
  );
}
