import React, { useState, useMemo } from "react";
import Switch from "react-switch";
import Typical from "react-typical";

const Header = ({ sharedData }) => {
  const [checked, setChecked] = useState(false);

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    setTheme();
  };

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };
  const currentTheme = document.body.getAttribute("data-theme") || "light";

  const titles = useMemo(() => {
    if (sharedData) {
      return sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();
    }
    return [];
  }, [sharedData]);

  const name = sharedData ? sharedData.name : '';

  const backgroundImage = currentTheme === "dark"
  ? "url('/Portfolio-dev/images/fond-Acceuil-dark.jpg')"
  : "url('/Portfolio-dev/images/fond-acceuil-light.jpg')";
 // const HeaderTitleTypeAnimation = useMemo(() => {
 //   return () => // className="title-styles" steps={titles} loop={50} />;
 // }, [titles]);

  const HeaderTitleTypeAnimation = useMemo(() => {
    return () => <Typical className="title-styles" steps={titles} loop={50} />;
  }, [titles]);

 /*<h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>

            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>*/
  return (
    <header id="home" style={{ height: `${window.innerHeight - 70}px` , display: 'block', backgroundImage: backgroundImage, backgroundSize : 'cover' }}>
      <div className="row aligner" style={{ height: '100%' }}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br />
            <h1 >
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <br />
            <div className="contact-header mx-auto" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: 'smooth' })}>
              Contact
            </div>
            <Switch
              checked={checked}              
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto switch-position"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:first-quarter-moon-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
