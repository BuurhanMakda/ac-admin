import React, { useState } from "react";
import { ActivityIndicator } from "react-native-paper";

import useAuth from "../../services/Auth/Auth.hook";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, ErrorContainer, Title } from "./Login.styles";
import Text from "../../utils/Typography";
import Spacer from "../../utils/Spacer";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { userLogin, error, isLoading } = useAuth();
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Ali Communication Admin</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => userLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={'blue'} />
          )}
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default LoginScreen;
