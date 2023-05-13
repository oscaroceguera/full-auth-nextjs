import * as React from "react";
import RegisterForm from "../components/forms/Register";
import Background from "../components/backgrounds/Background";

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="flex items-center justify-center">
        <div className="border w-full h-[100vh] flex items-center justify-center">
          <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/3 h-full bg-white flex flex-col items-center justify-center">
            <RegisterForm />
          </div>
          <Background image="../../auth/register.jpg" />
        </div>
      </div>
    );
  }
}
