import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Titlebar() {
  return (
    <React.Fragment>
      <div className="auth-background ui center aligned middle aligned grid">
        <div class="ui card column auth-form">
          <div class="content">
            <div class="header left aligned">Let's get started</div>
            <div class="description">
              <form class="ui form">
                <div class="field left aligned">
                  <div class="ui fluid input">
                    <input
                      type="text"
                      aria-invalid="true"
                      placeholder="Last name"
                    />
                  </div>
                  <div
                    class="ui pointing above prompt label"
                    role="alert"
                    aria-atomic="true"
                  >
                    Please enter your last name
                  </div>
                </div>
                <div class="field">
                  <div class="ui right corner labeled input">
                    <div class="ui label label right corner">
                      <i aria-hidden="true" class="asterisk icon"></i>
                    </div>
                    <input type="text" placeholder="password" />
                  </div>
                </div>
                <div class="field">
                  <div class="ui right corner labeled input">
                    <div class="ui label label right corner">
                      <i aria-hidden="true" class="asterisk icon"></i>
                    </div>
                    <input type="text" placeholder="confirm password" />
                  </div>
                </div>
                <button class="ui button primary">Get started</button>
              </form>
            </div>
          </div>
          <div class="extra content">
            Already have account?{" "}
            <a href="" class="ui teal label">
              Login
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Titlebar;
