import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
import myClientId from '../clientId';
import Constants, { ExecutionEnvironment } from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

const isExpoGo = Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: `https://github.com/settings/connections/applications/${myClientId ? myClientId : '9fc5789498d737527dd7'}`,
};

export default function SignIn() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: isExpoGo ? myClientId /* expo go */ : '9fc5789498d737527dd7' /* web */,
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'exp'
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(code)
      console.log(response.type)
      if (response.type) {

      }
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        console.log(request)
      }}
    />
  );
}