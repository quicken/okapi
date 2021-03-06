import ReactDOM from "react-dom";
import { FunctionComponent } from "react";
import { ActionButton } from "@mscherzer/ui-common-form";
import DatePicker from "@mscherzer/ui-component-datepicker";
import { Page } from "@mscherzer/ui-common-view";
import { MainNavigation } from "./components/MainNavigation";
interface ApplicationProps {
  locale: string;
}

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
          <ActionButton
            type="save"
            onClick={(e: any) => console.log("Hello World.")}
          >
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
