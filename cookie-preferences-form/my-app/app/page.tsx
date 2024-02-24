import { ToggleButton } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        <div className="row">
          {/* <object data="./assets/cookie.svg"></object> */}
          <p className="font-bold">Cookie Preferences</p>
        </div>
        <p className="">
          Manage your cookie settings. You can enable or disable different types
          of cookies below.
        </p>
        <hr />
        <SettingContainer>
          <div className="description">
            <p className="weight_md">Essential Cookies</p>
            <p className="weight_sm">
              These cookies are necessary for the website to function and cannot
              be switched off.
            </p>
          </div>
          <ToggleButton />
        </SettingContainer>

        <SettingContainer>
          <div className="description">
            <p className="weight_md">Analytics Cookies</p>
            <p className="weight_sm">
              These cookies allow us to count visits and traffic sources, so we
              can measure and improve the performance of our site.
            </p>
          </div>

          <ToggleButton />
        </SettingContainer>

        <SettingContainer>
          <div className="description">
            <p className="weight_md">Marketing Cookies</p>
            <p className="weight_sm">
              These cookies help us show you relevant ads.
            </p>
          </div>
          <ToggleButton />
        </SettingContainer>
        <hr />
        <div className="button_container">
          <button>Save Preferences</button>
        </div>
      </div>
    </main>
  );
}

import React from "react";

function SettingContainer({ children }: any) {
  return <div className="flex items-center justify-between">{children}</div>;
}
