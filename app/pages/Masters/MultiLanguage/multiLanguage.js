import React, { Component } from "react";
import { MultiLang, Determinator } from "react-multi-language";
 
class App extends Component {
  state = {
    lang: "en",
  };
 
  changeLang = () => {
    this.setState(state => ({ lang: state.lang === "en" ? "fr" : "en" }));
  };
 
  render() {
    return (
      <div onClick={this.changeLang} style={{marginTop:"80px"}}>
        <Determinator>
          {{
            fr: "Bonjour le monde",
            en: "Hello World"
          }}
        </Determinator>
        <Determinator till={<span>Loading...</span>}>
          {async (lang, add) => {
            setTimeout(() => {
              if (lang == 'fr') 
                add("Bonjour le monde")
              if (lang == 'en') 
                add("Hello World");
              }
            , 1000);
          }}
        </Determinator>
        <Determinator>
          {"Hello World"}
        </Determinator>
        {/*MultiLang component must be after all the Determinators*/}
        <MultiLang lang={this.state.lang}/>
      </div>
    );
  }
}
 
export default App;