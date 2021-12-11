import ReactDOM from "react-dom";
import { FunctionComponent, useDebugValue } from "react";
import { ActionButton } from "@mscherzer/ui-common-form";
import DatePicker from "@mscherzer/ui-component-datepicker";
import { Page } from "@mscherzer/ui-common-view";
import { MainNavigation } from "./components/MainNavigation";

import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const cognitoClient = new CognitoIdentityProviderClient({
  region: "ap-southeast-2",
});

interface ApplicationProps {
  locale: string;
}

let foo = async () => {
  let command = new SignUpCommand({
    ClientId: "",
    Username: "",
    Password: "1234",
  });
  try {
    const data = await cognitoClient.send(command);
    console.log(data);
  } catch (error: any) {
    const { requestId, cfId, extendedRequestId } = error.$metadata;
    console.log({ requestId, cfId, extendedRequestId });
  }

  console.log("Hello Slut World.");
};

// Hosted UI:
// https://qscan.auth.ap-southeast-2.amazoncognito.com/login?client_id=69olbu45ms4cfr4lj47iv0gkrh&response_type=code&scope=email+openid&redirect_uri=https://127.0.0.1/oauth/callback

// Quicken
// PassW0rd!
// Sample Response after sign-up:
// https://127.0.0.1/oauth/callback?code=e92b755e-95da-48eb-8b30-31cc98402a74
// This an Authorization Code that is then exchanged for a Access Token from the Token Endpoint.
//
// Also see this page.
// Authorization Endpoint
// https://qscan.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize

// Token Endpoint
// https://qscan.auth.ap-southeast-2.amazoncognito.com/oauth2/token

// UserInfo Endpoint
// https://qscan.auth.ap-southeast-2.amazoncognito.com/oauth2/userInfo

// Login Endpoint
// https://qscan.auth.ap-southeast-2.amazoncognito.com/oauth2/login

// Logout Endpoint
// https://qscan.auth.ap-southeast-2.amazoncognito.com/oauth2/login

export const Application: FunctionComponent<ApplicationProps> = (props) => {
  console.log("v0.0.1");
  return (
    <>
      <header>
        <MainNavigation></MainNavigation>
      </header>
      <main>
        <section>
          <h1>OKApi Demo</h1>
        </section>
        <Page>
          Hello World
          <ActionButton type="save" onClick={(e: any) => foo()}>
            Click me
          </ActionButton>
          <DatePicker
            onChange={(name: string, value: Date, data?: any) => {
              console.log(name, value, data);
            }}
          ></DatePicker>
        </Page>
      </main>
      <footer></footer>
    </>
  );
};

let bootstrap = async () => {
  let params = new URLSearchParams(document.location.search);
  let locale = params.get("l")
    ? (params.get("l") as string)
    : "au"; /* The locale for example. au=Australia, de=Germany*/

  ReactDOM.render(
    <Application locale={locale}></Application>,
    document.getElementById("root")
  );
};

bootstrap();
