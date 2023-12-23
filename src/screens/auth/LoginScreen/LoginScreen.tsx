import React from 'react';
import {Pressable} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {AuthScreenProps} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    console.log(email, password);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Box
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        mb="s8">
        <Text preset="headingLarge">Minha Mochila</Text>
      </Box>
      <Box mb="s24" justifyContent="center" alignItems="center">
        <Text preset="headingSmall">Salve os seus documentos</Text>
        <Text preset="headingSmall">em um só lugar!</Text>
      </Box>

      <FormTextInput
        control={control}
        name="email"
        label="Email"
        placeholder="Entre com o seu email"
      />

      <FormPasswordInput
        control={control}
        name="password"
        boxProps={{mt: 's8'}}
        label="Password"
        placeholder="Entre com a sua senha"
      />

      <Box mt="s8" alignSelf="flex-start" alignItems="center">
        <Pressable onPress={navigateToForgotPasswordScreen}>
          <Text bold color="error" preset="paragraphSmall">
            Esqueceu a senha?
          </Text>
        </Pressable>
      </Box>
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        backgroundColor="greenSuccess"
        mt="s24"
        title="Entrar"
      />

      <Box
        mt="s20"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderColor="gray4"
        borderRightWidth={0}
        borderBottomWidth={0}
        borderLeftWidth={0}>
        <Text color="gray2" bold preset="paragraphMedium" paddingTop="s8">
          Logue com suas redes sociais
        </Text>
      </Box>
      <Button
        mt="s8"
        backgroundColor="googleColor"
        title="Logar com o Google"
      />
      <Button
        mt="s8"
        backgroundColor="facebookColor"
        title="Logar com o Facebook"
      />

      <Box mt="s20" justifyContent="center" alignItems="center">
        <Text bold color="gray2" preset="paragraphMedium">
          Ainda não possui uma conta?
        </Text>
        <Pressable onPress={navigateToSignUpScreen}>
          <Text bold color="gray2" preset="paragraphMedium">
            Cadastre-se{' '}
            <Text bold color="error" preset="paragraphMedium">
              aqui!
            </Text>
          </Text>
        </Pressable>
      </Box>
    </Screen>
  );
}
